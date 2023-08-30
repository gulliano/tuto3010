import React from 'react'
import { Routes , Route } from 'react-router'
import Home from './pages/Home'
import Formulaire from './pages/Formulaire'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Formulaire />} />

    </Routes>
  )
}

export default App