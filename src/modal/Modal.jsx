import React from "react";
import spike from "../img/spike.png";
import "./Modal.css";

const Modal = ({ modal, setModal }) => {
  if (modal) {
    return (
      <div className="meuModal">
        <img src={spike} alt="spike"></img>
        <div className="infos">
          <h1 className="text-center">Spike</h1>
          <p>
            Spike Spiegel é o principal protagonista da série de anime Cowboy
            Bebop. Ele é um caçador de recompensas ou "cowboy" (como ele é
            referido em várias ocasiões) em uma nave espacial chamada Bebop e
            viaja pelo espaço com sua tripulação composta por seu velho amigo,
            Jet, e membros recentes, Faye, Ed e Ein.
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
