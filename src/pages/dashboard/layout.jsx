import Aside from "@/components/Aside/aside";
import Image from "next/image";
import logo from '../../../public/icon/logo.svg'
import menu from '../../../public/image/menu.png'
import user from '../../../public/icon/user.svg'
import Link from "next/link";
import settings from '../../../public/image/cog.png'
import leftArrow from '../../../public/icon/left_arrow.svg'
import { useEffect, useState } from "react";
export default function Layout({ Component, pageProps, children }) {
    let [active, setActive] = useState(false);
    let [menus, setMenus] = useState(false);
    let [admin, setAdmin] = useState({});
    let logout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
    }
    useEffect(() => {
        let admin = localStorage.getItem('admin');
        console.log(JSON.parse(admin));
        setAdmin(JSON.parse(admin))
    }, [])
    return (
        <>
            <header className='top-0 left-0 w-full bg-white flex items-center justify-between px-3 py-4 shadow-lg sticky z-40 '>
                <a href='/dashboard'><Image height={52} src={logo} alt='webhup logo' /></a>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src={menu} alt='menu icon' width={35} onClick={() => setMenus(!menus)} />
                    <Image src={user} alt='user icon' width={35} onClick={() => setActive(!active)} />
                    <h4 className='font-bold text-violet-950 text-xl' onClick={() => setActive(!active)}> {admin?.fullName || "Bobirjon Yo'ldoshev"}</h4>
                </div>
                <ul style={active ? { display: 'flex' } : { display: 'none' }} className='flex flex-col bg-white absolute z-50 rounded shadow-md w-64 right-2 top-[80px]'>
                    <li> <Link href='/dashboard/sozlamalar' className='p-2 flex gap-2 font-medium text-blue-950 text-lg'><Image src={settings} alt='settings icon' width={24} height={18} /> Sozlamalar</Link></li>
                    <li>  <Link href='/login' className='p-2 flex gap-2 font-medium text-blue-950 text-lg'onClick={logout} ><Image src={leftArrow} alt='left arrow icon' /> Chiqish</Link></li>
                </ul>
            </header >
            <main className='flex bg-slate-100 h-[100vh]'>
                <Aside menus={menus} />{children}
            </main>
        </>
    );
}
