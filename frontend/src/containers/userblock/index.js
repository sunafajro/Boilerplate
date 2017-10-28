/* @flow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getState } from '../../modules/actions/auth';

type Props = {
  profile: { 
    userId: number,
    username: string,
    fullname: string,
    phone: string,
    email: string
  },
};

class UserBlock extends React.Component<Props, {}> {
  render () {
    let props = this.props;
    return (
      <div className="card bg-info border-info text-white" style={{ marginBottom: '10px' }}>
        <div className="card-body">
          { props.profile.fullname && props.profile.fullname !== '' ?
            <h5>
              <i className="fa fa-user"> { props.profile.fullname }</i>
            </h5> : '' }
          { props.profile.phone && props.profile.phone !== '' ?
            <h5>
              <i className="fa fa-phone"> { props.profile.phone }</i>
            </h5> : '' }
          { props.profile.email && props.profile.email !== '' ?
            <h5>
              <i className="fa fa-envelope"> { props.profile.email }</i>
            </h5> : '' }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.auth.profile
});
  
export default connect(mapStateToProps, null)(UserBlock);
