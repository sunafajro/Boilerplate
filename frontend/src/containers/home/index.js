import React, { Component } from 'react';
import { array, bool, func, object } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHome } from '../../modules/actions/home';
import { Jumbotron } from './components/Jumbotron';
import { NewsRow } from './components/NewsRow';
import { UserBlock } from '../userblock';
import { InfoBlock } from './components/InfoBlock';

class Home extends Component {
  static propTypes = {
    contacts: array.isRequired,
    fetching: bool.isRequired,
    getHome: func.isRequired,
    jumbotron: object.isRequired,
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
    const { contacts, fetching, jumbotron, news, profile } = this.props;
    return (
      <div className="content-top-padding">
        { !fetching ?
          <div className="row">
            <div className="col-sm-9">
            { <Jumbotron jumbotron={ jumbotron } /> }
            { <NewsRow news={ news } /> }
            </div>
            <div className="col-sm-3">
              <UserBlock profile={ profile } />
              <InfoBlock contacts={ contacts }/>
            </div>
          </div>
          : <div className="alert alert-warning" role="alert">Загружаем данные...</div> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.auth.contacts,
  fetching: state.home.fetching,
  jumbotron: state.home.jumbotron,
  loggedIn: state.auth.loggedIn,
  news: state.home.news,
  profile: state.auth.profile
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getHome
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
