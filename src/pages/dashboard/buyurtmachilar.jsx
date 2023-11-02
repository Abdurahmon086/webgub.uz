import { usePathname } from 'next/navigation'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

function Customers() {
    const pathname = usePathname('/').split('/')[2]

    return (
        <section className='p-6 w-full flex flex-col gap-7'>
            <div className=" p-4 bg-white flex justify-between items-center">
                <div className="">
                    <h5 className='text-blue-950 text-3xl font-semibold'>{pathname}</h5>
                    <p className='text-blue-900'>Bosh sahifa / <span className='font-semibold'>{pathname}</span></p>
                </div>
            </div>
            <div className="bg-white p-4">
                <button className='bg-blue-500 p-2 rounded text-white mb-4'>Export to Excel</button>
                <table className="border-collapse border w-full">
                    <thead>
                        <tr className='flex bg-slate-200 ' >
                            <th className="border w-9  text-center">#</th>
                            <th className="border w-[30%]  text-center">F.I.SH</th>
                            <th className="border w-[25%] text-center">Telefon</th>
                            <th className="border w-[25%]  text-center">Xizmat</th>
                            <th className="border w-[20%] text-center">Ro'yhatdan o'tgan vaqti</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='flex'>
                            <th className="border w-9 p-2 text-center">1</th>
                            <td className="border overflow-hidden w-[30%] p-2 text-center font-medium">Eshmatov Toshmat</td>
                            <td className="border w-[25%] p-2 text-center font-medium"> +998995556677</td>
                            <td className="border w-[25%] p-2 text-center font-medium">Web sayit yaratish</td>
                            <td className="border w-[20%] p-2 text-center font-medium">26.10.2023 02:22</td>
                        </tr>
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
    )
}

export default Customers