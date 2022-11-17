import React from "react";
import img from "../../assets/images/mantenimiento.png"
import "./notfound.scss"

export const NotFound = () => {
  return (
    <>
      <div className="container">
        <div>
          <img src={img} width={440} height={240}/>
        </div>
        <h1 className="titleNot">¡Ups!</h1>
        <h2>Esta página se encuentra en desarrollo.</h2>
      </div>
    </>
  );
};
