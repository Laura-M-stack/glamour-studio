# Glamour Studio — landing de salón de belleza

Landing de demostración para un salón de belleza ficticio, con estética **neobrutalista oscura**: bordes negros gruesos, sombras duras y una paleta violeta, rosa y amarillo.

**Demo:** https://laura-m-stack.github.io/glamour-studio/

> Glamour Studio es un negocio ficticio creado para mostrar el tipo de sitio que diseño y desarrollo para negocios de belleza y servicios.

## Qué incluye

- Hero con fotografía, stickers y llamada a la acción directa a WhatsApp
- Servicios, staff y opiniones
- **Formulario de turnos** que valida los datos y arma el mensaje de WhatsApp:
  - no permite fechas pasadas ni días cerrados
  - ofrece solo horarios disponibles según el día (y oculta los que ya pasaron hoy)
- Datos del negocio centralizados en `src/config/salon.ts`: adaptarlo a un cliente real es editar un solo archivo
- Accesibilidad: navegación por teclado, menú móvil con `aria-expanded`, enlace para saltar al contenido, contraste AA y respeto por `prefers-reduced-motion`
- Imágenes en WebP con dimensiones explícitas (sin saltos de layout) y metadatos Open Graph para compartir

## Stack

React 19 · TypeScript · Vite 7 · Framer Motion · Vitest

## Desarrollo

```bash
npm install
npm run dev
npm test        # tests de la lógica de turnos
npm run build   # chequea tipos, compila y publica en GitHub Pages
```

## Créditos

Diseño y desarrollo: [Laura Moyano](https://laura-moyano-web.pages.dev/)
