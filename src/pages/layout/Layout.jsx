import React from "react";
import "./layout.scss";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ContentPasteSearchTwoToneIcon from "@mui/icons-material/ContentPasteSearchTwoTone";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const urlActual = location.pathname;
  console.log(location);

  return (
    <div className="layout">
      <div className="top">
        <span className="logo">
          <img src="../../assets/images/005.png" width={80} height={800} />
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <HomeIcon className="icons" />
            <span>
              <Link className="link" to="/home">
                Home
              </Link>
            </span>
          </li>
          <li>
            <ArticleIcon className="icons" />
            <span>
              <Link className="link" to="/form">
                Formulario
              </Link>
            </span>
          </li>
          {/* <li>
            <FindInPageIcon className="icons" />
            <span>
              <Link to="/files">Expedientes</Link>
            </span>
          </li> */}
          <li>
            <PeopleAltIcon className="icons" />
            <span>
              <Link className="link" to="/users">
                Usuarios
              </Link>
            </span>
          </li>
          <li>
            <ContentPasteSearchTwoToneIcon className="icons" />
            <span>
              <Link className="link" to="/files">
                Expedientes
              </Link>
            </span>
          </li>
          <li>
            <LogoutIcon className="icons" />
            <span>
              <Link className="link" to="/home">
                Cerrar Sesión
              </Link>
            </span>
          </li>
        </ul>

        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>

      <div className="layoutIndex">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
