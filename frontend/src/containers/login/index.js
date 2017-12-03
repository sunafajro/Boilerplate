import React, { Component } from 'react';
import { bool, func, object, string } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../modules/actions/auth';

class Login extends Component {
  state = {
    username: '',
    password: '',
    valid: true
  }

  static propTypes = {
    fetching: bool.isRequired,
    labels: object.isRequired,
    language: string.isRequired,
    login: func.isRequired,
    loggedIn: bool.isRequired,
    message: object.isRequired
  };

  /* обрабатываем событие отправки формы */
  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.username || !this.state.password) {
      this.setState({ valid: false });
    } else {
      this.setState({ valid: true });
      this.props.login(this.state.username, this.state.password);
    }
  }

  render() {
    const { username, password, valid } = this.state;
    const { fetching, labels, language, loggedIn, message } = this.props;
    return (
      <div>
        { loggedIn ? 
          <Redirect to="/home" push /> :
          <div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/'>{ labels.homeBreadcrumbs[language] }</Link></li>
              <li className="breadcrumb-item active">{ labels.loginBreadcrumbs[language] }</li>
            </ol>
            <h3>{ labels.loginPageTitle[language] }</h3>
            { valid === false ?
                <div className="alert alert-danger">{ labels.formEmptyFieldsAlert[language] }</div>
              : '' }
            { Object.keys(message).length ?
                <div
                  className={ message.type === 'fail' ? 'alert alert-danger' : 'alert alert-success' }
                >
                { message.text }
                </div>
              : '' }
            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                <label htmlFor="usernameInput">{ labels.usernameLabel[language] }</label>
                <input
                  type="text"
                  className="form-control"
                  id="usernameInput"
                  placeholder="Enter username"
                  value={ username }
                  onChange={ (e) => this.setState({ username: e.target.value }) }
                  disabled={ fetching }
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">{ labels.passwordLabel[language] }</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  value={ password }
                  onChange={ (e) => this.setState({ password: e.target.value }) }
                  disabled={ fetching }
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={ fetching }
              >
                { labels.submitBtnLabel[language]}
              </button>
            </form>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.auth.fetching,
  labels: state.app.labels,
  language: state.app.language,
  loggedIn: state.auth.loggedIn,
  message: state.auth.message
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
