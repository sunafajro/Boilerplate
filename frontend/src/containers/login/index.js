/* @flow */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../modules/actions/auth';

type Props = {
  loggedIn: boolean,
  fetching: boolean,
  message: {type: string, text: string},
  login: Function
};

type State = {
  username: string,
  password: string,
  valid: boolean
};

class Login extends React.Component<Props, State> {
  state = {
    username: '',
    password: '',
    valid: true
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let username = this.state.username;
    let password = this.state.password;

    if (username === '' || password === '') {
      this.setState({
        valid: false
      });
    } else {
      this.setState({
        valid: true
      }); 
      
      this.props.login(username, password);
    }
  }

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div>
        { props.loggedIn ? 
          <Redirect to="/home" push /> :
          <div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
              <li className="breadcrumb-item active">Login</li>
            </ol>
            <h3>Login page</h3>
            { state.valid === false ?
                <div className="alert alert-danger">Поля формы должны быть заполнены!</div>
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
                <label htmlFor="usernameInput">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="usernameInput"
                  placeholder="Enter username"
                  value={ state.username }
                  onChange={ (e) => this.setState({ username: e.target.value }) }
                  disabled={ props.fetching }
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  value={ state.password }
                  onChange={ (e) => this.setState({ password: e.target.value }) }
                  disabled={ props.fetching }
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={ props.fetching }
              >
                Submit
              </button>
            </form>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  fetching: state.auth.fetching,
  message: state.auth.message,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
