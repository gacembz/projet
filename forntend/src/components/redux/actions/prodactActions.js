import axios from "axios";

import { GETONEPRODACT, GETPRODACT } from "../types/prodactTypes";

export const GetProdact = () => async (dispatch) => {
  try {
    const res = await axios.get("/prodact/allproducts");
    dispatch({ type: GETPRODACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const addProdact = (newprodact) => async (dispatch) => {
  try {
    const res = await axios.post("/api/prodact/post", newprodact);
    dispatch(GetProdact());
  } catch (error) {
    console.log(error);
  }
};
export const deleteProdact = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/prodact/delete/${id}`);
    dispatch(GetProdact());
  } catch (error) {
    console.log(error);
  }
};
export const editrPodact = (id, editrPodact) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/prodact/put/${id}`, editrPodact);
    dispatch(GetProdact());
  } catch (error) {
    console.log(error);
  }
};
export const getoneprodact = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/prodact/${id}`);
    dispatch({ type: GETONEPRODACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};


