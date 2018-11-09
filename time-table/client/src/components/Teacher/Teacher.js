import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTeacher } from "../../actions/teacherActions";

class Teacher extends Component {
  onDeleteClick(tcr) {
    this.props.deleteTeacher(tcr);
  }

  render() {
    const teachersName = this.props.teachers.map(tcr => (
      <tr key={tcr}>
        <td>{tcr}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, tcr)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="addscroll">
        <table>
          <thead>
            <tr>
              <th style={{ fontSize: "25px" }}>Teacher's Name</th>
              <th />
            </tr>
          </thead>
          <tbody style={{ fontSize: "20px" }}>{teachersName}</tbody>
        </table>
      </div>
    );
  }
}

Teacher.propTypes = {
  deleteTeacher: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTeacher }
)(Teacher);
