import React, { useState } from 'react'
import { Form, Input, Modal, Select } from 'antd';
import { useFetch } from '@/hooks/useFetch';


function CourseCreate({ form, show, handleClose, handleCancel }) {
    const { data, loading, error } = useFetch('https://api.webhub.uz/api/v1/course');

    return (
        <></>

    )
}

export default CourseCreate

