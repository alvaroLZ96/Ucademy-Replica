import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import GlobalContext from "../../../context/GlobalContext.jsx";
import { UserContext } from "../../../pages/ESTUDIANTES/estudiantes";
import { putData } from "../../../services/API";
const EditUser = () => {
  const user = useContext(UserContext);
  const { interruptor, setInterruptor } = useContext(GlobalContext);
  const [username, setUsername] = useState(user.username);
  const [name, setName] = useState(user.fullname);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const putUser = (ev) => {
    console.log(user);
    ev.preventDefault();
    const student = {
      ...user,
      fullname: `${name} ${surname}`,
      username: username,
      email: email,
      phone: phone,
    };

    putData("students", student);
    setInterruptor(!interruptor);
  };

  return (
    <form onSubmit={(ev) => putUser(ev)}>
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
      <button className="guardarBtn fixGuardarBtn" type="submit">
        Guardar
      </button>
    </form>
  );
};

export default EditUser;
