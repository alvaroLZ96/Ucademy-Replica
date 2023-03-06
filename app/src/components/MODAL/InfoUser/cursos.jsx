import cursos from "../../../assets/cursos.svg";
import cursosAvance from "../../../assets/cursosavance.svg";
const Cursos = () => {
  return (
    <div className="cursosDiv">
      <div className="curso">
        <p>Curso 01</p>
        <img src={cursos} alt="grafico"></img>
        {/* <progress max="100" value="50">
          50%
        </progress> */}
        <span>Fecha de inscripción 01-09-2022</span>
      </div>
      <div className="curso">
        <p>Curso 02</p>
        <img src={cursos}></img>
        {/* <progress max="100" value="50">
          50%
        </progress> */}
        <span>Fecha de inscripción 01-09-2022</span>
      </div>
      <div className="curso">
        <p>Curso 03</p>
        <img src={cursos}></img>
        {/* <progress max="100" value="50">
          50%
        </progress> */}
        <span>Fecha de inscripción 01-09-2022</span>
      </div>
      <div className="curso">
        <p>Curso 04</p>
        <img src={cursos}></img>
        {/*  <progress max="100" value="50">
          50%
        </progress> */}
        <span>Fecha de inscripción 01-09-2022</span>
      </div>
      <div className="curso">
        <p>Curso 05</p>
        <img src={cursos}></img>
        {/* <progress max="100" value="50">
          50%
        </progress> */}
        <span>Fecha de inscripción 01-09-2022</span>
      </div>
    </div>
  );
};
export default Cursos;
