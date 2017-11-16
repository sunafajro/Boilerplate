import React from "react";
import UserBlock from "../userblock";

class Profile extends React.Component {
  render() {
    return (
      <div className="content-top-padding">
        <div className="row">
          <div className="col-sm-9">It works!</div>
          <div className="col-sm-3">
            <UserBlock />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
