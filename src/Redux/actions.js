import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQ,
  GET_PRODUCTS_SUCCESS,
  SORT_PRODUCTS,
} from "./actionTypes";

// action for get products request
export const getProductsReq = () => ({
  type: GET_PRODUCTS_REQ,
});

// action for get products success

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

// action for get products failure

export const getProductsFailure = () => ({
  type: GET_PRODUCTS_FAILURE,
});

// thunk call to fetch products  list
export const getproductsData = () => {
  return (dispatch) => {
    dispatch(getProductsReq());

    axios
      .get("https://movie-fake-server.herokuapp.com/products")
      .then((res) => {
        dispatch(getProductsSuccess(res.data));
      })
      .catch(() => {
        dispatch(getProductsFailure());
      });
  };
};

// export const getSelectProductData = (id) => {
//   return (dispatch) => {
//     dispatch(getSelectProductReq());
//     axios
//       .get(`https://movie-fake-server.herokuapp.com/products/${id}`)
//       .then((res) => {
//         dispatch(getProductsSuccess(res.data));
//       })
//       .catch(() => {
//         dispatch(getProductsFailure());
//       });
//   };
// };

// action object for sort  feature

export const sortProducts = (payload) => ({
  type: SORT_PRODUCTS,
  payload,
});
