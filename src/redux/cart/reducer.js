import CartActionTypes from "./action-types";

const initialState = {
  products: [],
  productsTotalPrice: 0,
};

//E uma boa pratica deixar o maximo de logica dentro do reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      //Verificar se o produto já está no carrinho
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      // Se ele estiver, aumenta a sua quantidade em 1
      if (productIsAlreadyInCart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

      //Se ele não estiver, adicioná-lo
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
          .filter((product) => product.quantity > 0),
      };

    default:
      return state;
  }
};

export default cartReducer;
