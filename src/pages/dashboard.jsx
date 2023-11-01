import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function dashboard() {
    return (
        <>
            <header className='top-0 left-0 w-full bg-white flex justify-between px-3 py-4 shadow-lg sticky z-40'>
                <h2>sad</h2>
                <div className="flex">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <h4>Alisher Valiyev</h4>
                    <img src="" alt="" />
                </div>
            </header>
            <main className='flex bg-slate-100 h-[100vh]'>
                <aside className='bg-white w-[400px] py-4 px-3'>
                    <ul className='flex flex-col gap-1'>
                        <li className='flex gap-3 bg-blue-100 rounded py-1 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='#'> <span className='w-[24px] h-[24px] bg-slate-500'></span> <p className='font-bold text-xl'>Dashboard</p></Link></li>
                        <li className='flex gap-3 bg-blue-100 rounded py-1 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='#'> <span className='w-[24px] h-[24px] bg-slate-500'></span> <p className='font-bold text-xl'>O'quvchilar</p></Link></li>
                        <li className='flex gap-3 bg-blue-100 rounded py-1 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='#'> <span className='w-[24px] h-[24px] bg-slate-500'></span> <p className='font-bold text-xl'>Kurslar</p></Link></li>
                        <li className='flex gap-3 bg-blue-100 rounded py-1 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='#'> <span className='w-[24px] h-[24px] bg-slate-500'></span> <p className='font-bold text-xl'>Buyurtmachilar</p></Link></li>
                        <li className='flex gap-3 bg-blue-100 rounded py-1 px-2 active:bg-blue-500 active:text-white transition-all'><Link href='#'> <span className='w-[24px] h-[24px] bg-slate-500'></span> <p className='font-bold text-xl'>Xizmatlar</p></Link></li>
                    </ul>
                </aside>
                {/* <section className='p-6'>
                    <ul className='flex flex-wrap gap-7'>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-800 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex justify-between py-4 px-6"><h5 className='text-blue-800 text-6xl font-bold'>1</h5> <span></span></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-800 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex justify-between py-4 px-6"><h5 className='text-blue-800 text-6xl font-bold'>1</h5> <span></span></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-800 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex justify-between py-4 px-6"><h5 className='text-blue-800 text-6xl font-bold'>1</h5> <span></span></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-800 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex justify-between py-4 px-6"><h5 className='text-blue-800 text-6xl font-bold'>1</h5> <span></span></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-800 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex justify-between py-4 px-6"><h5 className='text-blue-800 text-6xl font-bold'>1</h5> <span></span></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-800 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex justify-between py-4 px-6"><h5 className='text-blue-800 text-6xl font-bold'>1</h5> <span></span></div>
                        </li>
                        <li className='bg-white w-80 rounded-sm shadow-xl'>
                            <div className="p-4 border-b-[1px]">
                                <h4 className='text-blue-800 text-2xl font-bold'>Uquvchilar</h4>
                            </div>
                            <div className="flex justify-between py-4 px-6"><h5 className='text-blue-800 text-6xl font-bold'>1</h5> <span></span></div>
                        </li>
                    </ul>
                </section> */}
                <section className='p-6'>

                </section>
            </main>
        </>
    )
}

export default dashboard