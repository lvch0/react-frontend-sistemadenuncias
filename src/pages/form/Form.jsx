import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Grid from "@mui/material/Grid";
import "./form.scss";

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
      <h1 className="formTitle">Formulario de Denuncias</h1>
      <form className="formContainer">
        <div className="formHeader">
          <h2>Clasificación de la Denuncia</h2>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="off"
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
                  <option value={0}>
                    Pozos Negros/Pozos Sépticos/Letrinas
                  </option>
                </optgroup>
                <optgroup label="Control Bromatológico">
                  <option value={1}>Control Bromatológico</option>
                </optgroup>
                <optgroup label="Laboratorio Bromatología">
                  <option value={1}>
                    Productos Alimenticios no aptos para
                    consumo/comercialización
                  </option>
                </optgroup>
              </Select>
            </Box>
          </FormControl>

          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <InputLabel htmlFor="grouped-native-select">
                PROCEDENCIA
              </InputLabel>
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
            </Box>
          </FormControl>
        </div>
        <div className="denuncianteContainer">
          <h2>Datos del Denunciante</h2>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField fullWidth label="NOMBRE" id="fullWidth" />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                hiddenLabel
                fullWidth
                label="APELLIDO"
                id="fullWidth"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField fullWidth label="DNI" id="fullWidth" />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                hiddenLabel
                fullWidth
                label="TELÉFONO"
                id="fullWidth"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField fullWidth label="EMAIL" id="fullWidth" />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="BARRIO"
                variant="outlined"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField
                id="outlined-basic"
                label="CHACRA"
                variant="outlined"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="CALLE" variant="outlined" />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField
                id="outlined-basic"
                label="NUMERACIÓN"
                variant="outlined"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="1° CALLE DE REFERENCIA"
                variant="outlined"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField
                id="outlined-basic"
                label="2° CALLE DE REFERENCIA"
                variant="outlined"
              />
            </Box>
          </FormControl>
        </div>
        <div className="ubiProbleContainer">
          <h2>Datos sobre la Problemática</h2>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField id="outlined-basic" label="CALLE" variant="outlined" />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="NUMERACIÓN"
                variant="outlined"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="on"
            >
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
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="PISO" variant="outlined" />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField
                id="outlined-basic"
                label="BARRIO"
                variant="outlined"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="DESCRIPCIÓN"
                multiline
                maxRows={4}
              />
            </Box>
          </FormControl>
        </div>
        <div className="denunciado">
          <h2>Datos del Denunciado</h2>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField
                id="outlined-basic"
                label="NOMBRE"
                variant="outlined"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="APELLIDO"
                variant="outlined"
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField id="outlined-basic" label="APODO" variant="outlined" />
            </Box>
          </FormControl>

          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="DESCRIPCIÓN DE LA UBICACIÓN"
                multiline
                maxRows={4}
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: "auto", width: "20vw" },
              }}
              noValidate
              autoComplete="on"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="DESCRIPCIÓN DEL DENUNCIADO"
                multiline
                maxRows={4}
              />
            </Box>
          </FormControl>
          <FormControl>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  marginBottom: "1.5vw",
                  marginTop: "auto",
                  marginLeft: "3vw",
                  width: "20vw",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="ESTADO DE LA DENUNCIA"
                multiline
                maxRows={4}
              />
            </Box>
          </FormControl>
        </div>
      </form>
    </>
  );
}
