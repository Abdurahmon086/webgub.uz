import Image from 'next/image'
import Link from 'next/link'
import tel from '../../../public/icon/tel.svg'
import email from '../../../public/icon/email.svg'
import gps from '../../../public/icon/gps.svg'
import facebook from '../../../public/icon/facebook.svg'
import instagram from '../../../public/icon/instagram.svg'
import behance from '../../../public/icon/behance.svg'
import dribble from '../../../public/icon/dribble.svg'
import twitter from '../../../public/icon/twitter.svg'
import logo_footer from '../../../public/icon/logo_footer.svg'


function Footer() {
    return (
        <div className='container mx-auto'>
            <ul className='flex justify-between gap-8  pt-[136px] pb-[89px] max-2xl:flex-wrap'>
                <li >
                    <Link href='/' > <Image src={logo_footer} alt='webhub.uz logo' /></Link>
                    <p className='max-w-[477px] text-white mt-[95px] max-sm:mt-[30px]'>Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </li>
                <li className='w-[205px]'>
                    <h5 className='text-white font-bold font-["Rowdies"] leading-[24px] text-[25px] '>Quick Links</h5>
                    <ul className='text-white font-medium grid grid-cols-2 gap-x-[50px] gap-y-[22px] mt-[85px] max-sm:mt-[30px]'>
                        <li><Link href='#'>About</Link></li>
                        <li><Link href='#'>Blog</Link></li>
                        <li><Link href='#'>Course</Link></li>
                        <li><Link href='#'>Contact</Link></li>
                    </ul>
                </li>
                <li >
                    <h5 className='text-white font-bold font-["Rowdies"] leading-[24px] text-[25px]'>Contact us</h5>
                    <ul className='grid grid-cols-2 gap-[39px] mt-[76px] max-sm:grid-cols-1 max-sm:mt-[30px]' >
                        <li className='flex gap-6 items-center text-white font-medium'><Image src={tel} /> +998 99 649 98 07</li>
                        <li className='flex gap-6 items-center text-white font-medium'><Image src={gps} /> Toshkent , Chilonzor A9</li>
                        <li className='flex gap-6 items-center text-white font-medium'><Image src={email} /> webhub@example.com</li>
                    </ul>
                </li>
            </ul>
            <div className="flex justify-between pt-[33px] gap-6 pb-[40px]  border-t-[1px] border-white max-sm:flex-wrap ">
                <p className='text-white'>Copyright 2023 | Mystery</p>
                <ul className='flex gap-8 items-center'>
                    <li><Link href='#'><Image src={facebook} /></Link></li>
                    <li><Link href='#'><Image src={twitter} /></Link></li>
                    <li><Link href='#'><Image src={instagram} /></Link></li>
                    <li><Link href='#'><Image src={behance} /></Link></li>
                    <li><Link href='#'><Image src={dribble} /></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer