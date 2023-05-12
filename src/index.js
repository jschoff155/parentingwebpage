import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Homepage, Aboutpage } from './App';

ReactDOM.render(
    <Router>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/> }/>
       </Routes>
    </Router>,
    document.getElementById('root')
);