import React from "react"
import {Tree} from "react-arborist";
import Box from '@mui/material/Box';

export const NoteDirectory = () => {
    const data = [
        {id: "1", name: "Unread"},
        {id: "2", name: "Threads"},
        {
            id: "3",
            name: "Chat Rooms",
            children: [
                {id: "c1", name: "General"},
                {id: "c2", name: "Random"},
                {id: "c3", name: "Open Source Projects"},
            ],
        },
        {
            id: "4",
            name: "Direct Messages",
            children: [
                {id: "d1", name: "Alice"},
                {id: "d2", name: "Bob"},
                {id: "d3", name: "Charlie"},
            ],
        },
    ];

    return (
        <Box>
            <Tree
                initialData={data}
                openByDefault={false}
                width={250}
                height={250}
                indent={24}
                rowHeight={36}
                overscanCount={1}
                paddingTop={30}
                paddingBottom={10}
                padding={25}
            >
                {Node}
            </Tree>
        </Box>
    );

    function Node({node, style, dragHandle}) {
        return (
            <div style={style} ref={dragHandle}>
                {node.isLeaf ? "📄" : "📁"}
                {node.data.name}
            </div>
        );
    }
}