import React from 'react'
import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/router';

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
                    localStorage.setItem('admin',JSON.stringify(data.admin))
                }).then(router.push('/dashboard'))
                .catch(function (res) { console.log(res) })
        });
    };
    return (
        <div className='flex items-center' style={{
            width: '100%', height: '100vh',
            background: 'rgba(0,0,0,0.5)'
        }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    width: 600,
                    margin: 'auto',
                    background: '#fff',
                    padding: '30px 20px',
                    display: 'flex',
                    flexDirection: 'column'
                    
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                form={form}
                layout='vertical'
            >
                <Form.Item
                    label="Foydanaluvchi nomi"
                    name="username"
                >
                    <Input placeholder='Foydanaluvchi nomi' />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        span: 16
                    }}
                    label="Parol"
                    name="password"
                >
                    <Input.Password placeholder='Parol...' />
                </Form.Item>

                <Form.Item
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