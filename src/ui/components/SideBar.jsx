import { Box, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { TurnedInNot } from "@mui/icons-material"

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="temporary"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Toolbar >
                    <Typography variant="h6" noWrap component="div">Journal App</Typography>
                </Toolbar>

                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid2>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'csdscsdcsdcsdc'} />
                                </Grid2>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Drawer>

        </Box>
    )
}
