import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/nav-bar/NavBar";
import Sidebar from "../../components/side-bar/SideBar";
import "./users.scss";

function Users() {  
  return (
    <div className="user-list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}

export default Users;
