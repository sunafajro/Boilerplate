/* @flow */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, updateState } from '../../modules/actions/auth';

type Props = {
  loginForm: { username: string, password: string, valid: boolean},
  loggedIn: boolean,
  fetching: boolean,
  message: {type: string, text: string},
  labels: Object,
  updateState: (value: boolean, key: string) => void,
  login: (username: string, password: string) => void
};

class Login extends React.Component<Props, {}> {
  /* обрабатываем событие отправки формы */
  handleSubmit = (e) => {
    e.preventDefault();

    const username = this.props.loginForm.username;
    const password = this.props.loginForm.password;

    if (!username || !password) {
      this.props.updateState(false, 'valid');
    } else {
      this.props.updateState(true, 'valid'); 
      this.props.login(username, password);
    }
  }

  render() {
    const props = this.props;
    return (
      <div>
        { props.loggedIn ? 
          <Redirect to="/home" push /> :
          <div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/'>{ props.labels.homeBreadcrumbs }</Link></li>
              <li className="breadcrumb-item active">{ props.labels.loginBreadcrumbs }</li>
            </ol>
            <h3>{ props.labels.loginPageTitle }</h3>
            { props.loginForm.valid === false ?
                <div className="alert alert-danger">{ props.labels.formEmptyFieldsAlert }</div>
              : '' }
            { Object.keys(props.message).length ?
                <div
                  className={ props.message.type === 'fail' ? 'alert alert-danger' : 'alert alert-success' }
                >
                { props.message.text }
                </div>
              : '' }
            <form onSubmit={ this.handleSubmit }>
              <div className="form-group">
                <label htmlFor="usernameInput">{ props.labels.usernameLabel }</label>
                <input
                  type="text"
                  className="form-control"
                  id="usernameInput"
                  placeholder="Enter username"
                  value={ props.loginForm.username }
                  onChange={ (e) => this.props.updateState(e.target.value, 'username') }
                  disabled={ props.fetching }
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">{ props.labels.passwordLabel }</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  value={ props.loginForm.password }
                  onChange={ (e) => this.props.updateState(e.target.value, 'password') }
                  disabled={ props.fetching }
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={ props.fetching }
              >
                { props.labels.submitBtnLabel}
              </button>
            </form>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginForm: state.auth.loginForm,
  loggedIn: state.auth.loggedIn,
  fetching: state.auth.fetching,
  message: state.auth.message,
  labels: state.auth.labels
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateState,
  login
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
