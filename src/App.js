import React from "react";
import Botao from "./modal/Botao";
import Modal from "./modal/Modal";
function App() {
  let [modal, setModal] = React.useState(false);
  return (
    <div className="App container">
      <div className="container pt-5">
        <div className="row">
          <div className="col d-flex align-items-center flex-column">
            <Botao setModal={setModal} modal={modal}></Botao>
          </div>
          <div className="col d-flex justify-content-center">
            <Modal modal={modal}></Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
