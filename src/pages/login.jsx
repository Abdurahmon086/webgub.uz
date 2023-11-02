import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import { sendData } from '@/service/common';
function login() {
    const router = useRouter();
    const [form] = Form.useForm();
    const handleClose = () => {
        form.validateFields().then((values) => {
            console.log(values);
            fetch("https://api.webhub.uz/api/v1/admin/login",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ ...values })
                })
                .then(res =>
                    res.json()
                ).then((data) => {
                    console.log(data);
                    localStorage.setItem('token', JSON.stringify(data.token))
                }).then(router.push('/dashboard'))
                .catch(function (res) { console.log(res) })
        });
    };
    return (
        <div style={{
            width: '100%', height: '100vh', display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.5)'
        }}>
            <Form
                layout='vetical'
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 700,
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    background: '#fff',
                    padding: '30px 50px'
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                form={form}
            >
                <Form.Item style={{ display: 'flex', flexDirection: 'column' }}
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item style={{ display: 'flex', flexDirection: 'column' }}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item style={{ display: 'flex', flexDirection: 'column' }}
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button style={{ background: "#0000ff" }} type="primary" htmlType="submit" onClick={handleClose}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default login