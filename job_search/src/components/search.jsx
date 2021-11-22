import React, { useEffect, useState } from "react";
import { getJobs } from "../FetchData/fetch";
import { Link } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

const search = () => {
  const [searchJob, setSearchJob] = useState("");
  const handleChange = (event) => {
    setSearchJob(event.target.value);
  };
};

export default search;
