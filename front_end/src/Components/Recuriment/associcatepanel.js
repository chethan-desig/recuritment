import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connectAdvanced } from "react-redux";
import { withRouter } from "react-router";
import { startallproduct } from "../../action/associatepanel/associatepanelaction";
import Navbar from "../positions/navbar";
import "../positions/Acc.css";
import { FaWindowRestore } from "react-icons/fa";

const NewPositions = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(10);
  const [decresing, setDecresing] = useState();
  const [paginationdata, setPaginiationdata] = useState([]);
  const [intialdata, setintialdata] = useState(false);
  const [totaldatashown, setTotaldatashown] = useState(true);
  const [totaldata, setTotaldata] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startallproduct());
  }, []);

  const state = useSelector((state) => {
    return state.assosiatepanel;
  });

  const indexOfLastpost = currentpage * postperpage;
  const indexOfFirstpage = indexOfLastpost - postperpage;
  const currentPosts = state.slice(indexOfFirstpage, indexOfLastpost);

  useEffect(() => {}, []);
  const handleEdit = (id) => {
    setId(id);
    setToggle(!toggle);
  };
  const handleCancel = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    setDecresing(currentPosts.length);
  }, [intialdata]);
  useEffect(() => {
    setDecresing(currentPosts.length);
  }, [totaldatashown]);
  const increse = () => {
    setDecresing(currentPosts.length);
    setTotaldatashown(!totaldatashown);
    setTotaldata(totaldata - 10);
    console.log(decresing);
    setCurrentpage(currentpage - 1);
    setPaginiationdata(paginationdata.slice(currentPosts.length));
    console.log(currentPosts.length);
    console.log(paginationdata);
  };

  useEffect(() => {
    setPaginiationdata([...paginationdata, ...currentPosts]);
  }, []);
  useEffect(() => {
    setPaginiationdata([...paginationdata, ...currentPosts]);
  }, [intialdata]);

  const decrease = () => {
    setCurrentpage(currentpage + 1);
    setintialdata(!intialdata);
    setTotaldata(totaldata + 10);
  };
  return (
    <div>
      {toggle ? (
        <div>
          <button
            onClick={() => {
              handleCancel();
            }}
          >
            cancel
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <Navbar />
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <Link
                to="/recurimentpositions"
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Open position
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                to="/recurimentcandidate"
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Candidates
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                to=""
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Associate panel
              </Link>
            </li>
          </ul>
          <div className="m-3">
            <table class="table table-striped  border border-white">
              <tbody>
                <tr className="tableheading">
                  <td className="bdr">#</td>
                  <td>Client</td>
                  <td>jobtitle</td>
                  <td>candidate name</td>

                  <td>level 1</td>
                  <td>Level2 </td>
                  <td>client status </td>
                  <td>Hr status</td>
                  <td></td>
                  <td className="bdg"></td>
                </tr>
                {currentPosts.map((ele) => {
                  return (
                    <tr>
                      <td></td>
                      <td>client name</td>
                      <td>jobtitle</td>
                      <td>name</td>
                      <td>{ele.level1}</td>
                      <td>{ele.level2}</td>
                      <td>client status</td>
                      <td>{ele.HrRequired}</td>

                      <td>
                        <button className="rounded-circle">
                          <Link to="/associatepanalcreate">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-check-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                            </svg>
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <nav
              className="footer  rounded-bottom"
              aria-label="Page navigation example"
            >
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link bg-dark text-white " href="#">
                    {totaldata} - {paginationdata.length} Of {state.length}
                  </a>
                </li>
                {/* <li>
                  <button class="page-link footer text-dark m-1.5 " href="#">
                    <span aria-hidden="true">&lt;</span>
                  </button>
                </li>

                <li class="page-item">
                  <a class="page-link footer text-dark" href="#">
                    <span aria-hidden="true">&gt;</span>
                  </a>
                </li> */}
                <li>
                  {totaldata === 1 ? (
                    <button class="page-link footer text-dark m-1.5 " href="#">
                      <span aria-hidden="true">&lt;</span>
                    </button>
                  ) : (
                    <button
                      class="page-link footer text-dark m-1.5 "
                      onClick={() => {
                        increse(currentPosts.length);
                      }}
                      href="#"
                    >
                      <span aria-hidden="true">&lt;</span>
                    </button>
                  )}
                </li>

                <li class="page-item">
                  {paginationdata.length === state.length ? (
                    <a class="page-link footer text-dark" href="#">
                      <span aria-hidden="true">&gt;</span>
                    </a>
                  ) : (
                    <a
                      class="page-link footer text-dark"
                      onClick={() => {
                        decrease();
                      }}
                      href="#"
                    >
                      <span aria-hidden="true">&gt;</span>
                    </a>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
export default withRouter(NewPositions);
