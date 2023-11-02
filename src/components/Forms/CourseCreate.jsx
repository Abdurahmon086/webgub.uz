import React, { useState } from 'react'
import { Form, Input, Modal, Select } from 'antd';


function CourseCreate({ form, show, handleClose, handleCancel }) {

    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                break;
            case 'female':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                break;
            case 'other':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
                break;
            default:
        }

    };

    return (
        <>
            <Modal title="Basic Modal" open={show} onOk={handleClose} onCancel={handleCancel}>
                <Form
                    layout='vertical'
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="Ism Familiya Sharifingiz"
                        name="fullName"
                    >
                        <Input placeholder='F.I.SH' />
                    </Form.Item>
                    <Form.Item
                        labelAlign='top'
                        label="Telefon raqam"
                        name="phoneNumber"
                    >
                        <Input placeholder='987654321' />
                    </Form.Item>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                    </Form.Item>
                </Form>
            </Modal >

        </>

    )
}

export default CourseCreate

