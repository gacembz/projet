import axios from "axios";

import { GETONEPRODACT, GETPRODACT } from "../types/prodactTypes";

export const getprodact = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/prodact/getprodact");
    dispatch({ type: GETPRODACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const Addprodact = (newprodact) => async (dispatch) => {
  try {
    const res = await axios.post("/api/prodact/", newprodact);
    dispatch(getprodact());
  } catch (error) {
    console.log(error);
  }
};
export const Deletprodact = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/prodact/deletprodact/${id}`);
    dispatch(getprodact());
  } catch (error) {
    console.log(error);
  }
};
export const Editprodact = (id, editprodact) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/prodact/editprodact/${id}`, editprodact);
    dispatch(getprodact());
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


