import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="loader__card">
        <span className="loader__logo">✦</span>
        <p className="loader__text">Glamour Studio</p>
        <p className="loader__sub">Cargando brillo...</p>
        <div className="loader__bar">
          <div className="loader__bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
