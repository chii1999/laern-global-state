import React from "react";
import { Button, Card, Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartItem,
  incrementCartItem,
  removeCartItem,
} from "../../redux/reducers/cartReducer";

export default function Cart() {
  const { cartList } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  return (
    <Container style={{padding:'4em 20em'}}>
      {cartList && cartList.length > 0 ? (
        <div>
          {cartList.map((item, index) => (
            <Col key={index} md={4} className="mb-4 w-100">
              <Card className="h-100">
                <Row>
                  <Col md={5} className="text-center">
                    <div style={{ height: 200 }}>
                      <img
                        src={item.image}
                        className="cart-image"
                        alt="product-img"
                      />
                    </div>
                  </Col>
                  <Col md={7}>
                    <div
                      className="p-3 h-100"
                      style={{ backgroundColor: "#eee" }}>
                      <h5>{item.title}</h5>
                      <p className="fw-bold mt-3">
                        {item.qty} x ${item.price} = ${item.qty * item.price}
                      </p>
                      <div className="mt-3">
                        <Button
                          variant="outline-secondary"
                          onClick={() => dispatch(decrementCartItem(index))}>
                          -
                        </Button>
                        <Button
                          variant="outline-secondary"
                          style={{ marginLeft: 10 }}
                          onClick={() => dispatch(incrementCartItem(index))}>
                          +
                        </Button>
                        <Button
                          variant="danger"
                          style={{ marginLeft: 10 }}
                          onClick={() => dispatch(removeCartItem(index))}>
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </div>
      ) : (
        <div className="text-center p-5">
          <h1>Your Cart is empty</h1>
        </div>
      )}
    </Container>
  );
}
