import * as React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { PasswordTextField } from '../../components/password-text-field/PasswordTextField';


export const Auth = () => {
    const formik = useFormik({
        initialValues: {
            user: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string("Ingrese su usuario")
                .required("Este campo es obligatorio"),
            password: yup.string("Ingrese su contraseña")
                .min(8, "Recuerde que las contraseñas poseen mínimo 8 caracteres")
                .required("La contraseña es obligatoria")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Stack
                    sx={{ width: "25ch" }}
                    margin="auto"
                    spacing={2}
                    onValidate
                    autoComplete="off"
                >
                    <TextField
                        hiddenLabel
                        id="user"
                        name="user"
                        label="Usuario"
                        value={formik.values.user}
                        onChange={formik.handleChange}
                        error={formik.touched.user && Boolean(formik.errors.user)}
                        helperText={formik.touched.user && formik.errors.user}
                        variant="outlined"
                    />
                    {/* <TextField
                        hiddenLabel
                        id="password"
                        name="password"
                        label="Contraseña"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        variant="outlined"
                    /> */}
                    <PasswordTextField/>
                    <Button variant="contained" type="submit">
                        Enviar
                    </Button>
                </Stack>
            </form>
        </>
    )
}



