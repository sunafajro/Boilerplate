/* @flow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHome } from '../../modules/actions/home';
import Jumbotron from './components/jumbotron';
import NewsRow from './components/news-grid';

type Props = {
  loggedIn: boolean,
  fetching: boolean,  
  jumbotron: Object,
  news: Array<Object>,
  getHome: Function
};

class Home extends React.Component<Props, {}> {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.getHome();
    }
  }

  render() {
    return (
      <div>
        { !this.props.fetching ?
          <div>
            { <Jumbotron jumbotron={ this.props.jumbotron } /> }
            { <NewsRow news={ this.props.news } /> }
          </div>
          : <div className="alert alert-warning" role="alert">Загружаем данные...</div> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  jumbotron: state.home.jumbotron,
  news: state.home.news,
  fetching: state.home.fetching,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getHome
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
