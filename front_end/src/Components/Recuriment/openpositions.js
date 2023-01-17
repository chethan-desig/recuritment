import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connectAdvanced } from "react-redux";
import { withRouter } from "react-router";
import { startallproduct } from "../../action/positions/positionsAction";
import Navbar from "../positions/navbar";
import "./css2.css";

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
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <Link
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
                to="/associatepanal"
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Associate Panel
              </Link>
            </li>
            <div className="dropdown d-flex justify-content-end">
              <li>
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Assigned to
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sonam Khare
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      kirshna Murthy Gandhi
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Kiran Devraj
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Rajieve Nagraj
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </ul>
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
