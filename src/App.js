import './App.css';
import {ManagerContainer} from "./components/ManagerContainer/Container";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from "./components/Login/Login";
import {useState} from "react";

function App() {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ManagerContainer/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
