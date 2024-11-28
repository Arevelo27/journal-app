import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo"
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid2>

          <Grid2 container spacing={2} size={{ xs: 12 }} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12, sm: 6 }} >
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="flex-end" size={{ xs: 12 }}>
            <Typography sx={{ mr: 1 }}>¿No tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              <Typography>Crear Cuenta</Typography>
            </Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLayout>
  )
}
