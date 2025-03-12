import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'/>
      </Routes>
      <Home />
      

    </div>
  )
}

export default App
