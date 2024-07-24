//Criando um reducer/ state global
//O userReducer vai armazenar o state

import UserActionsTypes from "./action-types";

const initialState = {
  currentUser: null,
};

// O useReducer e uma função que recebe dois parametros:
//O state que por padrão e o valor inicial
//Action(composto: payload e type)

//Toda vez que despachamos uma action o codigo deste bloco sera executado
const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionsTypes.LOGIN:
      return { ...state, currentUser: action.payload }; //Este e o padrão de retorno -> Tudo que esta no state(operador spread) e o valor alterado
    case UserActionsTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state; //Se caso não houver 'ação' o retorno será o state padrão
  }
};

export default useReducer;
