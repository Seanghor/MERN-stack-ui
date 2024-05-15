import { useState } from 'react'
import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Taskpage from './pages/Taskpage';




const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/your-tasks" element={< Taskpage />} />
        <Route path="/signup" element={< SignUpPage />} />
        <Route path="/signin" element={< SignInPage />} />
      </Routes>

    </>
  )
}

export default App
