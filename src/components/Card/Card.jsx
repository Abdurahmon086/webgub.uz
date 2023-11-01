import Image from 'next/image'
import React from 'react'
import basket from '../../../public/icon/basket.svg'
import card_react from '../../../public/image/card_react.jpg'

function Card() {
    return (
        <div className='rounded-3xl bg-white'>
            <Image src={card_react} className='rounded-t-3xl w-full h-[316px]' />
            <div className="pt-[29px] px-[33px] pb-[38px]">
                <div className="flex justify-between">
                    <p className='text-[#4E596B] font-medium leading-9 text-sm'>5,957 Students</p>
                    <time className='text-[#4E596B] font-medium leading-9 text-sm'>01h 49m</time>
                </div>
                <h5 className='text-[#4E596B] mt-[21px] text-[25px] font-bold leading-9 max-sm:text-lg'>Vue.js form 0 to PRO course . Vue3 , Pinia , Design pattrens ...</h5>
                <div className="flex justify-between items-center mt-[33px]">
                    <span className='text-[#5E6775] font-bold leading-8 text-[22px] max-sm:text-base'>$1999.99</span>
                    <Image src={basket} className='w-[26px] h-[26px]' />
                </div>
            </div>
        </div>
    )
}

export default Card