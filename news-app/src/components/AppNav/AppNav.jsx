import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import sections from '../../data/sections.json'
import "./appNav.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AppNav({articles}) {
  const [navItems, setNavItems] = useState(sections)

  const [searchTitle, setSearchTitle] = useState('')

  const [results, setResults] = useState([])

  const handleChange = (event) => {
    const value = event.target.value
    console.log(`${value} val changed`)

    setSearchTitle(value)
}

  useEffect(() => {
    if(searchTitle != ''){
        const filteredArticles = articles.filter(article => article.title.includes(searchTitle))
        setResults(filteredArticles)
        console.log('results Arr=', filteredArticles)
    }
  },[searchTitle])

  return (
    <Navbar className="bar">
      <Navbar.Brand>
        <img src="https://www.codeplatoon.org/wp-content/uploads/2018/10/CP-logo-2018-abbrev-1.png" width="60" />
        Code Platoon News
      </Navbar.Brand>
      <Nav>
      <Nav.Link href='/'>
        HOME
      </Nav.Link>
      {
        navItems.map((navItem, index) => {
          return (
            <Nav.Link key={index} href={`/#/sections/${navItem.value}`} onClick={() => console.log(navItem.value)}>
                { navItem.label }
            </Nav.Link>
          )
        })
      }
      </Nav>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event)=>{handleChange(event)}}
              
            />
            <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  )
}

export default AppNav;

