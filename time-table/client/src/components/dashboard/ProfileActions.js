import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div>
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fascd fa-user-circle-o text-info mr-1" />
        Edit Profile
      </Link>
    </div>
  );
};

export default ProfileActions;
