import edit from '../../../public/icon/edit.svg'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Services({ data, onHide }) {
    const pathname = usePathname('/').split('/')[2]
    console.log(data)
    return (
        <section className='p-6 w-full flex flex-col gap-7'>
            <div className=" p-4 bg-white flex justify-between items-center">
                <div className="">
                    <h5 className='text-blue-950 text-3xl font-semibold'>{pathname}</h5>
                    <p className='text-blue-900'>Bosh sahifa / <span className='font-semibold'>{pathname}</span></p>
                </div>
                <Button className='bg-blue-500 w-10 h-10 rounded text-white text-xl' variant="primary" onClick={onHide}>+</Button>
            </div>
            <div className="bg-white p-4">
                <table className="border-collapse border  w-full">
                    <thead>
                        <tr className='flex bg-slate-200 ' >
                            <th className="border w-9  text-center">#</th>
                            <th className="border w-[30%]  text-center">Kurs id</th>
                            <th className="border w-[25%] text-center">Kurs nomi</th>
                            <th className="border w-[15%]  text-center">Buyurtmachilar soni</th>
                            <th className="border w-[18%] text-center">Yaratilgan vaqti</th>
                            <th className="border w-[10%] text-center">Tahrirlash</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length > 0 && data?.map((item, i) => {
                            return (
                                <tr className='flex' key={item._id}>
                                    <th className="border w-9 p-2 text-center">{i + 1}</th>
                                    <td className="border overflow-hidden w-[30%] p-2 text-center font-medium">{item.id}</td>
                                    <td className="border w-[25%] p-2 text-center font-medium">{item.title}</td>
                                    <td className="border w-[15%] p-2 text-center font-medium">{item.users.length}</td>
                                    <td className="border w-[18%] p-2 text-center font-medium">{item.createdAt}</td>
                                    <td className="border w-[10%]  p-2 text-center"> <Button className='w-[34px] h-[34px] border-none bg-yellow-300 mx-auto rounded text-center' variant="primary" onClick={onHide}> <Image src={edit} alt='edit icon' /> </Button> </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section >
    )
}

export default Services