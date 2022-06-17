import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editrPodact, getoneprodact } from "../redux/actions/prodactActions";
import {useNavigate } from "react-router-dom";


const EditProdact = ({prodact}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getoneprodact(id));
  }, []);
  const contact = useSelector((state) => state.prodactReducer.prodact);
  console.log("prodact", prodact);
  const [Name, setName] = useState(prodact.Name);
  const [prix, setPrix] = useState(prodact.prix);
  const [reference,setReference] = useState(prodact.reference);
  const [image, setImage] = useState(prodact.image);
  useEffect(() => {
    setName(prodact.Name);
    setPrix(prodact.prix);
    setReference(prodact.reference);
    setImage(prodact.image);
  }, [prodact]);
  return (
    <div><Form>
        <Form.Group className="mb-3">
          <Form.Label>prodactname</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={Name}
            type="string"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Prix</Form.Label>
          <Form.Control
            onChange={(e) => setPrix(e.target.value)}
            value={prix}
            type="string"
            placeholder="Enter prix"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>reference</Form.Label>
          <Form.Control
            onChange={(e) => setReference(e.target.value)}
            value={reference}
            type="string"
            placeholder="Reference"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>image</Form.Label>
          <Form.Control
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="string"
            placeholder="image"
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(editrPodact(id, { Name,prix,reference,image }));
            navigate("/prodact");
          }}
          type="submit"
        >
          Edit
        </Button>
      </Form> </div>
      
    
  )
  
}

export default editrPodact
