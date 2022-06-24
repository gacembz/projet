import React from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { deletUser } from "../redux/actions/authActions"; 

const Userhandler = () => {
   const dispatch = useDispatch();
   const users=useSelector(state=>state.authReducers.users)
const handleDelete=(id)=>{
  if(window.confirm("Are you sure")){
 dispatch(deletUser(id))
  }
}

  return (
    <div>
      {" "}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map(user=>  <tr key={user._id}>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <Button
                variant="danger"
                 onClick={()=>handleDelete(user._id)}
              >
                DELETE
              </Button>
            </td>
          </tr>)
        }
        </tbody>
      </Table>
    </div>
  );
};

export default Userhandler;