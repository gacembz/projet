import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProdactList from "../../prodact/ProdactList";
import { GetProdact } from "../../redux/actions/prodactActions";


const Prodacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProdact());
  }, [dispatch]);
  const { prodacts, loading } = useSelector((state) => state.prodacts);
  return (
    <div>
      {Prodacts.map((prodact) => (
        <ProdactList prodact={prodact} key={Math.random()}/>
      ))}
    </div>
  );
};

export default Prodacts;