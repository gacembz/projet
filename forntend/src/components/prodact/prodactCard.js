import React from "react";
import { Title, Subtitle, Body, Card, Button } from "react-bootstrap";
import { deleteprodact, Deletprodact, deletprodact } from "../redux/actions/prodactActions"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Prodactcard({ prodact }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> prodactname: {prodact.prodactname} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
           prodactName :{prodact.prodactName}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            prix:{prodact.prix}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            reference:{prodact.reference}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            image:{prodact.image}
          </Card.Subtitle>
          <Button
            variant="danger"
            onClick={() => dispatch(Deletprodact(prodact._id))}
          >
            Delete
          </Button>
          <Link to={`/edit/${prodact._id}`}>
            {" "}
            <Button variant="dark">Edit</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Prodactcard;