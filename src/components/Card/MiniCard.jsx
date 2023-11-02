import React from 'react'
import software from '../../../public/icon/software.svg'
import Image from 'next/image'

function MiniCard({ title, courses, color }) {
    return (
        <div className='bg-white flex flex-col items-center justify-between py-[37px] px-[29px] rounded-[20px] min-h-[362px]'>
            <div className={`w-[90px] h-[90px] flex justify-center items-center bg-[${color}] rounded-[8px]`}><Image src={software} alt='Digtal Marketing icon' /></div>
            <h5 className='mt-[50px] text-[25px] text-[#324361] font-semibold text-center leading-[35px]'>{title}</h5>
            <p className='text-[#4F547B] font-medium mt-[40px]'>{courses} Courses</p>
        </div>
    )
}

export default MiniCard