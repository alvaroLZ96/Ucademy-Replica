import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import book from ".././assets/book.svg";
import dashboard from ".././assets/dashboard.svg";
import settings from ".././assets/settings.svg";
import studentsLogo from ".././assets/students.svg";

const Navbar = () => {
  const [subcategories, setSubcategories] = useState(false);
  const toggleMenu = () => {
    setSubcategories(!subcategories);
  };

  return (
    <nav>
      <aside>
        <div className="navbar1">
          <NavLink to={`/dashboard`} style={{ textDecoration: "none" }}>
            <div className="dashboardDiv mainDivsNav">
              <img src={dashboard} alt="dashboard Logo" />
              <p>Dashboard</p>
            </div>
          </NavLink>

          <div
            className="miacademiaDiv mainDivsNav"
            onClick={toggleMenu}
            style={{ cursor: "pointer" }}
          >
            <img src={studentsLogo} alt="students Logo" />
            <p>Mi Academia</p>
          </div>

          {subcategories && (
            <div className="subscademia">
              <NavLink to={`/dashboard`}>
                <p className="subscademia1">Editar Academia</p>
              </NavLink>
              <NavLink to={`/dashboard/miacademia/estudiantes`}>
                <p className="subscademia2">Estudiantes</p>
              </NavLink>
              <NavLink to={`/dashboard/miacademia/profesores`}>
                <p className="subscademia3">Profesores</p>
              </NavLink>
            </div>
          )}
          <NavLink to={`/cursos`} style={{ textDecoration: "none" }}>
            <div className="cursosNav mainDivsNav">
              <img src={book} alt="book Logo" />
              <p>Cursos</p>
            </div>
          </NavLink>
        </div>

        <div className="navbar2">
          <NavLink to={`/settings`} style={{ textDecoration: "none" }}>
            <div className="settingDiv mainDivsNav">
              <img src={settings} alt="dashboard Logo" />
              <p>Ajustes</p>
            </div>
          </NavLink>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
