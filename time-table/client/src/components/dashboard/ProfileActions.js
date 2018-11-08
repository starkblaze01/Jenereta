import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div>
      <Link to="/edit-profile" className="btn btn-light">
        <span className="fa fa-user-circle-o fa-lg" ></span> Edit Profile
      </Link>
    </div>
  );
};

export default ProfileActions;
