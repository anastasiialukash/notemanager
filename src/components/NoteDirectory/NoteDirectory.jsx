import React, {useEffect, useState} from "react"
import {Tree} from "react-arborist";
import Box from '@mui/material/Box';
import axios from "axios";

const noteIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"/></svg>;
const dirClosed = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>;

export const NoteDirectory = () => {
    //todo: map data from the server to dirs format
    //const [dirs, setUserData] = useState([]);

    // useEffect(() => {
    //     getDirs();
    // }, []);
    //
    // const getDirs = async () => {
    //     const response = await axios.get("http://localhost:3001/directories");
    //     setUserData(response.data);
    // }

    const dirs = [
        { id: "1", name: "Unread" },
        { id: "2", name: "Threads" },
        {
            id: "3",
            name: "Chat Rooms",
            children: [
                { id: "c1", name: "General" },
                { id: "c2", name: "Random" },
                { id: "c3", name: "Open Source Projects" },
            ],
        },
        {
            id: "4",
            name: "Direct Messages",
            children: [
                { id: "d1", name: "Alice" },
                { id: "d2", name: "Bob" },
                { id: "d3", name: "Charlie" },
            ],
        },
    ];

    return (
        <Box>
            <Tree
                data={dirs}>
                {Node}
            </Tree>
        </Box>
    );

    function Node({node, style, dragHandle}) {
        const icon = node.isLeaf ? noteIcon : dirClosed;
        console.log(dirs);
        return (
            <div style={style} ref={dragHandle}>
                {icon}
                {node.data.name}
            </div>
        );
    }
}
