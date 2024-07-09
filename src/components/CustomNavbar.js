import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CustomNavbar() {
  const navigate = useNavigate();

  const { cartList } = useSelector((state) => state.carts);

  return (
    <Navbar expand="lg" bg="danger" className="" data-bs-theme="danger" style={{position:'fixed', width:'100%', left:0, top:0,zIndex:90}}>
      <Container fluid className="d-flex justify-content-between">
        <Navbar.Brand className="text-white">
          ReactJS Redux WorkShop
        </Navbar.Brand>
        <Navbar.Brand onClick={() => navigate("/")} style={{paddingLeft:"20em",cursor:'pointer'}} className="text-white pl-4">
          Home
        </Navbar.Brand>
        <Navbar.Brand style={{ cursor:'pointer'}} className="text-white pl-4">
          About Us
        </Navbar.Brand>
        <Navbar.Brand style={{ cursor:'pointer'}} className="text-white pl-4">
          Service
        </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll></Nav>
          <div
            className="navbar-cart-container"
            onClick={() => navigate("/cart")}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-white"
              size="2xl"
            />
            <Badge bg="primary" className="navbar-cart-counter cursor-pointer">
              {cartList && cartList?.length > 0 ? cartList?.length : ""}
            </Badge>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
