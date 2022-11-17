import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Users from "./pages/users/Users"
import Single from "./pages/single/Single"
import New from "./pages/new-user/New"
import Form from "./pages/form/Form"
import Datatable from "./components/datatable/Datatable";
// import { Route, Router } from "react-router-dom";
const { BrowserRouter, Routes, Route } = require("react-router-dom")


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />

            <Route path="users" element={<Home />}>
              <Route index element={<Datatable />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="form" element={<Home />}>
              <Route index element={<Form />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
