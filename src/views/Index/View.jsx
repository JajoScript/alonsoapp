// Dependencias.
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Index(props) {
  // 1. Manejo del estado.
  const {} = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  // 3. Metodos.
  const redirect = () => {
    navigate("/other");
  };

  // 4. Render.
  return (
    <div className="container">
      <div>
        <h1>Index screen</h1>
        <button onClick={() => redirect()}>Ir a otra vista</button>
      </div>
    </div>
  );
}

export default Index;
