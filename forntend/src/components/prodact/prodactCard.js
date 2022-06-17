import React, { useEffect } from "react";
import { Title, Subtitle, Body, Card, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetProdact } from "../redux/actions/prodactActions";
import deletProdact from "./deletProdact";
import "./card.css";


const ProdactCard = ({prodact}) => {
  
 
  
  return (
    
  
    <div class="produit">
      <Card>
        <Card.Body>
        
          <Card.Title> prodactname: {prodact.prodactName} </Card.Title>
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
         
          <Link to={`/edit/${prodact._id}`}>
            {" "}
            <Button variant="dark">Edit</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}


export default ProdactCard

