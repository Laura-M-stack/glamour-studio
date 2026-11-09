import { describe, expect, it } from "vitest";
import { buildBookingMessage, parseLocalDate, slotsFor, toInputDate, validateBooking } from "./booking";

// Wednesday 11 Nov 2026, 12:10 local time.
const NOW = new Date(2026, 10, 11, 12, 10);
const valid = { name: "Ana", service: "Cortes y color", date: "2026-11-13", time: "10:00", notes: "" };

describe("parseLocalDate", () => {
  it("parses as a local date (no UTC shift)", () => {
    const d = parseLocalDate("2026-11-13")!;
    expect([d.getFullYear(), d.getMonth(), d.getDate()]).toEqual([2026, 10, 13]);
  });

  it("rejects invalid or rolled-over dates", () => {
    expect(parseLocalDate("")).toBeNull();
    expect(parseLocalDate("13/11/2026")).toBeNull();
    expect(parseLocalDate("2026-02-31")).toBeNull();
  });

  it("round-trips with toInputDate", () => {
    expect(toInputDate(parseLocalDate("2026-01-05")!)).toBe("2026-01-05");
  });
});

describe("slotsFor", () => {
  it("returns half-hour slots within opening hours", () => {
    const friday = slotsFor(parseLocalDate("2026-11-13")!, NOW);
    expect(friday[0]).toBe("10:00");
    expect(friday.at(-1)).toBe("18:30");
    expect(friday).toHaveLength(18);
  });

  it("uses shorter Saturday hours and closes on Sunday", () => {
    expect(slotsFor(parseLocalDate("2026-11-14")!, NOW).at(-1)).toBe("13:30");
    expect(slotsFor(parseLocalDate("2026-11-15")!, NOW)).toEqual([]);
  });

  it("hides past slots for today", () => {
    const today = slotsFor(NOW, NOW);
    expect(today[0]).toBe("12:30");
  });
});

describe("validateBooking", () => {
  it("accepts a complete form", () => {
    expect(validateBooking(valid, NOW)).toEqual({});
  });

  it("requires name, service and date", () => {
    const errors = validateBooking({ name: " ", service: "", date: "", time: "", notes: "" }, NOW);
    expect(Object.keys(errors).sort()).toEqual(["date", "name", "service"]);
  });

  it("rejects past dates and closed days", () => {
    expect(validateBooking({ ...valid, date: "2026-11-10" }, NOW).date).toMatch(/pasó/);
    expect(validateBooking({ ...valid, date: "2026-11-15" }, NOW).date).toMatch(/no hay turnos/);
  });

  it("requires a time that exists for that day", () => {
    expect(validateBooking({ ...valid, time: "" }, NOW).time).toBeDefined();
    expect(validateBooking({ ...valid, date: "2026-11-14", time: "16:00" }, NOW).time).toMatch(/disponible/);
    expect(validateBooking({ ...valid, date: "2026-11-11", time: "11:00" }, NOW).time).toMatch(/disponible/);
  });
});

describe("buildBookingMessage", () => {
  it("includes the data and skips empty notes", () => {
    const msg = buildBookingMessage(valid, "Glamour Studio");
    expect(msg).toContain("Nombre: Ana");
    expect(msg).toContain("viernes");
    expect(msg).toContain("Horario: 10:00 h");
    expect(msg).not.toContain("Detalle");
    expect(buildBookingMessage({ ...valid, notes: " Boda " }, "X")).toContain("Detalle: Boda");
  });
});
