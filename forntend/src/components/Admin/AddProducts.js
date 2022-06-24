import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {addProdact} from '../redux/actions/prodactActions';

const AddProducts = () => {
  const dispatch= useDispatch();
const [Name,setName]=useState("")
const [prix,setPrix]=useState("")
const[reference,setReference]=useState("")
const[imageUrl,setImageurl]=useState("")

const navigate=useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(addProdact({Name,prix,reference,imageUrl}))
  navigate('/Products')
}

  return (
    <div>
    <Form style={{width:"50%",margin:"auto",paddingTop:"80px"}}>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" onChange={e=>setName(e.target.value)} value={Name} />
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>prix</Form.Label>
    <Form.Control type="number" placeholder="prix" onChange={e=>setPrix(e.target.value)}value={prix}/>
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>reference</Form.Label>
    <Form.Control type="text" placeholder="reference" onChange={e=>setReference(e.target.value)}value={reference}/>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>URL image</Form.Label>
    <Form.Control type="text" placeholder="URL image" onChange={e=>setImageurl(e.target.value)}value={imageUrl}/>
  </Form.Group>
  
  <Button variant="primary" type="submit"onClick={handleSubmit} >
    Submit
  </Button>
</Form>
    
    
    </div>
  )
}

export default AddProducts