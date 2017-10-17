import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHome } from '../../modules/actions/home';
import { Jumbotron } from './components/jumbotron';
import { NewsRow } from './components/news-grid';

export interface Props {
  fetching: boolean;
  jumbotron: { id: number, title: string, body: string },
  news: Array<{ id: number, title: string, body: string }>,
  getHome: Function
}

class Home extends React.Component<Props, {}> {

  componentDidMount() {
    this.props.getHome();
  }

  render() {
    let props = this.props;
    return (
      <div>
        { !this.props.fetching ?
          <div>
            { props.jumbotron ? <Jumbotron jumbotron={ props.jumbotron } /> : '' }
            { props.news.length ? <NewsRow news={ props.news } /> : '' }
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
