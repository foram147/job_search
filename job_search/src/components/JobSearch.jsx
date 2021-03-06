import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Component } from "react";
import Job from "./Job";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
class JobSearch extends Component {
  state = {
    query: "",
    jobs: [],
  };

  fetchJob = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      this.fetchJob + this.state.query + "&limit=10"
    );
    if (!response.ok) {
      alert("error");
      return;
    }
    const { data } = await response.json();

    this.setState({ jobs: data });
    console.log(this.state.jobs);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={4} className="mx-auto my-3">
            <h1>Job Search</h1>
          </Col>
          <Link to={"/favorites"}>
            <Button variant="primary">favorites</Button>
          </Link>
          <Col xs={8} className="mx-auto mt-3">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="seach"
              ></Form.Control>
            </Form>
          </Col>
          <Col xs={12} className="mx-auto mb-5">
            {this.state.jobs.map((jobData) => (
              <Job key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default JobSearch;
