import { Outlet } from "react-router-dom";
import Navbar from "../../components/nav-bar/NavBar";
import SideBar from "../../components/side-bar/SideBar";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <Navbar />
        <div className="outletContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
