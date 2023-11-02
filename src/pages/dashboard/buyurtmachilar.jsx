import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import check from '../../../public/icon/check.svg'
import edit from '../../../public/icon/edit.svg'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Layout from './layout'
import { useEffect, useState } from 'react'
import { getData } from '@/service/common'
import { headers } from '../../../next.config'
import { useFetch } from '@/hooks/useFetch'

function Customers() {
    const pathname = usePathname('/').split('/')[2]
    let { data, loading, error } = useFetch('https://api.webhub.uz/api/v1/student');
    if (loading) {
        return (<div>Loading ...</div>)
    }
    if (error) {
        console.log(error);
    }
    return (
        <Layout>
            <section className='p-6 flex flex-col gap-7 w-full'>
                <div className=" p-4 bg-white">
                    <h5 className='text-blue-950 text-3xl font-semibold'>{pathname}</h5>
                    <p className='text-blue-900'>Bosh sahifa / <span className='font-semibold'>{pathname}</span></p>
                </div>
                <div className="bg-white p-4">
                    <button className='bg-blue-500 p-2 rounded text-white mb-4'>Export to Excel</button>
                    <table className="border-collapse border  w-full">
                        <thead>
                            <tr className='flex bg-slate-200 ' >
                                <th className="border w-9  text-center">#</th>
                                <th className="border w-[30%]  text-center">F.I.SH</th>
                                <th className="border w-[15%] text-center">Telefon</th>
                                <th className="border w-[25%]  text-center">Kurs</th>
                                <th className="border w-[18%] text-center">Ro'yhatdan o'tgan vaqti</th>
                                <th className="border w-[7%] text-center">Holat</th>
                                <th className="border w-[8%] text-center">Tahrirlash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {typeof data == 'array' ? data?.map((item, i) => {
                                return (
                                    <tr className='flex' key={item._id}>
                                        <th className="border w-9 p-2 text-center">{i + 1}</th>
                                        <td className="border overflow-hidden w-[30%] p-2 text-center font-medium">{item.fullName}</td>
                                        <td className="border w-[15%] p-2 text-center font-medium">{item.phoneNumber}</td>
                                        <td className="border overflow-hidden w-[25%]  p-2 text-center font-medium">{item.courseId.description}</td>
                                        <td className="border w-[18%] p-2 text-center font-medium">{item.createdAt}</td>
                                        <td className="border w-[7%] p-2 text-center"> <div className='w-[34px] h-[34px] border-none bg-yellow-300 mx-auto rounded text-center' ><Image src={check} height={32} alt='check icon' /> </div> </td>
                                        <td className="border w-[8%]  p-2 text-center"> <Button className='w-[34px] h-[34px] border-none bg-yellow-300 mx-auto rounded text-center' variant="primary" onClick={onHide}> <Image src={edit} alt='edit icon' /> </Button> </td>
                                    </tr>
                                )
                            }) : ""
                            }
                        </tbody>
                    </table>

                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm mt-4" aria-label="Pagination">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        <a
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            1
                        </a>

                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </section >
        </Layout>
    )
}

export default Customers