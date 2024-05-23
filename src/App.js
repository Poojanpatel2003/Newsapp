import Navbar from './components/Navbar';
import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import{ Routes,BrowserRouter,  Route,Navigate} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div className='div1'>
        <BrowserRouter>
       <Navbar/>
       
       <Routes>
          <Route  exact path="/My-news" element={<News key="My-news" pageSize={6} country="in" category="general"/>}></Route>
          <Route path="/" element={<Navigate to="/My-news" />} />
          <Route exact path="/business" element={<News key="business" pageSize={6} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News key="general" pageSize={6} country="in" category="general"/>}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={6} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology"/>}></Route>
    
    
        </Routes>
       </BrowserRouter>
      </div>
    )
  }
}

