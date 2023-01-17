import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, connectAdvanced } from "react-redux";
import { withRouter } from "react-router";
import { startallproduct } from "../../action/Rmg/rmgaction";
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
    return state.rmg;
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
                to="/rmg"
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
                to="/candidate"
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                candidate
              </Link>
            </li>
          </ul>
          <div className="m-3">
            <table class="table table-striped  border border-white">
              <tbody>
                <tr className="tableheading">
                  <td className="bdr">name</td>
                  <td>jobtitle</td>
                  <td>Xp</td>
                  <td>Tools</td>

                  <td>Practise</td>
                  <td>Billing rate</td>
                  <td>Target Date</td>
                  <td>Early Starting Date</td>
                  <td className="bdg"></td>
                </tr>
                {currentPosts.map((ele) => {
                  return (
                    <tr>
                      <td>{ele.candidatename}</td>
                      <td>{ele.fullstackdeveloper}</td>
                      <td>{ele.currentjobtittle}</td>
                      <td>{ele.skillSet}</td>
                      <td>{ele.currentemployer}</td>
                      <td>{ele.practice}</td>
                      <td>{ele.currentctc}</td>
                      <td>{ele.noticeperiod}</td>

                      <td>
                        <button className="rounded-circle">
                          <Link to="/positionmapping">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-link"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                              <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
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
