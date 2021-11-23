import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ data }) => (
  <Row>
    <Col xs={5}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={7}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
);

export default Job;
