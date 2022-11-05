import React from "react";
import Navbar from "../../components/nav-bar/NavBar";
import Sidebar from "../../components/side-bar/SideBar";
import Form from "./Form";
import "./form.scss";

function FormLayout() {
  return (
    <div className="formLayoutCont">
      <Sidebar />
      <div className="formContainer">
        <Navbar />
        <Form />
      </div>
    </div>
  );
}

export default FormLayout;
