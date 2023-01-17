const intialstate = [];

const Productreducers = (state = intialstate, action) => {
  switch (action.type) {
    case "GET_RMG": {
      return [...action.payload];
    }

    default: {
      return [...state];
    }
  }
};
export default Productreducers;
