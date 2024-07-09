import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CustomNavbar() {
  const navigate = useNavigate();

  const { cartList } = useSelector((state) => state.carts);

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")} className="text-white">
          LLL Shop
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
            <Badge bg="danger" className="navbar-cart-counter cursor-pointer">
              {cartList && cartList?.length > 0 ? cartList?.length : ""}
            </Badge>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
