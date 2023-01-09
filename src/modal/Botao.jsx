import "./Botao.css";
import React from "react";

const Botao = ({ modal, setModal }) => {
  return (
    <button
      onClick={() => setModal(!modal)}
      style={{ maxWidth: "150px", backgroundColor: modal ? "red" : "blue" }}
    >
      {modal ? "Fechar modal" : "Abrir modal"}
    </button>
  );
};

export default Botao;
