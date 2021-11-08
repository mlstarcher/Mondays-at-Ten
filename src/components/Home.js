import React from 'react'
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Feed from './Feed'
import Dashboard from './Dashboard'

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="/profile" element={<Dashboard />}/>
      </Routes>
    </div>
  )
}
