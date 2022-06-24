import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {deleteProdact} from "../redux/actions/prodactActions";
import EditProducts from "./EditProducts";

  

const Prodacthandler = () => {
   const dispatch = useDispatch();
   const Prodacts=useSelector(state=>state.prodactReducer.prodacts)
const handleDelete=(id)=>{
  if(window.confirm("Are you sure")){
 dispatch(deleteProdact(id))
  }
}

  return (
    <div>
      {" "}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>prix</th>
            <th>reference</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          Prodacts.map(Prodact=>  <tr key={Prodact._id}>
            <td>{Prodact.Name}</td>
            <td>{Prodact.prix}</td>
            <td>{Prodact.reference}</td>
            <td>
              <Button
                variant="danger"
                 onClick={()=>handleDelete(Prodact._id)}
              >
                DELETE
              </Button>
               <EditProducts Prodact={Prodact} />
            </td>
          </tr>)
        }
        </tbody>
      </Table>
    </div>
  );
};

export default Prodacthandler;