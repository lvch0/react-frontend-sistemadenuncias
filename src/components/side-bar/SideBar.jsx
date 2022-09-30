import "./sideBar.scss";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ContentPasteSearchTwoToneIcon from "@mui/icons-material/ContentPasteSearchTwoTone";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from '@mui/icons-material/Logout';

function SideBar() {
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
            <HomeIcon className="icons"/>
            <span>Inicio</span>
          </li>
          <li>
            <ArticleIcon className="icons"/>
            <span>Formulario</span>
          </li>
          <li>
            <FindInPageIcon className="icons"/>
            <span>Seguimiento</span>
          </li>
          <li>
            <PeopleAltIcon className="icons"/>
            <span>Usuarios</span>
          </li>
          <li>
            <ContentPasteSearchTwoToneIcon className="icons"/>
            <span>Expedientes</span>
          </li>
          <li>
            <LogoutIcon className="icons"/>
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
