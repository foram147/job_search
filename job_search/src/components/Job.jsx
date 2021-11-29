import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addToFavoritesAction } from "../action/action_index";
import { useDispatch } from "react-redux";

//const mapStateToProps = (state) => ({});

/*const mapDispatchToProps = (dispatch) => ({
  addToFavorites: function (jobToAdd) {
    dispatch(addToFavoritesAction(jobToAdd));
  },
});*/

const Job = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Container className="mt-1">
      <Card>
        <Card.Body>
          <Card.Title>{data.company_name}</Card.Title>
          <Card.Text>{data.category}</Card.Text>
          <Card.Text>{data.title}</Card.Text>
          <Button
            color="primary"
            onClick={(e) => dispatch(addToFavoritesAction(data))}
          >
            <MdFavorite />
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Job;
