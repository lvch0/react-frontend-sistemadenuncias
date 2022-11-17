import "./datatable.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable, { createTheme } from "react-data-table-component";

const columns = [
  {
    name: "Id",
    selector: (row) => row.idUsuario,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
  },
  {
    name: "Contraseña",
    selector: (row) => row.contrasena,
  },
  {
    name: "Rol",
    selector: (row) => row.tipousuario.descripcion,
  },
];

createTheme(
  "custom",
  {
    text: {
      primary: "rgba(0,0,0,.54)",
      secondary: "rgba(0,0,0,.54)",
    },
    background: {
      default: "#FFFFFF",
    },
    context: {
      background: "#1f6eff",
      text: "#FFFFFF",
    },
    divider: {
      default: "#05050589",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

function Datatable(usuario) {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/users");
      const users = response.data;
      // console.log(users)
      setUsuarios(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <div className="datatable">
      <DataTable columns={columns} data={usuarios} theme="custom" />
    </div>
  );
}

export default Datatable;
