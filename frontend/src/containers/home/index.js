import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHome } from '../../modules/actions/home';
import { Jumbotron } from './components/jumbotron';
import { NewsRow } from './components/news-grid';

class Home extends React.Component {
  static propTypes = {
    fetching: PropTypes.bool.isRequired,
    jumbotron: PropTypes.array.isRequired,
    news: PropTypes.array.isRequired,
    getHome: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getHome();
  }

  render() {
    return (
      <div>
        { !this.props.fetching ?
          <div>
            { this.props.jumbotron.length ? <Jumbotron jumbotron={ this.props.jumbotron[0] } /> : '' }
            { this.props.news.length ? <NewsRow news={ this.props.news } /> : '' }
          </div>
          : <div className="alert alert-warning" role="alert">Загружаем данные...</div> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
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
