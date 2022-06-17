import { ADDPRODACT, DELETPRODACT, EDITPRODACT, GETONEPRODACT, GETPRODACT } from "../types/prodactTypes";

const initialState = {
  prodacts: [],
  prodact: {},
};

const prodactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODACT:
      return { ...state, prodacts: action.payload.prodacts };
    case GETONEPRODACT:
      return { ...state, prodact: action.payload.prodact};
case ADDPRODACT:
      return { ...state, prodact: action.payload.prodact };
      case EDITPRODACT:
      return { ...state, prodact: action.payload.prodact };
       case DELETPRODACT:
      return { ...state, prodact: action.payload.prodact };
    default:
      return state;
  }
};
export default prodactReducer;
