import axios from "axios";
import { useEffect, useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, loading: true };

    case ACTIONS.API_CALLED:
      return { ...state, data: payload.data, loading: false };
    case ACTIONS.ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const ACTIONS = {
  API_REQUEST: "api-request",
  API_CALLED: "api-called",
  ERROR: "error",
};
const Usereducer = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTIONS.API_CALLED, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.error });
      });
  }, [url]);

  return state;
};

export default Usereducer;
