import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/icon/logo.svg'

function Header() {
    return (
        <div className='container mx-auto flex justify-between items-center pt-6 pb-9  '>
            <Image src={logo} width={216} height={60} alt='webgub.uz logo' />
            <nav className='flex items-center '>
                <ul className='flex gap-[72px] '>
                    <li><Link href="/" className='text-[20px] font-medium text-[#1B2336]'>Courses</Link></li>
                    <li><Link href="/" className='text-[20px] font-medium text-[#1B2336]' >Services</Link></li>
                </ul>
                <button className='ml-[243px] py-2 px-14 btn-bg text-[#FFF] text-[20px] font-medium '>Join</button>
            </nav>
        </div>
    )
}

export default Header