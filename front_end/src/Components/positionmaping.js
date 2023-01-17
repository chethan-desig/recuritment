import { useState, useEffect } from "react";
import { useSelector, useDispatch, connectAdvanced } from "react-redux";
import { startallproduct } from "../action/positions/positionsAction";
import "./css1.css";
const Candidatemapping = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.positions;
  });
  console.log(state);
  useEffect(() => {
    dispatch(startallproduct());
  }, []);
  return (
    <div className="container">
      <div className="App">
        <nav class="navbar navbar-dark bg-primary">
          <span class="navbar-text text-light ms4-">Map position</span>
          <input
            className="d-flex"
            id="dropdownMenuLink"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-x-circle"
            viewBox="0 0 20 20"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />

            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </nav>
        <table class="table table-borderless">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Client name</th>
            <th scope="col">Skill set</th>
            <th scope="col">Required experience</th>
          </tr>

          <tbody>
            {state.map((ele) => {
              return (
                <tr>
                  <th scope="row">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      text
                      align="left"
                    />
                  </th>
                  <td text align="left">
                    {ele.client}
                  </td>
                  <td text align="left">
                    {ele.skillSet}
                  </td>
                  <td text align="left">
                    {ele.releventExperience}
                  </td>
                </tr>
              );
            })}
            {/* <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>

              <td text align="left">
                Applied Materials{" "}
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>
              <td text align="left">
                Avays
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>
              <td text align="left">
                Allison Transmission
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>
              <td text align="left">
                Donmakaba
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>
              <td text align="left">
                Unilever
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>
              <td text align="left">
                Vista print
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>
              <td text align="left">
                Delta
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>
              <td text align="left">
                Citrix
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>
              <td text align="left">
                Stanley black and decker
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  text
                  align="left"
                />
              </th>
              <td text align="left">
                Pilot Thomas
              </td>
              <td text align="left">
                Lorem Ipsum dolor sit,amel
              </td>
              <td text align="left">
                4-6
              </td> */}
          </tbody>
        </table>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary me-md-2" type="button">
            Cancel
          </button>
          <button class="btn btn-primary" type="button">
            Map Position
          </button>
        </div>
      </div>
    </div>
  );
};
export default Candidatemapping;
