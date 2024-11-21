import { Box } from "@mui/material"
import { Navbar, SideBar } from "../../ui";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Nabvar */}
            <Navbar drawerWidth={ drawerWidth } />

            {/* Sidebar */}
            <SideBar drawerWidth={ drawerWidth } />

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >

                {/* Toolbar */}

                {children}
            </Box>
        </Box>
    )
}