import axios from "axios";

export const startallproduct = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8008/api/assignpanel")
      .then((res) => {
        const result = res.data;

        dispatch(allproducts(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
export const allproducts = (result) => {
  return {
    type: "GET_ASSCOIATE",
    payload: result,
  };
};
