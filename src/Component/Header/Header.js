import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {FaRegHeart}from "react-icons/fa";
import {FaUserAlt} from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import    OffCanvasExample  from './OffCanvasExample' ;
import './Header.css'
function Header(props) {
  return (
    <Navbar className="d-flex" expand="lg">
      <Container >
       <div>
       <Form >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />

        </Form>
        </div>
       <div>
       <img src={props.logo} width="100px" />
       </div>
        
        <div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className="d-flex align-items-center">
            
            <OffCanvasExample >
           
          
            <FaShoppingBag />
              
              </OffCanvasExample> 
     

 
            <Nav.Link href="" >Cart </Nav.Link>
           
            </div>
            <div className="d-flex align-items-center">
            <FaRegHeart/>
            <Nav.Link href="#action2">Wishlist</Nav.Link>
            </div>
           <div className="d-flex align-items-center">
           <FaUserAlt />
            <Nav.Link href="#" >
              Login
            </Nav.Link>
           </div>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
