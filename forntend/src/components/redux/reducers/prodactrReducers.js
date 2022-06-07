import { GETONEPRODACT, GETPRODACT } from "../types/prodactTypes";

const initialState = {
  prodacts: [],
  prodact: {},
};

const prodactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODACT:
      return { ...state, contacts: action.payload.contacts };
    case GETONEPRODACT:
      return { ...state, prodact: action.payload.getProdactById };

    default:
      return state;
  }
};
export default prodactReducer;
