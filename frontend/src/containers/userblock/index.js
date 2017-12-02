import React from 'react';
import { object } from 'prop-types';

UserBlock.propTypes = {
  profile: object.isRequired
};

export function UserBlock ({ profile }) {
  return (
    <div className="card bg-info border-info text-white" style={{ marginBottom: '10px' }}>
      <div className="card-body">
        { profile.fullname && profile.fullname !== '' ?
          <h5>
            <i className="fa fa-user"> { profile.fullname }</i>
          </h5> : '' }
        { profile.phone && profile.phone !== '' ?
          <h5>
            <i className="fa fa-phone"> { profile.phone }</i>
          </h5> : '' }
        { profile.email && profile.email !== '' ?
          <h5>
            <i className="fa fa-envelope"> { profile.email }</i>
          </h5> : '' }
      </div>
    </div>
  );
}
