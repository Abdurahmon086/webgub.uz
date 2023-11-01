import React from 'react'

function Title({ children,color }) {
    return (
        <h2 className={`mb-[29px] text-${color} text-center text-[35px] md:text-[45px] leading-[50px] font-bold`} style={{ fontFamily: 'Rowdies' }}>
            {children}
        </h2>
    )
}

export default Title