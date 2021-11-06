import React, { useRef, useState } from 'react'
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext'

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value)
     return setError('Passwords do not match');

    try {
      setError('')
      setLoading(true)
      console.log(emailRef.current.value, passwordRef.current.value)
    signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account')

    }
    setLoading(false)
  }

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required></Form.Control>
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="email" ref={passwordConfirmRef} required></Form.Control>
              </Form.Group>
              <Button disabled={loading} className="w-100 mt-3 mb-2" type="submit" onClick={handleSubmit}>
                Sign Up
                </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? Log in
        </div>
      </div>
    </Container>
  )
}
