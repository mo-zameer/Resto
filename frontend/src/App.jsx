import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; //for alert messages
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Success from './Pages/Success';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/> {/*Will render Home Page */}
        <Route path='/success' element={<Success/>}/> {/* Will render Success page*/}
        <Route path='*' element={<NotFound/>}/> {/* Any address other than specified will show Not found page*/}
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App