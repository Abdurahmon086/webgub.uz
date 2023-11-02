import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddCourses(props) {
    const [data, setData] = useState({image:'', title:'',description:''});
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log({[e.target.name]: e.target.value});
    }
    const handleClose = () => {

        fetch(`https://api.webhub.uz/api/v1/course/${id}?title&description`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({ ...values })
            })
            .then(function (res) {
                console.log(res.json());
                localStorage.setItem("token", res.body.token)
            })
            .catch(function (res) { console.log(res) })
            ;
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className='text-blue-950 font-semibold w-[750px] flex justify-between'>
                        <p>  O'quvhi statusini o'zgartiring</p>
                        <button onClick={props.onHide} className='text-gray-500 text-lg'>x</button>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='flex flex-col gap-3 ' onSubmit={handleClose}>
                    <label htmlFor="image" className='text-blue-950 text-xl font-semibold'>Kurs rasmi</label>
                    <input className='py-2 px-3 rounded border' type="file" name="image" id="image" value={data.image} onChange={handleChange}/>
                    <label htmlFor="nomi" className='text-blue-950 text-xl font-semibold'>Kurs nomi</label>
                    <input className='py-2 px-3 rounded border' type="text" name="title" id="nomi" placeholder="Kurs nomi" value={data.title} onChange={handleChange}/>
                    <label htmlFor="des" className='text-blue-950 text-xl font-semibold'>Kurs haqida</label>
                    <textarea className='py-2 px-3 rounded border' name="description" id="des" rows="10" placeholder='Kurs haqida' value={data.description} onChange={handleChange}></textarea>
                    <button className='w-[44px] h-[44px] bg-blue-500 rounded mt-3 text-white ' type='submit'> + </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className='bg-red-600 border-none'>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddCourses