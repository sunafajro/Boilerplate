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
        this.props.login(values.username, values.password);
      }
    });
  }

  render() {
    const { fetching, labels, language, loggedIn, message } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Content style={{ padding: '0 50px' }}>
        { loggedIn ? 
          <Redirect to="/home" push /> :
          <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to='/'>{ labels.homeBreadcrumbs[language] }</Link></Breadcrumb.Item>
              <Breadcrumb.Item>{ labels.loginBreadcrumbs[language] }</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <h3>{ labels.loginPageTitle[language] }</h3>
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
                <Button type="primary" htmlType="submit" className="login-form-button" disabled={ fetching }>
                { labels.submitBtnLabel[language]}
                </Button>
              </Form>
            </div>
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
