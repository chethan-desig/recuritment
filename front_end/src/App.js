import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import { withRouter } from "react-router";
const App = () => {
  return (
    <BrowserRouter>
      <Routing />;
    </BrowserRouter>
  );
};

export default withRouter(App);
