import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";

export default function ProductionDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state)

  const handleAddProduct = () => {
    toast.success("Add to cart successfully!")

  };

  return (
    <div className="p-5">
      <Row>
        <Col md={6} className="text-center">
          <div style={{ height: 300 }}>
            <img src={state?.image} className="cart-image" alt="product-img" />
          </div>
        </Col>
        <Col md={6}>
          <h1>{state?.title}</h1>
          <p className="mb-5">{state?.description}</p>
          <div className="d-flex py-3 border-top border-bottom border-left-0 border-right-0 border-secondary">
            <div className="d-flex flex-column align-items-center px-5">
              <p className="fw-bolder text-secondary">
                {state?.rating?.count} Ratings
              </p>
              <h3 className="fw-bolder">{state?.rating?.rate}</h3>
              <Rating
                initialValue={state?.rating?.rate}
                transition
                allowFraction
                readonly
                size={20}
              />
            </div>

            <div
              className="d-flex flex-column align-items-center px-5"
              style={{ borderLeft: "1px #ccc solid" }}>
              <p className="fw-bolder text-secondary">Price</p>
              <h3 className="fw-bolder">$ {state?.price}</h3>
            </div>
          </div>
          <div className="mt-3">
            <Button variant="outline-secondary" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button
              onClick={() => handleAddProduct(state?.id)}
              variant="primary"
              style={{ marginLeft: 10 }}>
              Add to Cart
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
