import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import {editrPodact} from "../redux/actions/prodactActions";

function  EditProducts({Prodact}) {
  const [show, setShow] = useState(false);
const [Name,setName]=useState(Prodact.Name)
const [prix,setPrix]=useState(Prodact.prix)
const[reference,setReference]=useState(Prodact.reference)
const[imageUrl,setImageurl]=useState(Prodact.imageUrl)
const dispatch=useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleEdit=(e)=>{
e.preventDefault()
dispatch(editrPodact(Prodact._id,{Name,prix,reference,imageUrl}))
handleClose()
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div>
    <Form style={{width:"50%",margin:"auto",paddingTop:"80px"}}>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={e=>setName(e.target.value)} value={Name}/>
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>prix</Form.Label>
    <Form.Control type="text" placeholder="prix" onChange={e=>setPrix(e.target.value)} value={prix}/>
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>reference</Form.Label>
    <Form.Control type="text" placeholder="reference" onChange={e=>setReference(e.target.value)} value={reference}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>URL image</Form.Label>
    <Form.Control type="text" placeholder="URL image" onChange={e=>setImageurl(e.target.value)} value={imageUrl}/>
  </Form.Group>

</Form>
    
    
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default EditProducts;