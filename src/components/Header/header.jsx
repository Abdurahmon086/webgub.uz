import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../../public/icon/logo.svg'
import main from "../../styles/main.module.scss"
import menu from "../../../public/icon/menu.svg";
function Header() {
    let [active, setActive] = useState(false);

    return (
        <nav className={`bg-white ${main.header}`}>
            <div className='container mx-auto flex justify-between items-center pt-6 pb-9'>
                <Image src={logo} width={216} height={60} alt='webgub.uz logo' />
                <div className={`${main.navbar_menu} flex items-center ${active ? main.active : main.deactive}`}>
                    <ul className='flex gap-[72px] '>
                        <li><Link href="/" className='text-[20px] font-medium text-[#1B2336]'>Courses</Link></li>
                        <li><Link href="/" className='text-[20px] font-medium text-[#1B2336]' >Services</Link></li>
                    </ul>
                    <Link href={'/login'} className='ml-[103px] md:ml-[143px] lg:ml-[243px] py-2 px-14 btn-bg text-[#FFF] text-[20px] font-medium '>Join</Link>
                </div>
                <button className={`${main.toggle}`} onClick={() => {
                    setActive(!active);
                }} >  <Image src={menu} width={30} height={30} alt='webgub.uz logo' /></button>
            </div>
        </nav>
    )
}

export default Header