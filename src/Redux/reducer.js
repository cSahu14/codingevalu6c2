import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQ,
  GET_PRODUCTS_SUCCESS,
  GET_SELECT_FAILURE,
  GET_SELECT_PRODUCT_REQ,
  GET_SELECT_SUCCESS,
  SORT_PRODUCTS,
} from "./actionTypes";

const initState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case GET_PRODUCTS_REQ:
      return { ...state, isLoading: true };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: [...payload],
        isError: false,
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...StorageEvent,
        isLoading: false,
        products: [],
        isError: true,
      };
    case GET_SELECT_PRODUCT_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SELECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    case GET_SELECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
      };
    case SORT_PRODUCTS:
      if (payload === "asc") {
        return {
          ...state,
          products: state.products.sort(function (a, b) {
            return [a.price - b.price];
          }),
        };
      } else if (payload === "desc") {
        return {
          ...state,
          products: state.products.sort(function (a, b) {
            return [b.price - a.price];
          }),
        };
      }
    default:
      return state;
  }
};
