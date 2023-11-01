import React from 'react'
import software from '../../../public/icon/software.svg'
import Image from 'next/image'

function MiniCard() {
    return (
        <div className='bg-white flex flex-col items-center py-[37px] px-[29px] w-[253px] rounded-[20px]'>
            <div className="w-[90px] h-[90px] flex justify-center items-center bg-[#DF385B] rounded-[8px]"><Image src={software} alt='Digtal Marketing icon' /></div>
            <h5 className='mt-[50px] text-[25px] text-[#324361] font-semibold text-center leading-[35px]'>Digtal Marketing</h5>
            <p className='text-[#4F547B] font-medium mt-[40px]'>25 Courses</p>
        </div>
    )
}

export default MiniCard