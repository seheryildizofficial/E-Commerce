import { ActionTypes } from "./../actionTypes";
export const setLoading = () => ({
  type: ActionTypes.SET_LOADING,
});

export const setError = () => ({
  type: ActionTypes.SET_ERROR,
});

export const setProducts = (payload) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload,
});


export const getProducts = () => {
    dispatch(setLoading())

    axios
    .get()
    .then((res)=> dispatch(setProducts(res.data)))
    .catch((err)=> dispatch(setError(err)))

}