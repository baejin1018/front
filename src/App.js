import React from "react"
import {Routes, Route, Link} from 'react-router-dom';

import Login from './login/Login.js';
import Register from './login/Register.js';
import Header from './Header.js';
import Main from './main/Main.js';

function App(){
    return(
        <div>
            <Routes>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/header' element={<Header></Header>}></Route>
                <Route path='/' element={<Main></Main>}></Route>
            </Routes>
        </div>
    )
}

export default App;