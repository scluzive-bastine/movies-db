import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { BiSearchAlt } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'

export const Navigation = () => {
  const [showBox, setShowBox] = useState(false)
  const handleSearchInput = () => {
    if (showBox === false) {
      setShowBox(true)
      console.log(showBox)
    } else {
      setShowBox(false)
      console.log(showBox)
    }
  }
  return (
    <Navbar className='mNavbar' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            alt='Movies.db'
            src={logo}
            width='64'
            height='30'
            className='d-inline-block align-top'
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Movies</Nav.Link>
            <Nav.Link href='#link'>Tv Shows</Nav.Link>
            <Nav.Link href='#link'>Trending</Nav.Link>
          </Nav>
          <div className='searchBox ms-center'>
            <input
              type='text'
              className={`form-control ${!showBox ? `` : `searchInput`}`}
              placeholder='Movie or Tv Show Title'
            />
            <div className='searchBtn' onClick={handleSearchInput}>
              {!showBox ? <BiSearchAlt /> : <FaTimes />}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
