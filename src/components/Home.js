import React from 'react'
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <Container className="mt-2">
      Home
      </Container>
    </div>
  )
}
