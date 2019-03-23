import React from "react";
import "./login.css";

import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  notification,
  Layout
} from "antd";
import { Authentication } from "../services";

const { Header, Content, Footer } = Layout;

class NormalLoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (Authentication.login(values.username, values.password)) {
          notification.success({
            message: "Success",
            description: "Successfully Authenticated"
          });
          this.props.history.push("/");
        } else {
          notification.error({
            message: "Invalid Credentials",
            description: "Please provide valid credentials"
          });
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <React.Fragment>
        <Layout className='layout'>
          <Header>
            <div className='logo'> Vidly</div>
          </Header>
          <br />
          <Content style={{ padding: "0 50px", height: "82vh" }}>
            <Row>
              <Col span={8} />
              <Col span={8}>
                <div
                  style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                  <h1>Login</h1>
                  <Form onSubmit={this.handleSubmit} className='login-form'>
                    <Form.Item>
                      {getFieldDecorator("username", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your username!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type='user'
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          placeholder='username'
                        />
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator("password", {
                        rules: [
                          {
                            required: true,
                            message: "Please input your Password!"
                          }
                        ]
                      })(
                        <Input
                          prefix={
                            <Icon
                              type='lock'
                              style={{ color: "rgba(0,0,0,.25)" }}
                            />
                          }
                          type='password'
                          placeholder='Password'
                        />
                      )}
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type='primary'
                        htmlType='submit'
                        className='login-form-button'>
                        Log in
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
              <Col span={8} />
            </Row>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created by Partha Saradhi Konda
          </Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

export { Login };
