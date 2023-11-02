import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import save from '../../../public/image/save.png'
import Image from 'next/image';


function Holat(props) {
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
                <h4 className='text-2xl text-blue-950 font-semibold'>Holatni tanlang</h4>

                <Form.Select aria-label="Default select example" className='mt-3'>
                    <option>Tanlang</option>
                    <option value="1">O'qiydi</option>
                    <option value="2">O'qimaydi</option>
                </Form.Select>
                <button className='w-[44px] h-[44px] bg-green-600 rounded mt-3 '><Image className='mx-auto' src={save} alt='save icon' /></button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className='bg-red-600 border-none'>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Holat