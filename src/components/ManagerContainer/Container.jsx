import React from "react"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Search} from "../Search/Search";
import {NoteDirectory} from "../NoteDirectory/NoteDirectory";
import {RecentNotes} from "../RecentNotes/RecentNotes";
import {CreateNoteButton} from "../CreateNoteButton/CreateNoteButton";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

export const ManagerContainer = () => {
    return (
        <Container sx={{marginTop: '100px', marginLeft: '200px', marginRight: '0px', alignItems: "flex-end"}}>
            <Header />
            <Box component="div" sx={{display: 'inline-flex', marginRight: '250px', marginLeft: '0px'}}>
                <div>
                    <h1>My folders</h1>
                    <NoteDirectory/>
                </div>
            </Box>
            <Box component="div"
                 sx={{display: 'inline-flex', marginRight: '50px', alignItems: "flex-end", marginLeft: '100px'}}>
                <div>
                    <Search/>
                    <div>
                        <h1>My recent notes</h1>
                        <RecentNotes/>
                        <Box sx={{marginLeft: '350px'}}>
                            <CreateNoteButton/>
                        </Box>
                    </div>
                </div>
            </Box>
            <Footer />
        </Container>
    );
}