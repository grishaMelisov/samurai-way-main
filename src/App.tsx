import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import './App.css'
import { Dialogs } from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import { Music } from './components/Music/Music'
import Navbar from './components/Navbar/Navbar'
import { News } from './components/News/News'
import Profile from './components/Profile/Profile'
import { Settings } from './components/Settings/Settings'

function App() {
  console.log('App rendering')
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
