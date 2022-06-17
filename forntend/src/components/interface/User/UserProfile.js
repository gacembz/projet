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
            
          </Card.Body>
        </Card>
      </CardGroup>

     
    </div>
  );
};

export default UserProfile;