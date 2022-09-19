import React from 'react'
import { Auth } from "./Auth";
import { Grid } from '@mui/material'

export const LoginPage = () => {
    return (
        <>
            <div style={{ martinTop: "25vh" }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <h1>Log In</h1>
                    <Auth/>
                </Grid>
            </div>
        </>
    )
}

export default Auth;