import React from "react"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {Modal} from "@mui/material";
export const Note = ( {isModalOpen, setIsModalOpen } ) => {
    <Modal sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}} open={isModalOpen} onClose={setIsModalOpen(false)}>
        <Box
            sx={{
                position: 'relative',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: (theme) => theme.shadows[5],
                p: 4,
            }}
        >
            <Typography id="server-modal-title" variant="h6" component="h2">
                Server-side modal
            </Typography>
            <Typography id="server-modal-description" sx={{ pt: 2 }}>
                If you disable JavaScript, you will still see me.
            </Typography>
        </Box>
    </Modal>
}
