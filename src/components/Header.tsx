import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Rakendusprog
        </Typography>
        <Button color="inherit" component={NavLink} to="/">
          Avaleht
        </Button>
        <Button color="inherit" component={NavLink} to="/login">
          Login
        </Button>
        <Button color="inherit" component={NavLink} to="/profile">
          Profiil
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
