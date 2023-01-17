import { Route, withRouter } from "react-router-dom";
import Positions from "./Components/positions/newpositions";
import POsitionscandidate from "./Components/positions/positioncontainer";
import Rmg from "./Components/RMG/positions";
import Candidatemapping from "./Components/candidatemaping";
import Candidate from "./Components/RMG/candidate";
import Positionmapping from "./Components/positionmaping";
import Recuriment from "./Components/Recuriment/openpositions";
import Recurimentcandidate from "./Components/Recuriment/candidates";
import Associcatepanel from "./Components/Recuriment/associcatepanel";
import associcatepanelcreate from "./Components/Recuriment/associatepanelcreate";
import Employeepositions from "./Components/employee/positions";
import Refercandidate from "./Components/employee/refercandidate";
const Routing = () => {
  return (
    <div className="container">
      <Route exact path="/" component={Positions}></Route>
      <Route
        exact
        path="/createposition"
        component={POsitionscandidate}
      ></Route>
      <Route exact path="/Rmg" component={Rmg}></Route>
      <Route exact path="/candidatemap" component={Candidatemapping}></Route>
      <Route exact path="/candidate" component={Candidate}></Route>
      <Route exact path="/positionmapping" component={Positionmapping}></Route>
      <Route exact path="/recurimentpositions" component={Recuriment}></Route>
      <Route
        exact
        path="/recurimentcandidate"
        component={Recurimentcandidate}
      ></Route>
      <Route exact path="/associatepanal" component={Associcatepanel}></Route>
      <Route
        exact
        path="/associatepanalcreate"
        component={associcatepanelcreate}
      ></Route>
      <Route exact path="/employee" component={Employeepositions}></Route>
      <Route exact path="/refercandidate" component={Refercandidate}></Route>
    </div>
  );
};
export default withRouter(Routing);
