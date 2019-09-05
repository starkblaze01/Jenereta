import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayTimetable extends Component {
  constructor(props){
    super(props);
    this.state ={
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  }



  render() {
    // console.log(this.props.timeTable);
    const tt = this.props.timeTable.timeTable.map(el => {
      // <tr>{
        console.log(el)
      return <table className="table table-bordered">
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
            <tbody>
        {el.map(ele => {

          return <tr> 
          <th>{this.state.days[0]}</th>
          {ele.map(elem => {
          if(elem === 0 ){
            return (
              <td>-</td>
            );
          } else {
            return (
              <td>{elem.subject} {elem.teacher}</td>
            );
          }
          })}
          </tr>
        }) }
        </tbody>
        </table>
        // }
      // </tr>
    });
    return (
      <div className="page display" style={{ marginTop: "100px" }}>
        <h2>Class-Section</h2>
        {/* <table className="table table-bordered">
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
            {tt}
          </tbody>
        </table> */}
        {tt}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeTable: state.timeTable,
});

export default connect(mapStateToProps, null)(DisplayTimetable);
