import React, { Fragment } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import{useDispatch, useSelector} from "react-redux"
import { logout } from "./redux/actions/authActions";



const Navigation = () => {
  const auth=useSelector(state=>state.authReducers.auth)
  const dispatch=useDispatch()
  const Navigate = useNavigate();
  return (
    <div>  <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
         
            <Nav.Link as={Link} to="/prodactList">
          product list
          </Nav.Link>
          {
            auth ?  <Nav.Link onClick={()=>{dispatch(logout()); Navigate('/')}} >
            Logout
          </Nav.Link>:<Fragment>
           <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
          </Fragment> 
          }
         
          
        </Nav>
      </Container>
    </Navbar></div>
  )
}

export default Navigation
