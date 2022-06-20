import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProdactList from "../../prodact/ProdactList";

const UserProfile = () => {
const user=useSelector(state=>state.authReducers.user)
 console.log(user)
  return (
    <div>

      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>{user && user.firstName}</Card.Title>
            <Card.Title>{user && user.email}</Card.Title>
            <Card.Title>{<img src="https://www.jobmania.fr/wp-content/uploads/2019/09/1280xpreparationintro.jpg" alt="exemple de texte alternatif"/>}</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>

     
    </div>
  );
};

export default UserProfile;