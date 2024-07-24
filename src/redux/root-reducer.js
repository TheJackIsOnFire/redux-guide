import { combineReducers } from "redux";
import useReducer from "./user/reducer";
import cartReducer from "./cart/reducer";

//Armazena todos os reducers

const rootReducer = combineReducers({ useReducer, cartReducer }); //Reducers adicionados/ Prontos para o acesso

export default rootReducer;
