import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addCartItem } from "../../redux/reducers/cartReducer";

function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList }  = useSelector((state) => state.products)

  const addProductToCart = (data) => {
    toast.success("Add to card successfully!")
    dispatch(addCartItem(data))
  }

  return (
    <Row>
      {productList &&
        productList.length > 0 &&
        productList.map((item, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="text-center h-100">
              <Card.Img
                variant="top"
                className="product-img p-2"
                src={item?.image}
              />
              <Card.Body>
                <Card.Title>{item?.title.substring(0, 15)}...</Card.Title>
                <Card.Text className="fw-bold">${item?.price}</Card.Text>
                <Button
                  variant="outline-secondary"
                  onClick={() =>
                    navigate(`/product-detail/${item?.id}`, { state: item })
                  }>
                  View Detail
                </Button>
                <Button variant="secondary" onClick={()=>addProductToCart(item)} style={{ marginLeft: 10 }}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
}

export default ProductList;
