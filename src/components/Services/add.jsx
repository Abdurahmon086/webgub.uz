import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddServices(props) {
    const pathname = usePathname('/').split('/')[2];

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
                        <p>{props.pathname == 'xizmatlar' ? 'Xizmat' : 'Kurs'} qo'shish</p>
                        <button onClick={props.handleCancel} className='text-gray-500 text-lg'>x</button>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className='flex flex-col gap-3 '>
                    <label htmlFor="image" className='text-blue-950 text-xl font-semibold'>{props.pathname == 'xizmatlar' ? 'Xizmat' : 'Kurs'} rasmi</label>
                    <input className='py-2 px-3 rounded border' type="file" name="image" id="image" value={props.values.image} onChange={props.handleChange} />
                    <label htmlFor="title" className='text-blue-950 text-xl font-semibold'>{props.pathname == 'xizmatlar' ? 'Xizmat' : 'Kurs'} nomi</label>
                    <input className='py-2 px-3 rounded border' type="text" name="title" id="title" placeholder={`${props.pathname == 'xizmatlar' ? 'Xizmat' : 'Kurs'} nomi`} value={props.values.title} onChange={props.handleChange} />
                    <label htmlFor="description" className='text-blue-950 text-xl font-semibold'>{props.pathname == 'xizmatlar' ? 'Xizmat' : 'Kurs'} haqida</label>
                    <textarea className='py-2 px-3 rounded border' name="description" id="description" rows="10" placeholder={`${props.pathname == 'xizmatlar' ? 'Xizmat' : 'Kurs'} haqida`} value={props.values.description} onChange={props.handleChange}></textarea>
                    <button className='w-[44px] h-[44px] bg-blue-500 rounded mt-3 text-white ' onClick={props.onHide}> + </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleCancel} className='bg-red-600 border-none'>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddServices