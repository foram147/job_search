import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Card, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFavoritesAction } from "../action/action_index";
import { useDispatch, useSelector } from "react-redux";
/*const mapStateToProps = (state) => ({ favorites: state.favorites.content });

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (indexToRemove) => {
    dispatch(removeFromFavoritesAction(indexToRemove));
  },
});*/
const Favorites = () => {
  const jobs = useSelector((state) => state.jobs.favorites);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row className="pl-5">
        {jobs?.map((item, i) => {
          return (
            <Col className=" pt-5" sm={8}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.company_name}</Card.Title>
                  <Card.Text>{item.title}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={(e) => dispatch(removeFromFavoritesAction(i))}
                  >
                    <FaTrash />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Favorites;
