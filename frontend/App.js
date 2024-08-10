import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Addnew from './Addnew';
import Navrot from './Navrot';
import  './App.css';




function App() {   
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Main/>}/>
        <Route path='/Addnew' element={<Addnew/>}/>
        <Route path='/Navrot/*' element={<Navrot/>}/>
      </Routes>
      </BrowserRouter>
    )
}

export default App