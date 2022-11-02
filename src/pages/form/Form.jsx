import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";

export default function Form() {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // const [valueContr, setValueContr] = React.useState('Controlled');

  // const handleChangeContr = (event) => {
  //   setValue(event.target.valueContr);
  // };

  return (
    <>
      <form className="formu">
        <FormControl
          sx={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            marginTop: 10,
            width: 350,
          }}
        >
          <InputLabel htmlFor="grouped-native-select">ASUNTOS</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="asuntos"
          >
            <option aria-label="None" value="" />
            <optgroup label="Fiscalización de Seguridad y Contaminación Urbana">
              <option value={1}>Ruidos Molestos</option>
              <option value={2}>Quema</option>
              <option value={3}>Residuos/Cacharros</option>
              <option value={4}>Aguas Servidas y Líquidos Cloacales</option>
              <option value={5}>Malezas</option>
              <option value={6}>Animales</option>
              <option value={7}>Local sin Habilitación</option>
              <option value={8}>Aguas Estancadas</option>
              <option value={9}>Filtraciones</option>
              <option value={0}>Pozos Negros/Pozos Sépticos/Letrinas</option>
            </optgroup>
            <optgroup label="Control Bromatológico">
              <option value={1}>Control Bromatológico</option>
            </optgroup>
            <optgroup label="Laboratorio Bromatología">
              <option value={1}>
                Productos Alimenticios no aptos para consumo/comercialización
              </option>
            </optgroup>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            marginTop: 10,
            padding: "auto",
            width: 350,
          }}
        >
          <InputLabel htmlFor="grouped-native-select">PROCEDENCIA</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="procedencia"
          >
            <option aria-label="None" value="" />
            <option value={1}>Call Center</option>
            <option value={2}>Presencial</option>
            <option value={3}>Expediente</option>
            <option value={4}>Notas de otra Dirección</option>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            marginTop: 10,
            padding: "auto",
            width: 250,
          }}
        >
          <TextField fullWidth label="NOMBRE/DENUNCIANTE" id="fullWidth" />
        </FormControl>
        <FormControl
          sx={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            marginTop: 10,
            padding: "auto",
            width: 250,
          }}
        >
          <TextField
            hiddenLabel
            fullWidth
            label="APELLIDO/DENUNCIANTE"
            id="fullWidth"
          />
        </FormControl>
        <FormControl
          sx={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            marginTop: 10,
            padding: "auto",
            width: 250,
          }}
        >
          <TextField fullWidth label="DNI/DENUNCIANTE" id="fullWidth" />
        </FormControl>
        <FormControl
          sx={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            marginTop: 10,
            padding: "auto",
            width: 250,
          }}
        >
          <TextField
            hiddenLabel
            fullWidth
            label="TELÉFONO/DENUNCIANTE"
            id="fullWidth"
          />
        </FormControl>
        <FormControl
          sx={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            m: "auto",
            marginTop: 10,
            padding: "auto",
            width: 250,
          }}
        >
          <TextField fullWidth label="EMAIL/DENUNCIANTE" id="fullWidth" />
        </FormControl>
        <FormControl>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="BARRIO" variant="outlined" />
            <TextField id="outlined-basic" label="CHACRA" variant="outlined" />
            <TextField id="outlined-basic" label="CALLE" variant="outlined" />
          </Box>
        </FormControl>
        <FormControl>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField
              id="outlined-basic"
              label="NUMERACIÓN"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="1° CALLE DE REFERENCIA"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="2° CALLE DE REFERENCIA"
              variant="outlined"
            />
          </Box>
        </FormControl>
        <FormControl>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField id="outlined-basic" label="CALLE" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="NUMERACIÓN"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="EDIFICIO"
              variant="outlined"
            />
          </Box>
        </FormControl>
        <FormControl>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField id="outlined-basic" label="PISO" variant="outlined" />
            <TextField id="outlined-basic" label="BARRIO" variant="outlined" />
            <TextField
              id="outlined-multiline-flexible"
              label="DESCRIPCIÓN"
              multiline
              maxRows={4}
            />
          </Box>
        </FormControl>
        //!Datos del denunciado
        <FormControl>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField id="outlined-basic" label="NOMBRE" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="APELLIDO"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="APODO" variant="outlined" />
          </Box>
        </FormControl>
        <FormControl>
        <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="on"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="DESCRIPCIÓN DE LA UBICACIÓN"
              multiline
              maxRows={4}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="DESCRIPCIÓN DEL DENUNCIADO"
              multiline
              maxRows={4}
            />
          </Box>
        </FormControl>

        <FormControl>
        <TextField
              id="outlined-multiline-flexible"
              label="ESTADO DE LA DENUNCIA"
              multiline   
              maxRows={4}
            />
        </FormControl>
      </form>
    </>
  );
}
