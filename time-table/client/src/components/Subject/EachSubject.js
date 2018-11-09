import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteSubject } from "../../actions/subjectActions";

class EachSubject extends Component {
  onDeleteClick(sbj) {
    this.props.deleteSubject(sbj);
  }

  render() {
    const subjects = this.props.subjects.map(sbj => (
      <tr key={sbj}>
        <td>{sbj}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, sbj)}
            className="btn btn-danger btn-sm"
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
              <th style={{ fontSize: "25px" }}>Subject Name</th>
              <th />
            </tr>
          </thead>
          <tbody style={{ fontSize: "20px" }}>{subjects}</tbody>
        </table>
      </div>
    );
  }
}

EachSubject.propTypes = {
  deleteSubject: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteSubject }
)(EachSubject);
