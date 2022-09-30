import React from "react"
import { Stack, Grid, Paper, TextField, Button } from "@mui/material"
import { PasswordTextField } from "../../components/password-text-field/PasswordTextField"
import { useFormik } from 'formik';
import * as yup from 'yup'


function Login() {
    const paperStyle = { padding: 20, height: "70vh", width: 280, margin: "20px auto" }
    const btnstyle = { margin: '8px 0' }

    const formik = useFormik({
        initialValues: {
            user: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string("Ingrese usuario")
                .required("Este campo es obligatorio"),
            password: yup.string("Ingrese su contraseña")
                .min(8, "La contraseña es igual o mayor a 8 dígitos")
                .required("La contraseña es obligatoria")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <img src="../../assets/images/005.png" />
                        <h2>Inicio de Sesión</h2>
                    </Grid>
                    <Stack
                        margin="auto"
                        spacing={2}
                        onValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="user"
                            name="user"
                            label="Usuario"
                            fullWidth
                            value={formik.values.user}
                            onChange={formik.handleChange}
                            helperText={formik.touched.user && formik.errors.user}
                            variant="outlined"
                            required
                        />
                        <PasswordTextField
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            fullWidth
                            required
                        />

                        <Button
                            type='submit'
                            color='success'
                            variant="contained"
                            style={btnstyle}
                            fullWidth
                        >Iniciar Sesión</Button>
                    </Stack>
                </Paper>
            </form>
        </>
    )
}

export default Login

