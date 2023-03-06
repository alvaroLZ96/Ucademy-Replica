import "./../../MODAL/styles.css";

import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { v4 as uuidv4 } from "uuid";

import GlobalContext from "../../../context/GlobalContext.jsx";
import { postData } from "../../../services/API.js";

const NewUser = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { interruptor, setInterruptor } = useContext(GlobalContext);

  const createUser = (ev) => {
    ev.preventDefault();
    const newUser = {
      fullname: `${name} ${surname}`,
      username: username,
      email: email,
      phone: phone,
      id: uuidv4(),
    };

    console.log(newUser);
    postData("students", newUser);

    setInterruptor(!interruptor);
    navigate("/dashboard/miacademia/estudiantes");
  };

  return (
    <Popup
      trigger={
        <button className="newStudentBtn">
          <p>
            <HiOutlinePlusCircle />
          </p>
          <div>Nuevo estudiante</div>
        </button>
      }
      modal
    >
      {(close) => (
        <div className="modal">
          <div className="modalPt1">
            <div className="headerPopup"></div>
            <div className="formDiv">
              <form onSubmit={(ev) => createUser(ev)}>
                <div className="contentPopup">
                  <div className="nombreyapellidos toTheLimit">
                    <div className="nombre">
                      <span>Nombre</span>
                      <input onChange={(ev) => setName(ev.target.value)}></input>
                    </div>
                    <div className="Apellidos">
                      <span>Apellidos</span>
                      <input onChange={(ev) => setSurname(ev.target.value)}></input>
                    </div>
                  </div>
                  <div className="username toTheLimit">
                    <span>Nombre de usuario</span>
                    <input onChange={(ev) => setUsername(ev.target.value)}></input>
                  </div>
                  <div className="email toTheLimit">
                    <span>Email</span>
                    <input onChange={(ev) => setEmail(ev.target.value)}></input>
                  </div>
                  <div className="móvil">
                    <span>Móvil</span>
                    <input onChange={(ev) => setPhone(ev.target.value)}></input>
                  </div>
                </div>
                <div className="modalPt2">
                  <button
                    className="closeBtn"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    Cerrar
                  </button>
                  <button className="guardarBtn" type="submit">
                    <span className="button_top">Guardar</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default NewUser;
