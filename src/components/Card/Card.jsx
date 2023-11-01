import Image from 'next/image'
import React from 'react'
import basket from '../../../public/icon/basket.svg'
import card_react from '../../../public/image/card_react.jpg'

function Card() {
    return (
        <div className='rounded-3xl bg-white'>
            <Image src={card_react} className='rounded-t-3xl h-[316px]' />
            <div className="flex justify-between">
                <p>5,957 Students</p>
                <time>01h 49m</time>
            </div>
            <h5>Vue.js form 0 to PRO course . Vue3 , Pinia , Design pattrens ...</h5>
            <div className="flex">
                <span>$1999.99</span>
                <Image src={basket} className='w-[26px] h-[26px]' />
            </div>
        </div>
    )
}

export default Card