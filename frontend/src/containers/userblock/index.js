import React from 'react';
import { object } from 'prop-types';
import { Card, Icon } from 'antd';

export const UserBlock = ({ profile }) => {
  return (
      <Card style={{ marginBottom: '10px' }}>
        { profile.fullname && profile.fullname !== '' ?
          <h5>
            <Icon type="user" /> { profile.fullname }
          </h5> : '' }
        { profile.phone && profile.phone !== '' ?
          <h5>
            <Icon type="mobile" /> { profile.phone }
          </h5> : '' }
        { profile.email && profile.email !== '' ?
          <h5>
            <Icon type="mail" /> { profile.email }
          </h5> : '' }
    </Card>
  );
}

UserBlock.propTypes = {
  profile: object.isRequired
};