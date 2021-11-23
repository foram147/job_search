import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import uniqid from "uniqid";
import Job from "./Job";

const Search = () => {
  const [searchJob, setSearchJob] = useState([]);
  const params = useParams();

  useEffect(() => {
    getJobs();
  }, []);

  const fetchJob = "https://strive-jobs-api.herokuapp.com/jobs?company=";
  const getJobs = async () => {
    const resp = await fetch(fetchJob + params.companyName);
    const { data } = await resp.json();
    setSearchJob(data);
  };

  return (
    <Container>
      <Row>
        <Col>
          {searchJob.map((job) => (
            <Job key={uniqid()} data={job} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
