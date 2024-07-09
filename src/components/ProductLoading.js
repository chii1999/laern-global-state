import React from "react";
import { Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

export default function ProductLoading() {
  return (
    <Row>
      <Col md={3}><Skeleton height={350} /></Col>
      <Col md={3}><Skeleton height={350} /></Col>
      <Col md={3}><Skeleton height={350} /></Col>
      <Col md={3}><Skeleton height={350} /></Col>
    </Row>
  );
}
