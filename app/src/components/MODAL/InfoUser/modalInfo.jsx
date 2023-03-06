import React, { useState } from "react";
import Popup from "reactjs-popup";

import info from "../../../assets/info.svg";
import Cursos from "./cursos";
import EditUser from "./editUser";
import InfoUser from "./infouser";

const ModalInfo = () => {
  const [screen, setScreen] = useState("infouser");

  return (
    <Popup
      trigger={
        <button className="infoBtn">
          <img src={info} alt="info" />
        </button>
      }
      modal
    >
      {(close) => (
        <div className="modal">
          <div className="modalPt1">
            <div className="headerPopup">
              <div className="btnsLeft">
                <button className="cursosBtn" onClick={() => setScreen("infouser")}>
                  Perfil
                </button>
                <button className="cursosBtn" onClick={() => setScreen("cursos")}>
                  Cursos
                </button>
              </div>
              <div className="btnsRight">
                {screen === "infouser" ? (
                  <button className="editBtn" onClick={() => setScreen("edituser")}>
                    {" "}
                    Editar estudiante{" "}
                  </button>
                ) : screen === "edituser" ? (
                  <>
                    <button
                      className="cancelarediciónBtn"
                      onClick={() => setScreen("infouser")}
                    >
                      {" "}
                      Cancelar edición{" "}
                    </button>
                    <button className="guardarBtn"> Guardar </button>
                  </>
                ) : null}
              </div>
            </div>

            <div className="contentPopup">
              {screen === "infouser" ? (
                <InfoUser />
              ) : screen === "cursos" ? (
                <Cursos />
              ) : screen === "edituser" ? (
                <EditUser />
              ) : null}
            </div>
          </div>
          <div className="modalPt2">
            <button
              className="closeBtn"
              onClick={() => {
                console.log("modal closed ");
                setScreen("infouser");
                close();
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
export default ModalInfo;
