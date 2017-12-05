import React, { Component } from 'react';
import { bool, func, object, string } from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Breadcrumb, Layout, Form, Icon, Input, Button } from 'antd';
import { login } from '../../modules/actions/auth';

const FormItem = Form.Item;
const { Content } = Layout;

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

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });

    // if (!this.state.username || !this.state.password) {
    //   this.setState({ valid: false });
    // } else {
    //   this.setState({ valid: true });
    //   this.props.login(this.state.username, this.state.password);
    // }
  }

  render() {
    const { username, password, valid } = this.state;
    const { fetching, labels, language, loggedIn, message } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Content>
        { loggedIn ? 
          <Redirect to="/home" push /> :
          <div>
            <Breadcrumb>
              <Breadcrumb.Item><Link to='/'>{ labels.homeBreadcrumbs[language] }</Link></Breadcrumb.Item>
              <Breadcrumb.Item>{ labels.loginBreadcrumbs[language] }</Breadcrumb.Item>
            </Breadcrumb>
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
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                { getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
              </FormItem>
              <FormItem>
                { getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
              </FormItem>
              {/* <div className="form-group">
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
              </div> */}
              {/* <div className="form-group">
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
              </div> */}
              <Button type="primary" htmlType="submit" className="login-form-button" disabled={ fetching }>
              { labels.submitBtnLabel[language]}
              </Button>
            </Form>
          </div>
        }
      </Content>
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

const LoginForm = Form.create()(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
