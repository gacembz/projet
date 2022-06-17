import React, {  useState } from "react";
import { Button, Form } from "react-bootstrap";
import {useDispatch } from "react-redux";
import {  addProdact } from "../redux/actions/prodactActions";
import { useNavigate } from "react-router-dom";


const AddProdact = () => {
   const [Name, setName] = useState("");
  const [prix, setPrix] = useState("");
  const [reference, setReference] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div> <Form>
        <Form.Group className="mb-3">
          <Form.Label>name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={Name}
            type="prodact"
            placeholder="prodactName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>prix</Form.Label>
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
            placeholder="reference"
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
            dispatch(addProdact({ Name,prix,reference,image }));
            navigate("/prodact");
          }}
          type="submit"
        >
          Add
        </Button>
      </Form></div>
  )
}


export default addProdact;
