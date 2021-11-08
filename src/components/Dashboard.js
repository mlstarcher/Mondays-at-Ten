import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Dashboard() {
  const [error, setError] = useState('')

  function handleLogout(e) {
    e.preventDefault()

  }

  return (
    <>
      <Card>
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </Card>
    </>
  )
}
