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

  const formValidations = {
    email: [( value ) => value.includes('@'), 'El correo debe tener una @'],
    password: [( value ) => value.length >= 6, 'El password debe tener más de 6 letras'],
    displayName: [( value ) => value.length >= 1, 'El campo de nombre es obligatorio']
  }

  const { 
    formState, displayName, email, password, onInputChange,  
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  console.log(displayNameValid)

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
              error={ !displayNameValid }
              helperText="El campo de nombre es obligatorio"
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
              error={ !emailValid }
              helperText="El campo de correo es obligatorio"
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
              error={ !passwordValid }
              helperText="El campo de contraseña es obligatorio"
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
