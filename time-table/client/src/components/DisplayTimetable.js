import React, { Component } from "react";

class DisplayTimetable extends Component {
  render() {
    return (
      <div className="container page display" style={{ marginTop: "100px" }}>
        <h2>Class-Section</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ fontSize: "25px" }} />
              <th style={{ fontSize: "25px" }}>First</th>
              <th style={{ fontSize: "25px" }}>Second</th>
              <th style={{ fontSize: "25px" }}>Third</th>
              <th style={{ fontSize: "25px" }}>Fourth</th>
              <th style={{ fontSize: "25px" }}>Fifth</th>
              <th style={{ fontSize: "25px" }}>Sixth</th>
              <th style={{ fontSize: "25px" }}>Seventh</th>
              <th style={{ fontSize: "25px" }}>Eighth</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "20px" }}>
            <tr>
              <th>Monday</th>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th>Tuesday</th>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th>Wednesday</th>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th>Thursday</th>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th>Friday</th>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            <tr>
              <th>Saturday</th>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayTimetable;
