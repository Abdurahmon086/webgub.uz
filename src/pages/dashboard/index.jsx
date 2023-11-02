import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import user from '../../../public/icon/user.svg'
import check from '../../../public/icon/check.svg'
import car from '../../../public/icon/bxs-car.svg'
import userBX from '../../../public/icon/bxs-user.svg'
import book from '../../../public/icon/bx-book-bookmark.svg'
import checkDuble from '../../../public/icon/bx-check-double.svg'
import block from '../../../public/icon/bx-block.svg'

import Layout from './layout'

function dashboard() {

    const [data, setData] = useState(null)
    const [course, setCourse] = useState(null)

    useEffect(() => {
        fetch('https://api.webhub.uz/api/v1/student', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzk4MTA5MjM5MThiMTQyMjdjYTY3ZCIsImlhdCI6MTY5ODg3NzUxM30.9XRZ7XR-0P1HXAvamkJsXJt5tb-Q8VA3gacGdh0vHww',
                'Host': 'api.producthunt.com'
            }
        }).then(res => res.json()).then(data => setData(data.students));

        fetch('https://api.webhub.uz/api/v1/course', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzk4MTA5MjM5MThiMTQyMjdjYTY3ZCIsImlhdCI6MTY5ODg3NzUxM30.9XRZ7XR-0P1HXAvamkJsXJt5tb-Q8VA3gacGdh0vHww',
                'Host': 'api.producthunt.com'
            }
        }).then(res => res.json()).then(data => setCourse(data.courses)).catch(err => console.log(err))
    }, [])

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                    crossorigin="anonymous"
                />
            </Head>
            <Layout>
                <section className='p-6'>
                    <ul className='flex flex-wrap gap-7'>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-500 text-2xl font-bold'>O'quvchilar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-blue-500 text-6xl font-bold'>{data?.length}</h5> <Image src={user} alt='students icon' height={65} /></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-yellow-400 text-2xl font-bold'>Yangi o'quvchilar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-yellow-400 text-6xl font-bold'>1</h5> <Image src={check} alt='students icon' height={65} /></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-green-700 text-2xl font-bold'>O'qiydigonlar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-green-700 text-6xl font-bold'>0</h5> <Image src={checkDuble} alt='students icon' height={65} /></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-red-500 text-2xl font-bold'>O'qimaydigonlar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-red-500 text-6xl font-bold'>0</h5> <Image src={block} alt='students icon' height={65} /></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-400 text-2xl font-bold'>Buyurtmachilar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-blue-400 text-6xl font-bold'>1</h5> <Image src={userBX} alt='students icon' height={65} /></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-gray-500 text-2xl font-bold'>Xizmatlar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-gray-500 text-6xl font-bold'>1</h5> <Image src={car} alt='students icon' height={65} /></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-800 text-2xl font-bold'>Kurslar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-blue-800 text-6xl font-bold'>1</h5> <Image src={book} alt='students icon' height={65} /></div>
                        </li>
                    </ul>
                </section>
            </Layout>
        </>
    )
}

export default dashboard