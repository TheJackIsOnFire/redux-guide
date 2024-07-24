import { combineReducers } from "redux";
import useReducer from "./user/slice";
import cartReducer from "./cart/slice";

//Armazena todos os reducers

const rootReducer = combineReducers({ useReducer, cartReducer }); //Reducers adicionados/ Prontos para o acesso

export default rootReducer;
