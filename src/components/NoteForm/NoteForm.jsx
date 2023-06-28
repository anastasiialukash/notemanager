import React from "react"
import 'reactjs-popup/dist/index.css';
import {Form} from "react-bootstrap";

export const NoteForm = ({handleChange}) => {
    //todo: in handleChange save title as well
    return (
        <Form.Group style={{padding: "1rem", alignItems: "flex-box"}}>
            <Form.Control as="textarea" size="lg" rows="1" cols="55" onChange={handleChange} placeholder="title"/>
            <Form.Control as="textarea" size="lg" rows="15" cols="55" onChange={handleChange} placeholder="your note..."/>
        </Form.Group>
    );
}