import React from "react"
import {Tree} from "react-arborist";
import Box from '@mui/material/Box';

export const RecentNotes = () => {
    const data = [
        {id: "1", name: "Unread"},
        {id: "2", name: "Threads"}
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