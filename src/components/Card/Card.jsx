import Image from 'next/image'
import React, { useState } from 'react'
import basket from '../../../public/icon/basket.svg'

function Card({ title, description, image, students ,handleShow}) {


    // let createRequest = (url) => {
    //     const [value, setValues] = React.useState({
    //         category_name: ''
    //     });
    //     const { REACT_APP_BASE_URL } = process.env;
    //     const locolToken = localStorage.getItem('token')
    //     const change = (e) => {
    //         setValues((prevstate) => ({
    //             ...prevstate,
    //             [e.target.name]: e.target.value,
    //         }));
    //     };
    //     const setData = (e) => {
    //         e.preventDefault();

    //         let formdata = new FormData();
    //         for (const event in value) {
    //             formdata.append(event, value[event]);
    //         }
    //         const option = {
    //             method: "POST",
    //             headers: {
    //                 Authorization:
    //                     "Bearer " +
    //                     locolToken
    //             },
    //             body: formdata,
    //             redirect: "follow",
    //         };


    //         fetch(`https://api.webhub.uz/api/v1/${url}`, option)
    //             .then((res) => res.json())
    //             .then((data) => console.log(data))
    //             .catch((err) => console.log(err.message));
    //     };
    // }
    return (
        <div className='rounded-3xl bg-white'>
            <img src={image} className='rounded-t-3xl w-full h-[316px]' alt='image' />
            <div className="pt-[29px] px-[33px] pb-[38px]">
                <div className="flex justify-between">
                    <p className='text-[#4E596B] font-medium leading-9 text-sm'>{students} Students</p>
                    <time className='text-[#4E596B] font-medium leading-9 text-sm'>01h 49m</time>
                </div>
                <h5 className='text-[#4E596B] mt-[21px] text-[25px] font-bold leading-9 max-sm:text-lg'>{title}</h5>
                <div className="flex justify-between items-center mt-[33px]">
                    <span className='text-[#5E6775] font-bold leading-8 text-[22px] max-sm:text-base'>$1999.99</span>
                    <span onClick={handleShow}><Image src={basket} className='w-[26px] h-[26px]' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card