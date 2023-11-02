import edit from '../../../public/icon/edit.svg'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Layout from './layout'
import { useFetch } from '@/hooks/useFetch'
import AddCourses from '@/components/courses/add'
import { useState } from 'react'
import Head from 'next/head'

function Curses() {
    const pathname = usePathname('/').split('/')[2];
    const [show, setShow] = useState(false);
    let [values, setValues] = useState({ title: "", image: "", description: "" });
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleClose = () => {
        setShow(false);
        let token = localStorage.getItem('token');
        fetch("https://api.webhub.uz/api/v1/admin/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'token': token
                },
                method: "POST",
                body: JSON.stringify({ ...values })
            })
            .then((res) => res.json())
            .catch((res) => { console.log(res) })
    }
    const handleCancel = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);
    let { data, loading, error } = useFetch('https://api.webhub.uz/api/v1/course');
    console.log(data)
    if (loading) {
        return (<div>Loading ...</div>)
    }
    return (
        data && <>
            <Layout>
                <section className='p-6 w-full flex flex-col gap-7'>
                    <div className=" p-4 bg-white flex justify-between items-center">
                        <div className="">
                            <h5 className='text-blue-950 text-3xl font-semibold'>{pathname}</h5>
                            <p className='text-blue-900'>Bosh sahifa / <span className='font-semibold'>{pathname}</span></p>
                        </div>
                        <Button className='bg-blue-500 w-10 h-10 rounded text-white text-xl' variant="primary" onClick={handleShow}>+</Button>
                    </div>
                    <div className="bg-white p-4">
                        <table className="border-collapse border  w-full">
                            <thead>
                                <tr className='flex bg-slate-200 ' >
                                    <th className="border w-9  text-center">#</th>
                                    <th className="border w-[30%]  text-center">Kurs id</th>
                                    <th className="border w-[25%] text-center">Kurs nomi</th>
                                    <th className="border w-[15%]  text-center">O'quvchilar soni</th>
                                    <th className="border w-[18%] text-center">Yaratilgan vaqti</th>
                                    <th className="border w-[10%] text-center">Tahrirlash</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.courses.map((item, i) => {
                                    return (
                                        <tr className='flex' key={item._id}>
                                            <th className="border w-9 p-2 text-center">{i + 1}</th>
                                            <td className="border overflow-hidden w-[30%] p-2 text-center font-medium">{item.id}</td>
                                            <td className="border w-[25%] p-2 text-center font-medium">{item.title}</td>
                                            <td className="border w-[15%] p-2 text-center font-medium">{item.students.length}</td>
                                            <td className="border w-[18%] p-2 text-center font-medium">{item.createdAt}</td>
                                            <td className="border w-[10%]  p-2 text-center"> <Button className='w-[34px] h-[34px] border-none bg-yellow-300 mx-auto rounded text-center' variant="primary" onClick={handleShow}> <Image src={edit} alt='edit icon' /> </Button> </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section >
            </Layout>
            <AddCourses show={show} pathname={pathname} onHide={handleClose} values={values} handleChange={handleChange} handleCancel={handleCancel} />
        </>
    )

}

export default Curses