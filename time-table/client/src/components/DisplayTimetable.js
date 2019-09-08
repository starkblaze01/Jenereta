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
    const tt = this.props.timeTable.timeTable ? (this.props.timeTable.timeTable.map(el => {
      return <table className="table table-bordered" key={this.props.timeTable.timeTable.indexOf(el)}>
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
          let i = 0;
          return <tr key={el.indexOf(ele)}>
          <th>{this.state.days[el.indexOf(ele)]}</th>
          {ele.map(elem => {
          if(elem === 0 ){
            i = i+1;
            return (
              <td key ={i}>-</td>
            );
          } else {
            i = i + 1;
            return (
              <td key={i}>{elem.subject} (Faculty:{elem.teacher})</td>
            );
          }
          })}
          </tr>
        }) }
        </tbody>
        </table>
    })) : (
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
    </table>)
    return (
      <div className="page display" style={{ marginTop: "100px" }}>
        <h2>Class-Section</h2>
        {tt}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  timeTable: state.timeTable,
});

export default connect(mapStateToProps, null)(DisplayTimetable);
