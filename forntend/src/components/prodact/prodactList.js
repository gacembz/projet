import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProdact } from "../redux/actions/prodactActions";
import { Title, Subtitle, Body, Card, Button } from "react-bootstrap";
import Prodactcard from "./ProdactCard"
import { Link } from "react-router-dom";
import deletProdact from "./deletProdact";
function ProdactList({}) {

  const dispatch = useDispatch();
  const {prodacts} = useSelector((store)=>store.prodactReducer)
 
 
  useEffect(()=>{
   dispatch(GetProdact())
  },[])
   return (
    
  
    <div className="produit">
    { prodacts.map(product=> <Card style={{ width: "18rem" }}>
        <Card.Body>
        
          <Card.Title> prodactname: {product.prodactName} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
           prodactName :{product.Name}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            prix:{product.prix}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            reference:{product.reference}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            image:{product.image}
          </Card.Subtitle>
         
         
        </Card.Body>
      </Card>)}
    </div>
  );
}
export default ProdactList;
