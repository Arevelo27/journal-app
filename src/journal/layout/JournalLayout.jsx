import { Box, Toolbar } from "@mui/material"
import { Navbar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box
            sx={{ display: 'flex' }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            {/* Nabvar */}
            <Navbar drawerWidth={drawerWidth} />

            {/* Sidebar */}
            <SideBar drawerWidth={drawerWidth} />

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 5 }}
            >

                {/* Toolbar */}
                <Toolbar />

                {children}
            </Box>
        </Box>
    )
}