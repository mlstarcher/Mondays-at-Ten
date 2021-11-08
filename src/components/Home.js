import React from 'react'
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap'
import { Routes, Route } from "react-router-dom"

import Feed from './Feed'
import Dashboard from './Dashboard'

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Container className="mt-2">
        <Routes>
          <Route path="/" element={<Feed />}/>
          <Route path="/profile" element={<Dashboard />}/>
        </Routes>
      </Container>
    </div>
  )
}
