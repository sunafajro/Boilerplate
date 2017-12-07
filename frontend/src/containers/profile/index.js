import React from "react";
import { object } from 'prop-types';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import { UserBlock } from "../userblock";

class Profile extends React.Component {
  static propTypes = {
    profile: object.isRequired
  }

  render() {
    const { profile } = this.props;
    return (
      <Row>
        <Col xs={24} sm={24} md={14} lg={16} xl={16} style={{ padding: '10px 0px 10px 0px' }}>
          It works!
        </Col>
        <Col xs={24} sm={24} md={10} lg={8} xl={8} style={{ padding: '10px 0px 10px 10px' }}>
          <UserBlock profile={ profile } />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.app.profile
});

export default connect(
  mapStateToProps,
  null
)(Profile);