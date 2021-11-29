import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import uniqid from "uniqid";
import Job from "./Job";
import { getJobsAction } from "../action/action_index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchJob, setSearchJob] = useState("");
  const jobData = useSelector((state) => state.data.stock);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSearchJob(event.target.value);
  };

  const results = !searchJob
    ? jobData
    : jobData.filter((item) =>
        item.company_name.toLowerCase().includes(searchJob.toLocaleLowerCase())
      );

  useEffect(() => {
    dispatch(getJobsAction());
  }, []);
  return (
    <div className="form">
      <h3 className="mr-8 mt-5  " style={{ marginLeft: "15%" }}>
        Job Search
      </h3>
      <input
        type="text"
        placeholder="Search"
        value={searchJob}
        onChange={handleChange}
        style={{
          width: "70%",
          height: "40px",
          padding: "20px",
          marginLeft: "10%",
        }}
      />
      <Link to={"/favorites"}>
        <Button variant="primary" style={{ marginLeft: "2%" }}>
          favorites
        </Button>
      </Link>
      <Container>
        <Row>
          <Col>
            {results.map((job) => (
              <Job key={uniqid()} data={job} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
