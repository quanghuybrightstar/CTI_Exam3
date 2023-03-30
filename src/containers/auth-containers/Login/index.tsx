import React from 'react';
import styles from './styles.module.scss';
import { Input, Button, Form, message, Checkbox, Divider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useApi } from '@/src/api/useApi';
import { useRouter } from 'next/router';
import { setCookie, getCookie } from 'cookies-next';

const Login: React.FC = () => {
  const $api = useApi();
  const router = useRouter();
  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    const dataResLogin: IDataResLogin = await $api.getAccessToken(values);
    if (dataResLogin.success) {
      message.success('Đăng nhập thành công');
      // setCookie('accessToken', `${dataResLogin.data.token}`)
      console.log(dataResLogin.data.token);
      setCookie('accessToken', dataResLogin.data.token);

      router.push('/product');
    } else {
      message.error('Đăng nhập thất bại');
    }
  };

  //   getCookie('accessToken');
  return (
    <div className={styles.login}>
      <div className={styles.form_wrapper}>
        <div className={styles.form_header}>
          <div className={styles.app_name}>Paper Dashboard 2 PRO</div>
        </div>

        <div className={styles.form_login}>
          <Divider className={styles.divider} plain>
            Đăng nhập
          </Divider>

          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={onFinish}
          >
            <Form.Item
              label={<p className={styles.form_label}>Tên tài khoản</p>}
              name="username"
              rules={[
                { required: true, message: 'Vui lòng nhập tên tài khoản!' },
              ]}
            >
              <Input name="username" className={styles.form_input}></Input>
            </Form.Item>

            <Form.Item
              label={<p className={styles.form_label}>Mật khẩu</p>}
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password
                name="password"
                className={styles.form_input}
              ></Input.Password>
            </Form.Item>

            <div className={styles.manage_password_login}>
              <div className={styles.remember_password}>
                <input
                  id={'remember-password'}
                  className={styles.input_remember_password}
                  type={'checkbox'}
                />
                <label
                  style={{ cursor: 'pointer' }}
                  htmlFor="remember-password"
                >
                  &nbsp;Ghi nhớ
                </label>
              </div>
              <Link href={'/'}>Quên mật khẩu</Link>
            </div>

            <Form.Item>
              <Button
                className={styles.form_submit_btn}
                type="primary"
                htmlType="submit"
              >
                Đăng nhập
              </Button>
            </Form.Item>

            <div className={styles.manage_register}>
              <p className="mr-2">Bạn chưa có tài khoản?</p>
              <Link className={styles.redirect_register} href={'/'}>
                Tạo tài khoản mới
              </Link>
            </div>
          </Form>
        </div>
      </div>
      <div className={styles.background_login}></div>
    </div>
  );
};

export default Login;
