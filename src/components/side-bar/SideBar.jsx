import "./sideBar.scss";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ContentPasteSearchTwoToneIcon from "@mui/icons-material/ContentPasteSearchTwoTone";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Outlet, Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation()
  const url = location.pathname
  console.log(location)
  
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img src="../../assets/images/005.png" width={181} height={100} />
        </span>
      </div>

      <hr />

      <div className="center">
        <ul>
          <li>
            <HomeIcon className="icons" color="disabled"/>
            <span>Inicio</span>
          </li>
          <li>
            <ArticleIcon className="icons" color="disabled"/>
            <span>Formulario</span>
          </li>
          <li>
            <FindInPageIcon className="icons" color="disabled"/>
            <span>Seguimiento</span>
          </li>
          <li>
            <PeopleAltIcon className="icons" color="disabled"/>
            <span>Usuarios</span>
          </li>
          <li>
            <ContentPasteSearchTwoToneIcon className="icons" color="disabled"/>
            <span>Expedientes</span>
          </li>
          <li>
            <LogoutIcon className="icons" color="disabled"/>
            <span>Cerrar Sesión</span>
          </li>
        </ul>

        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>

      <div className="bottom">color</div>
    </div>
  );
}

export default SideBar;
