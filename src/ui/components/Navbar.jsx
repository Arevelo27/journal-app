import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const Navbar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${ drawerWidth }px)` }, // Ajustado el tamaño en pantalla
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid2 container alignItems='center' justifyContent='space-between' sx={{ flexGrow: 1 }}>
                    <Typography variant='h6' noWrap component='div'>Journal App</Typography>

                    <IconButton color='error'>
                        <LogoutOutlined />
                    </IconButton>

                </Grid2>
            </Toolbar>
        </AppBar>
    )
}