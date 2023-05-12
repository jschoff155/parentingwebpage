import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Homepage} from './App';

ReactDOM.render(
    <Router>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
       </Routes>
    </Router>,
    document.getElementById('root')
);