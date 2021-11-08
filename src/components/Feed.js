import React from 'react'
import { Container, Card } from 'react-bootstrap'

export default function Feed() {
  return (
    <Container className="mt-2">
      <Card className="p-2">
        <Card.Title>This is content baby</Card.Title>
        <Card.Body>Example of a text card</Card.Body>
      </Card>
    </Container>
  )
}
