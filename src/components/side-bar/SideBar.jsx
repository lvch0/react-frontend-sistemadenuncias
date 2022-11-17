import "./sideBar.scss";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ContentPasteSearchTwoToneIcon from "@mui/icons-material/ContentPasteSearchTwoTone";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { Outlet, Link, useLocation } from "react-router-dom";
import img from "../../assets/images/007.png";

function SideBar() {
  const location = useLocation();
  const url = location.pathname;
  console.log(location);
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img src={img} width={220} height={110} />
        </span>
      </div>

      <hr />

      <div className="center">
        <ul>
          <li className="link">
            <HomeIcon className="icons" />
            <span>
              <Link className="link" to="/home" style={{textDecoration: "none"}}>Inicio</Link>
            </span>
          </li>
          <li className="link">
            <ArticleIcon className="icons" />
            <span>
              <Link className="link" to="/form" style={{textDecoration: "none"}}>Formulario</Link>
            </span>
          </li>
          <li className="link">
            <FindInPageIcon className="icons" />
            <span>
            <Link className="link" to="/files" style={{textDecoration: "none"}}>Seguimiento</Link>
            </span>
          </li>
          <li className="link">
            <PeopleAltIcon className="icons" />
            <span>
            <Link className="link" to="/users" style={{textDecoration: "none"}}>Usuarios</Link>
            </span>
          </li>
          <li className="link">
            <ContentPasteSearchTwoToneIcon className="icons" />
            <span>
            <Link className="link" to="/files" style={{textDecoration: "none"}}>Expedientes</Link>
            </span>
          </li>
          <li className="link">
            <LogoutIcon className="icons" />
            <span>
            <Link className="link" to="/" style={{textDecoration: "none"}}>Cerrar Sesión</Link>
            </span>
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
