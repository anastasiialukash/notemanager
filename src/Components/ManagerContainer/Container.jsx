import React from "react"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Search} from "../Search/Search";

export const ManagerContainer = () => {
    return (
        <Container sx={{marginTop: '0px', marginLeft: '0px'}}>
            <Box sx={{display: 'box', marginBottom: '20px', marginTop: '20px'}}>Manager</Box>
            <Box component="div" sx={{display: 'inline-flex', marginRight: '50px'}}>
                <div>Place for action items</div>
            </Box>
            <Box component="div" sx={{display: 'inline-flex', marginRight: '50px'}}>
                <div>Place for folders</div>
            </Box>
            <Box component="div" sx={{display: 'inline-flex', marginRight: '50px', alignItems: "flexbox"}}>
                <Box component="div" sx={{display: 'box'}}>
                    <Search/>
                    <div>Place for recent notes</div>
                </Box>
            </Box>
        </Container>
    );
}