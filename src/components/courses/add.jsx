import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddCourses(props) {
    const [form] = Form
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
                .then(function (res) {
                    console.log(res.json());
                    localStorage.setItem("token", res.body.token)
                })
                .catch(function (res) { console.log(res) })
        });
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
                <form className='flex flex-col gap-3 '>
                    <label htmlFor="image" className='text-blue-950 text-xl font-semibold'>Kurs rasmi</label>
                    <input className='py-2 px-3 rounded border' type="file" name="image" id="image" />
                    <label htmlFor="nomi" className='text-blue-950 text-xl font-semibold'>Kurs nomi</label>
                    <input className='py-2 px-3 rounded border' type="text" name="nomi" id="nomi" placeholder="Kurs nomi" />
                    <label htmlFor="des" className='text-blue-950 text-xl font-semibold'>Kurs haqida</label>
                    <textarea className='py-2 px-3 rounded border' name="des" id="des" rows="10" placeholder='Kurs haqida'></textarea>
                    <button className='w-[44px] h-[44px] bg-blue-500 rounded mt-3 text-white '> + </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className='bg-red-600 border-none'>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddCourses