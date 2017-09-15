import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getHome } from '../../modules/actions/home'

class Home extends React.Component {
  componentDidMount() {
    this.props.getHome();
  }

  render() {
    return (
      <div>
        <h3>Main page</h3>
        { !this.props.fetching ?
          this.props.news.map(item => {
            return (
              <div key={ item.id }>
                <p><b>{ item.title}</b></p>
                <p>{ item.body}</p>
              </div>
            );
          }) : <p><i>Загружаем данные...</i></p> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  news: state.home.news,
  fetching: state.home.fetching,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getHome
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
