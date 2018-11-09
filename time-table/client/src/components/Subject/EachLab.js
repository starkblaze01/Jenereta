import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLab } from "../../actions/subjectActions";

class EachLab extends Component {
  onDeleteClick(lab) {
    this.props.deleteLab(lab);
  }

  render() {
    const labs = this.props.labs.map(lab => (
      <tr key={lab._id}>
        <td>{lab.labname}</td>
        <td />
        <td>{lab.numberoflabs}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, lab._id)}
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
              <th style={{ fontSize: "25px" }}>Lab Name</th>
              <th />
              <th style={{ fontSize: "25px" }}>Number Of Labs</th>
              <th />
            </tr>
          </thead>
          <tbody style={{ fontSize: "20px" }}>{labs}</tbody>
        </table>
      </div>
    );
  }
}

EachLab.propTypes = {
  deleteLab: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLab }
)(EachLab);
