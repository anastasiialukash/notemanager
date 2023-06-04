import React from "react"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Search} from "../Search/Search";
import {SidebarPanel} from "../SidebarPanel/SidebarPanel";
import {NoteDirectory} from "../NoteDirectory/NoteDirectory";
import {RecentNotes} from "../RecentNotes/RecentNotes";


export const ManagerContainer = () => {
    return (
        <Container sx={{marginTop: '0px', marginLeft: '0px'}}>
            <SidebarPanel/>
            <Box component="div" sx={{display: 'inline-flex', marginRight: '50px'}}>
            </Box>
            <Box component="div" sx={{display: 'inline-flex', marginRight: '100px', marginLeft: '0px'}}>
                <div>
                    <h1>My folders</h1>
                    <NoteDirectory/>
                </div>
            </Box>
            <Box component="div"
                 sx={{display: 'inline-flex', marginRight: '50px', alignItems: "flexbox", marginLeft: '100px'}}>
                <Box component="div" sx={{display: 'box'}}>
                    <div>
                        <Search/>
                        <div>
                            <h1>My recent notes</h1>
                            <RecentNotes/>
                        </div>
                    </div>
                </Box>
            </Box>
        </Container>
    );
}