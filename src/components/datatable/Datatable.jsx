import "./datatable.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "Usuario", width: 130 },
//   { field: "rol", headerName: "Rol", width: 130 },
//   { field: "password", headerName: "Contraseña", width: 130 },
//   //   //   {
//   //   //     field: "fullName",
//   //   //     headerName: "Full name",
//   //   //     description: "This column has a value getter and is not sortable.",
//   //   //     sortable: false,
//   //   //     width: 160,
//   //   //     renderCell: (params) => {
//   //   //         return (
//   //   //             <>
//   //   //                 <span>{params.row.lastName}</span>
//   //   //                 <p>{params.row.age}</p>
//   //   //             </>
//   //   //         )
//   //   //     }
//   //   //   }
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

const columns = [
  {
    name: "Id",
    selector: row => row.idUsuario,
  },
  {
    name: "Nombre",
    selector: row => row.nombre,
  },
  {
    name: "Contraseña",
    selector: row => row.contrasena,
  },
  {
    name: "Rol",
    selector: row => row.tipousuario.descripcion
  }
]

function Datatable(usuario) {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/users")
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
      <DataTable
        columns={columns}
        data={usuarios}
      />
    </div>
  );
}

export default Datatable;
