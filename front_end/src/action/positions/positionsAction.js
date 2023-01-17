import axios from "axios";

export const startallproduct = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8009/api/positions")
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
    type: "GET_PRODUCTS",
    payload: result,
  };
};
export const startpostingposition = (formdata, redirect) => {
  console.log(formdata);
  return (dispatch) => {
    axios
      .post("http://localhost:8009/api/positions", formdata)
      .then((res) => {
        const result = res.data;

        dispatch(senddata(result));
        redirect();
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  };
};

const senddata = (result) => {
  return {
    type: "SEND_PRODUCTS",
    payload: result,
  };
};
export const startpostingpositionupdate = (formdata, id, redirect) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:8009/api/positions/${id}`, formdata)
      .then((res) => {
        const result = res.data;
        dispatch(sendingupdate(result));
        redirect();
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  };
};
const sendingupdate = (result) => {
  return {
    type: "SEND_UPDATE",
    payload: result,
  };
};
