import React from "react"
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Box from '@mui/material/Box';
import { DeleteOutline, EditOutlined, AddBox } from '@mui/icons-material';
export const SidebarPanel = () => {
    return(
        <Box component="div" sx={{display: 'inline-flex', marginRight: '50px'}}>
            <Sidebar style={{ height: "100vh" }}>
                <Menu>
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        style={{ textAlign: "center" }}
                    >
                        {" "}
                        <h2>Action</h2>
                    </MenuItem>
                    <MenuItem icon={<AddBox />}>ADD</MenuItem>
                    <MenuItem icon={<EditOutlined />}>EDITE</MenuItem>
                    <MenuItem icon={<DeleteOutline />}>DELETE</MenuItem>
                </Menu>
            </Sidebar>
        </Box>
    );
}