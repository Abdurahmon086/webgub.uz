import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Layout from './layout'

function Settings() {
    const pathname = usePathname('/').split('/')[2]
    // const [data, setData] = useState(null)

    // useEffect(() => {
    //     fetch("https://api.webhub.uz/api/v1/student?id=6539810923918b14227ca67d",
    //         {
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzk4MTA5MjM5MThiMTQyMjdjYTY3ZCIsImlhdCI6MTY5ODg4MjMyOH0.Ws9jkyJAdbGDxlk36qwcr8ITALN9RsEorI9EpPtzIQU',
    //                 'Host': 'api.producthunt.com'
    //             },
    //         })
    //         .then(res => res.json()).then(data => console.log(data))
    //         .catch(function (res) { console.log(res) })
    // }, []);

    return (
        <Layout>
            <section className='p-6 w-full flex flex-col gap-7'>
                <div className=" p-4 bg-white">
                    <h5 className='text-blue-950 text-3xl font-semibold'>{pathname}</h5>
                    <p className='text-blue-900'>Bosh sahifa / <span className='font-semibold'>{pathname}</span></p>
                </div>
                <div className="bg-white p-4">
                    <form className='flex flex-col gap-3 mb-10'>
                        <label htmlFor="fullName" className='text-blue-950 text-xl font-semibold'>F.I.SH</label>
                        <input className='py-2 px-3 bg-slate-200 rounded border' type="text" name="fullName" id="fullName" placeholder='ALi'/>
                        <label htmlFor="nomi" className='text-blue-950 text-xl font-semibold'>Foydalanuvchi nomi</label>
                        <input className='py-2 px-3 bg-slate-200 rounded border' type="text" name="nomi" id="nomi" placeholder="admin"/>
                        <label htmlFor="password" className='text-blue-950 text-xl font-semibold'>Foydalanuvchi paroli</label>
                        <input className='py-2 px-3 bg-slate-200 rounded border' type="password" name="password" id="password" placeholder='****'/>
                        <div className="">
                            <input type="checkbox" /> <label htmlFor="check">Parolni ko'rish</label>
                        </div>
                    </form>
                    <div className="pt-4 border-t-2">
                        <button className='bg-blue-500 p-2 rounded text-white mb-4'>Tahrirlash</button>
                    </div>
                </div>
            </section >
        </Layout>
    )
}

export default Settings