import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <Box p={2}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="E-post"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Parool"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Logi sisse
        </Button>
      </form>
    </Box>
  )
}

export default Login
