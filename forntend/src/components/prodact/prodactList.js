import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprodact } from "../redux/actions/prodactActions";

import Prodactcard from "./prodactCard"





const ProdactList = () => {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprodact());
  }, []);
  const prodact = useSelector((state) => state.prodactReducer.prodact);
 
    
  return (
   <div> {prodact.map((prodact) => (
        <Prodactcard prodact={prodact}></Prodactcard>
      ))}</div>
  )
}

export default ProdactList
