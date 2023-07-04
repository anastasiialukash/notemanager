import React, {useEffect, useState} from "react"
import Box from '@mui/material/Box';
import axios from "axios";
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import {Modal, TextField} from '@mui/material';
import Typography from "@mui/material/Typography";
import _ from 'lodash';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const noteIcon = <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><path d="M20.41,8.41l-4.83-4.83C15.21,3.21,14.7,3,14.17,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9.83 C21,9.3,20.79,8.79,20.41,8.41z M7,7h7v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10V13z"/></g></svg>
const dirClosed = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
</svg>;

export const NoteDirectory = () => {
    const [dirs, setDirs] = useState([]);
    const [notes, setListOfNotes] = useState([]);
    const [data, setData] = useState([]);

    const [selectedNode, setSelectedNode] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = React.useState("");
    const [isDescriptionFocused, setIsDescriptionFocused] = React.useState(false);

    useEffect(() => {
        getDirs();
    }, [dirs]);

    useEffect(() => {
        getNotes();
    }, [notes]);

    const getDirs = async () => {
        const response = await axios.get("http://localhost:3001/directories");
        setDirs(response.data);
    }
    const getNotes = async () => {
        const response = await axios.get("http://localhost:3001/notices");
        setListOfNotes(response.data);
        const data = getListOfNodes(dirs, notes)
        setData(data);
    }
    const getListOfNodes = (listOfDirs, listOfNotes) => {
        const group = _.mapValues(_.groupBy(listOfNotes, 'directoryId'));
        const keys = Object.keys(group);
        const arr = [];

        for(const key in keys) {
            const children = group[keys[key]].map(({ title, id, description }) => ({id: id, name: title, description: description}));
            const dirName = listOfDirs.filter(({ id }) => id === parseInt(keys[key]))[0];
            const dirNode = {id: 1, name: dirName.name, children: children}
            arr.push(dirNode);
        }

        return arr;
    }
    const findNodeById = (arr, id) => {
        let found;
        arr.forEach((el) => {
            if (el.id === id) {
                found = el;
            } else if (el.children) {
                const nextedEl = findNodeById(el.children, id);
                if(nextedEl) {
                    found = nextedEl;
                }
            }
        });

        return found;
    }
    const handleNodeClick = (event, nodeId) => {
        const node = findNodeById(data, nodeId);

        if (!node.children) {
            setSelectedNode(node);
            setIsModalOpen(true);
            setDescription(node.description)
        }
    };
    const handleSave = () => {
        const requestBody =
            {
                title: selectedNode.title,
                description: description,
                directoryId: 1,
                tags: "jhjhj"
            };

        axios.put(`http://localhost:3001/notices/${selectedNode.id}`, requestBody)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                    console.log(error);
                }
            );
        setIsModalOpen(false);
    }
    const handleClose = () => {
        setIsModalOpen(false);
    }
    const renderTreeItems = (nodes) => {
        return nodes.map((node) => (
            <TreeItem key={node.id} nodeId={node.id} label={node.name}
                      icon={Object.hasOwn(node, "children") ? dirClosed : noteIcon}>
                {node.children && renderTreeItems(node.children)}
            </TreeItem>
        ));
    };

    return (
        <div>
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon/>}
                defaultExpandIcon={<ChevronRightIcon/>}
                onNodeSelect={handleNodeClick}
            >
                {renderTreeItems(data)}
            </TreeView>
            <Modal sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}} open={isModalOpen}
                   onClose={() => setIsModalOpen(false)}>
                <Box
                    sx={{
                        position: 'relative',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: (theme) => theme.shadows[5],
                        p: 4,
                    }}>
                    {!isDescriptionFocused ? (
                        <Typography
                            onClick={() => {
                                setIsDescriptionFocused(true);
                            }}
                        >
                            {description}
                        </Typography>
                    ) : (
                        <TextField
                            autoFocus
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                            onBlur={event => setIsDescriptionFocused(false)}
                        />
                    )}
                    <Stack sx={{justifyContent: "center"}} direction="row" spacing={2}>
                        <Button sx={{color: 'black'}} size="medium" onClick={() => setIsDescriptionFocused(true)}>Edit</Button>
                        <Button sx={{color: 'black'}} size="medium" onClick={handleSave}>Save</Button>
                        <Button sx={{color: 'black'}} size="medium" onClick={handleClose}>Close</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

