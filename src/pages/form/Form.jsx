import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select';
import { FormControl, InputLabel } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const Form = () => {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // const [valueContr, setValueContr] = React.useState('Controlled');

  // const handleChangeContr = (event) => {
  //   setValue(event.target.valueContr);
  // };

  return (
    <>
      <form>
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel htmlFor="grouped-native-select">ASUNTOS</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="asuntos">
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
              <option value={1}>Productos Alimenticios no aptos para consumo/comercialización</option>
            </optgroup>
          </Select>
        </FormControl>

        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel htmlFor="grouped-native-select">PROCEDENCIA</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="procedencia">
            <option aria-label="None" value="" />
            <option value={1}>Call Center</option>
            <option value={2}>Presencial</option>
            <option value={3}>Expediente</option>
            <option value={4}>Notas de otra Dirección</option>
          </Select>
        </FormControl>
        <Box
          mt={3}
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="INICIADOR/SOLICITANTE"
            id="fullWidth"
          />
        </Box>

        <Box
          mt={3}
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="TELÉFONO DEL SOLICITANTE"
            id="fullWidth"
          />
        </Box>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="CALLE" variant="outlined" />
          <TextField id="outlined-basic" label="NUMERACIÓN" variant="outlined" />
          <TextField id="outlined-basic" label="BARRIO" variant="outlined" />
          <TextField id="outlined-basic" label="CALLES DE REFERENCIA" variant="outlined" />
        </Box>

        <Box
          mt={3}
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="DATOS DEL DENUNCIADO"
            multiline
            maxRows={4}
          />
        </Box>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="CALLE" variant="outlined" />
          <TextField id="outlined-basic" label="NUMERACIÓN" variant="outlined" />
          <TextField id="outlined-basic" label="BARRIO" variant="outlined" />
          <TextField id="outlined-basic" label="CALLES DE REFERENCIA" variant="outlined" />
        </Box>

        <Box
          mt={3}
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="BREVE DESCRIPCIÓN DE LA DENUNCIA"
            multiline
            maxRows={4}
          />
        </Box>

        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel htmlFor="grouped-native-select">PROCEDENCIA</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="procedencia">
            <option aria-label="None" value="" />
            <option value={1}>Dirección de Fiscalización de Seguridad y Contaminación Urbana</option>
            <option value={2}>Dirección de Control Bromatológico</option>
            <option value={3}>Dirección de Laboratorio de Bromatología</option>
            <option value={4}>Otras Direcciones</option>
          </Select>
        </FormControl>
      </form>
    </>
  );
};
