import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteSlot } from "../../actions/slotActions";

class EachSlot extends Component {
  onDeleteClick(id) {
    this.props.deleteSlot(id);
  }
  render() {
    const slots = this.props.slots.map(slot => (
      <tr key={slot._id}>
        <td>{slot.teacher}</ td>
        <td>{""}</td>
        <td>{slot.sections}</td>
        <td>{""}</td>
        <td>{slot.subject}</td>
        <td>{""}</td>
        <td>{slot.numLectures}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, slot._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="addscroll">
        {/* {console.log(this.props.slots)} */}
        <table>
          <thead>
            <tr>
              <th style={{ fontSize: "25px" }}>Teacher Name</th>
              <th>{""}</th>
              <th style={{ fontSize: "25px" }}>Class-Section</th>
              <th>{""}</th>
              <th style={{ fontSize: "25px" }}>Subject</th>
              <th>{""}</th>
              <th style={{ fontSize: "25px" }}>Number Of Lectures</th>
              <th>{""}</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "20px" }}>{slots}</tbody>
        </table>
      </div>
    );
  }
}

EachSlot.propTypes = {
  deleteSlot: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteSlot }
)(EachSlot);
