import axios from "axios";

export const startallproduct = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8007/api/referalcandidate")
      .then((res) => {
        const result = res.data;
        console.log(result);
        dispatch(allproducts(result));
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
export const allproducts = (result) => {
  return {
    type: "GET_RMG",
    payload: result,
  };
};
