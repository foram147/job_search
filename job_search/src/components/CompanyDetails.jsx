import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { getJobs } from "../FetchData/fetch";

const CompanyDetails = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  console.log(id);
  const fetchData = async () => {
    let result = await getJobs();
    console.log(result.data);
    let dataArray = result.data;
    setData(dataArray);
  };
  useEffect(() => {
    fetchData();
  }, []);

  let company = data.filter((el) => el._id === id.toString());
  console.log(company);
  return (
    <div>
      <Container>
        {company.map((el) => (
          <Card className="text-center" key={el._id}>
            <h2>{el.company_name}</h2>
            <Card.Body>
              <Card.Title>Job Title:{el.title}</Card.Title>
              <Card.Text>Description:{el.description}</Card.Text>
              <Link to={"/"}>
                <Button variant="primary">Back to homepage</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default CompanyDetails;
