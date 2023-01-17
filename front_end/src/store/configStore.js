import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PositionsReducers from "../reducer/positions/positionsReducer";
import RmgReducers from "../reducer/rmg/rmgreducer";
import Associatepanel from "../reducer/associcatepanel/associcatepanel";
const Store = () => {
  const store = createStore(
    combineReducers({
      positions: PositionsReducers,
      rmg: RmgReducers,
      assosiatepanel: Associatepanel,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default Store;
