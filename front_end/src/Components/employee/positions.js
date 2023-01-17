import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connectAdvanced } from "react-redux";
import { withRouter } from "react-router";
import { startallproduct } from "../../action/positions/positionsAction";
import Navbar from "../positions/navbar";
import "../positions/Acc.css";

import { BsChevronDoubleLeft, BsCloudUpload } from "react-icons/bs";
import { Pagination } from "react-bootstrap";
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
    return state.positions;
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
          <div className="m-3">
            <table class="table table-striped  border border-white">
              <tbody>
                <tr className="tableheading">
                  <td className="bdr">JobTitle</td>
                  <td>Position</td>
                  <td>Xp</td>
                  <td>Tools</td>
                  <td>skills</td>
                  <td>Practise</td>
                  <td>Billing rate</td>
                  <td>Target Date</td>
                  <td>Early Starting Date</td>
                  <td className="bdg"></td>
                </tr>
                {currentPosts.map((ele) => {
                  return (
                    <tr>
                      <td>{ele.JodDescription}</td>
                      <td>{ele.numberOfPositions}</td>
                      <td>{ele.assigned_TA_SPOC}</td>
                      <td>{ele.client}</td>
                      <td>{ele.skillSet}</td>
                      <td>{ele.practice}</td>
                      <td>{ele.BillingRate}</td>
                      <td>{ele.targetDate}</td>
                      <td>{ele.earliestStartDate}</td>
                      <td>
                        <button className="rounded-circle">
                          <Link to="/refercandidate">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                              <path
                                fill-rule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                              />
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
