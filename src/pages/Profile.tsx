import React, { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'

function Profile() {
  const [name, setName] = useState('')
  const [hobbies, setHobbies] = useState('')

  const handleSubmit = () => {
    console.log({ name, hobbies })
  }

  return (
    <Box p={2}>
      <Typography variant="h4">Minu Profiil</Typography>
      <TextField
        label="Nimi"
        value={name}
        onChange={e => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Hobid"
        value={hobbies}
        onChange={e => setHobbies(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Saada
      </Button>
    </Box>
  )
}

export default Profile
