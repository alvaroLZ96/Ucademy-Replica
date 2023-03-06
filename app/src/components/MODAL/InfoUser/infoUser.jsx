import "./../../MODAL/styles.css";

import { useContext } from "react";

import calendario from "../../../assets/calendario.svg";
import email from "../../../assets/mailDark.svg";
import movil from "../../../assets/movil.svg";
import profileImage from "../../../assets/profile.svg";
import userLogo from "../../../assets/user.svg";
import { UserContext } from "../../../pages/ESTUDIANTES/estudiantes";

export const InfoUser = () => {
  const user = useContext(UserContext);
  return (
    <div className="infoDiv">
      {" "}
      {/* datauser */}
      <div className="imgDiv">
        {/* mountaindiv */}
        <img src={profileImage} alt="imagen de perfil" />
      </div>
      <div className="namesDiv">
        {/* //tododatos */}
        <div className="fullnameDiv namefields">
          {" "}
          {/* //nombres */}
          <img src={userLogo} />
          <div className="fullnameText">
            {" "}
            {/* textnombres */}
            <div className="nameContainer">
              <p className="dataTitle">Nombre y apellidos</p>
              <p className="dataAnswer">{user.fullname}</p>
            </div>
            <div>
              <p className="dataTitle">Nombre de usuario</p>
              <p className="dataAnswer">{user.username}</p>
            </div>
          </div>
        </div>

        <div className="namefields">
          <img src={email}></img>
          <div>
            <p className="dataTitle">Email</p>
            <p className="dataAnswer">{user.email}</p>
          </div>
        </div>

        <div className="namefields">
          <img src={movil}></img>
          <div>
            <p className="dataTitle">Movil</p>
            <p className="dataAnswer">{user.phone}</p>
          </div>
        </div>

        <div className="date">
          <img src={calendario}></img>
          <div>
            <p className="dataTitle">Fecha de inscripción</p>
            <p className="dataAnswer">{user.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoUser;
