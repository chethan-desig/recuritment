import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import AssignPanel from "./associatepanel";
import { Button } from "react-bootstrap";

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  const state = useSelector((state) => state.positions);
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Show Modal
        </Button>
      </div>
      <AssignPanel show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default App;
