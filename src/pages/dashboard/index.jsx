import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Holat from '@/components/Student/Holat'
import logo from '../../../public/icon/logo.svg'
import menu from '../../../public/image/menu.png'
import settings from '../../../public/image/cog.png'
import user from '../../../public/icon/user.svg'
import check from '../../../public/icon/check.svg'
import leftArrow from '../../../public/icon/left_arrow.svg'
import car from '../../../public/icon/bxs-car.svg'
import userBX from '../../../public/icon/bxs-user.svg'
import book from '../../../public/icon/bx-book-bookmark.svg'
import checkDuble from '../../../public/icon/bx-check-double.svg'
import block from '../../../public/icon/bx-block.svg'
import Aside from '@/components/Aside/aside'
import Students from './students'
import Link from 'next/link'
import UsersBoard from './sozlamalar'

function dashboard() {

    const [holat, setHolat] = useState(false)
    const [menus, setMenus] = useState(false)
    const [users, setUsers] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.webhub.uz/api/v1/student/get-all', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzk4MTA5MjM5MThiMTQyMjdjYTY3ZCIsImlhdCI6MTY5ODg3NzUxM30.9XRZ7XR-0P1HXAvamkJsXJt5tb-Q8VA3gacGdh0vHww',
                'Host': 'api.producthunt.com'
            }
        }).then(res => res.json()).then(data => setData(data.students))
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

            <header className='top-0 left-0 w-full bg-white flex items-center justify-between px-3 py-4 shadow-lg sticky z-40 '>
                <a href='/dashboard'><Image height={52} src={logo} alt='webhup logo' /></a>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src={menu} alt='menu icon' width={35} onClick={() => setMenus(menus == false ? true : false)} />
                    <Image src={user} alt='user icon' width={35} onClick={() => setUsers(users == false ? true : false)} />
                    <h4 className='font-bold text-violet-950 text-xl' onClick={() => setUsers(users == false ? true : false)}> Alisher Valiyev</h4>
                </div>
                <ul style={(users == true ? { display: "none" } : { display: 'flex' })} className='flex flex-col bg-white absolute z-50 rounded shadow-md w-64 right-2 top-[80px]'>
                    <li> <Link href='/dashboard/users' className='p-2 flex gap-2 font-medium text-blue-950 text-lg'><Image src={settings} alt='settings icon' width={24} height={18} /> Sozlamalar</Link></li>
                    <li>  <Link href='/login' className='p-2 flex gap-2 font-medium text-blue-950 text-lg'><Image src={leftArrow} alt='left arrow icon' /> Chiqish</Link></li>
                </ul>
            </header>
            <main className='flex bg-slate-100 h-[100vh]'>
                <Aside menus={menus} />
                <section className='p-6'>
                    <ul className='flex flex-wrap gap-7'>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-500 text-2xl font-bold'>O'quvchilar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-blue-500 text-6xl font-bold'>{data?.length}</h5> <Image src={user} alt='students icon' height={65}/></div>
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
                                <h4 className='text-red-500 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-red-500 text-6xl font-bold'>0</h5> <Image src={block} alt='students icon' height={65} /></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-400 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-blue-400 text-6xl font-bold'>1</h5> <Image src={userBX} alt='students icon' height={65} /></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-gray-500 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-gray-500 text-6xl font-bold'>1</h5> <Image src={car} alt='students icon' height={65} /></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-800 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex items-center justify-between py-4 px-6"><h5 className='text-blue-800 text-6xl font-bold'>1</h5> <Image src={book} alt='students icon' height={65} /></div>
                        </li>
                    </ul>
                </section>
                {/* <Students data={data} onHide={() => setHolat(true)} /> */}
                {/* <UsersBoard /> */}
            </main >
            <Holat
                show={holat}
                onHide={() => setHolat(false)}
            />
        </>
    )
}

export default dashboard