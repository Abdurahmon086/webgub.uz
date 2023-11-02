import Link from 'next/link'
import React from 'react'
import car from "../../../public/icon/bxs-car.svg"
import user from "../../../public/icon/bxs-user.svg"
import userBadge from "../../../public/icon/bxs-user-badge.svg"
import home from "../../../public/icon/bx-home.svg"
import book from "../../../public/icon/bx-book-bookmark.svg"
import Image from 'next/image'

function Aside({ menus }) {
    return (
        <aside style={(menus == true ? { display: "none" } : { display: 'block' })} className='bg-white min-w-[300px] py-4 px-3 shadow-lg'>
            <ul className='flex flex-col gap-1'>
                <li className='flex gap-3 bg-blue-100 rounded py-3 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='/dashboard' className='flex gap-2 items-center'><Image src={home} className='w-[24px] h-[24px]'/> <p className='font-bold text-xl'>Dashboard</p></Link></li>
                <li className='flex gap-3 bg-blue-100 rounded py-3 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='/dashboard/students' className='flex gap-2 items-center'><Image src={user} className='w-[24px] h-[24px]'/> <p className='font-bold text-xl'>O'quvchilar</p></Link></li>
                <li className='flex gap-3 bg-blue-100 rounded py-3 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='/dashboard/kurslar' className='flex gap-2 items-center'><Image src={book} className='w-[24px] h-[24px]'/> <p className='font-bold text-xl'>Kurslar</p></Link></li>
                <li className='flex gap-3 bg-blue-100 rounded py-3 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='/dashboard/buyurtmachilar' className='flex gap-2 items-center'><Image src={userBadge} className='w-[24px] h-[24px]'/> <p className='font-bold text-xl'>Buyurtmachilar</p></Link></li>
                <li className='flex gap-3 bg-blue-100 rounded py-3 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='/dashboard/xizmatlar' className='flex gap-2 items-center'> <Image src={car} className='w-[24px] h-[24px]'/> <p className=' font-bold text-xl'>Xizmatlar</p></Link></li>
        </ul>
        </aside >
    )
}

export default Aside