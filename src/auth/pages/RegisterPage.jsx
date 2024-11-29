import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hook';

export const RegisterPage = () => {

  const formData = {
    email: 'andres@gmail.com',
    password: '123456',
    displayName: 'Andres Castillo'
  }

  const { displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState)
  }

  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={onSubmit}>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid2>

          <Grid2 container spacing={2} size={{ xs: 12 }} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12 }} >
              <Button
                type="submit"
                variant="contained"
                fullWidth
              >
                Crear Cuenta
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="flex-end" size={{ xs: 12 }}>
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              <Typography>Ingresar</Typography>
            </Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLayout>
  )
}
