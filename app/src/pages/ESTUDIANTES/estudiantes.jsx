import "./styles.css";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import NewUser from "../../components/MODAL/createUser/createamember";
import ModalInfo from "../../components/MODAL/InfoUser/modalInfo";
import GlobalContext from "../../context/GlobalContext";
import { getData } from "../../services/API.JS";

const Estudiantes = () => {
  const [studentsList, setstudentsList] = useState([]);
  const { interruptor } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      const dataList = await getData("students");
      setstudentsList(dataList);
    })();
  }, [JSON.stringify(studentsList), interruptor]);

  return (
    <div className="studentsDiv">
      <div className="modalDiv">
        <NewUser />
      </div>
      <table className="table">
        <thead>
          <tr className="tableHeader">
            <td className="conexionCn">Conexión</td>
            <td className="fullnameCn">Nombre y Apellidos</td>
            <td className="usernameCn">Nombre de usuario</td>
            <td className="emailCn">Email</td>
            <td className="movilCn">Móvil</td>
          </tr>
        </thead>
        <tbody>
          {studentsList.map((user) => (
            <tr key={user.id} className="studentsDiv">
              <td className="offline">
                <div>Offline</div>
              </td>
              <td>{user.fullname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <UserContext.Provider value={user}>
                  <ModalInfo user={user} />
                </UserContext.Provider>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estudiantes;

export const UserContext = createContext();
