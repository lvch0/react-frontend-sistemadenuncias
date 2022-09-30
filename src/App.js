import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Users from "./pages/users/Users"
import Single from "./pages/single/Single"
import New from "./pages/new-user/New"
import { Form } from "./pages/form/Form";
// import Auth from "./pages/login/Auth"
// import { Route, Router } from "react-router-dom";
const { BrowserRouter, Routes, Route } = require("react-router-dom")


function App() {
  return (
    <>
      {/* <Home/>
      {/* <Login/> */}
      {/* <Auth/>      */}
      {/* <LoginPage/> */}
      {/* <Login/> */}
      {/* <FormPage></FormPage> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>

            <Route path="form">
              <Route index element={<Form />} />
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
