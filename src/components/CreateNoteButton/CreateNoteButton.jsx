import React, {useState} from "react";
import {NoteForm} from "../NoteForm/NoteForm";
import axios from 'axios';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const CreateNoteButton = () => {
    const [description, setDescription] = useState(null);
    const [title, setTitle] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setDescription(null);
        setIsOpen(false);
    }
    const handleDescriptionChange = (input) => {
        setDescription(input.target.value);
    }
    const handleTitleChange = (input) => {
        setTitle(input.target.value);
    }
    const handleSave = () => {
        const requestBody =
            {
                title: title,
                description: description,
                directoryId: 1,
                tags: "jhjhj"
            };

        axios.post('http://localhost:3001/notices', requestBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                    console.log(error);
                }
            );
        setDescription(null);
        setIsOpen(false);
    }
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div className="grid h-screen place-items-center ">
            <Fab sx={{display: 'right'}} color="primary" aria-label="add" onClick={openModal}>
                <AddIcon/>
            </Fab>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <div style={{
                    display: 'block',
                    width: 700,
                    padding: 30
                }}>
                    <NoteForm handleDescriptionChange={handleDescriptionChange} handleTitleChange={handleTitleChange}/>
                    <Stack sx={{justifyContent: "center"}} direction="row" spacing={2}>
                        <Button sx={{color: 'black'}} size="medium" onClick={handleSave}>Save</Button>
                        <Button sx={{color: 'black'}} size="medium" onClick={handleClose}>Close</Button>
                    </Stack>
                </div>
            </Modal>
        </div>);
};
