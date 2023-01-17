const intialstate = [];

const Productreducers = (state = intialstate, action) => {
  switch (action.type) {
    case "GET_ASSCOIATE": {
      return [...action.payload];
    }

    default: {
      return [...state];
    }
  }
};
export default Productreducers;
