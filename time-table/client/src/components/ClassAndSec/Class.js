import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteClass } from "../../actions/classActions";

class Class extends Component {
  onDeleteClick(cls) {
    this.props.deleteClass(cls);
  }

  render() {
    const section = this.props.section.map(cls => (
      <tr key={cls}>
        <td>{cls}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, cls)}
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
              <th style={{ fontSize: "25px" }}>Class And Section</th>
              <th />
            </tr>
          </thead>
          <tbody style={{ fontSize: "20px" }}>{section}</tbody>
        </table>
      </div>
    );
  }
}

Class.propTypes = {
  deleteClass: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteClass }
)(Class);
