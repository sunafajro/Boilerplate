import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../modules/actions/auth';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    valid: null
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
        valid: null
      }); 
      
      this.props.login(username, password);
    }
  }

  render() {
    return (
      <div>
        { this.props.loggedIn ? 
          <Redirect to="/home" push /> :
          <div>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
              <li className="breadcrumb-item active">Login</li>
            </ol>
            <h3>Login page</h3>
            { this.state.valid === false ?
                <div className="alert alert-danger">Поля формы должны быть заполнены!</div>
              : '' }
            { Object.keys(this.props.message).length ?
                <div
                  className={ this.props.message.type === 'fail' ? 'alert alert-danger' : 'alert alert-success' }
                >
                { this.props.message.text }
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
                  value={ this.state.username }
                  onChange={ (e) => this.setState({ username: e.target.value }) }
                  disabled={ this.props.fetching }
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                  value={ this.state.password }
                  onChange={ (e) => this.setState({ password: e.target.value }) }
                  disabled={ this.props.fetching }
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={ this.props.fetching }
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
