import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory, withRouter } from "react-router-dom";

const Login = () => {
  /**
   * browser history instance to redirectin
   */
  const history = useHistory();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    const url = "auth url";

    localStorage.setItem("isAuth", true);
    history.push("/dashboard");

    /** use the below axios code for app */
    // axios
    //   .post(url, values)
    //   .then((response) => {
    //     /**
    //      * first set the localStorage
    //      */
    //     localStorage.setItem("isAuth", true);

    //     /**
    //      * then push to the dashboard
    //      */
    //     history.push("/dashboard");
    //   })
    //   .catch((error) => {});
  };

  return (
    <div
      style={{
        width: "20%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "10%",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(Login);
