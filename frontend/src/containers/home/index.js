import React, { Component } from 'react';
import { array, bool, func, object } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { getHome } from '../../modules/actions/home';
import { NewsGrid } from './components/NewsGrid';
import { UserBlock } from '../userblock';
import { InfoBlock } from './components/InfoBlock';

class Home extends Component {
  static propTypes = {
    contacts: array.isRequired,
    fetching: bool.isRequired,
    getHome: func.isRequired,
    loggedIn: bool.isRequired,
    news: array.isRequired,
    profile: object.isRequired
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.getHome();
    }
  }

  render() {
    const { contacts, fetching, news, profile } = this.props;
    return (
      <Row>
        <Col xs={24} sm={24} md={14} lg={16} xl={17} xxl={19} style={{ padding: '10px 0px 10px 0px' }}>
          <NewsGrid loading={fetching} data={ news } />
        </Col>
        <Col xs={24} sm={24} md={10} lg={8} xl={7} xxl={5} style={{ padding: '10px 0px 10px 10px' }}>
          <UserBlock profile={ profile } />
          <InfoBlock contacts={ contacts }/>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.app.contacts,
  fetching: state.home.fetching,
  loggedIn: state.app.loggedIn,
  news: state.home.news,
  profile: state.app.profile
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getHome
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
