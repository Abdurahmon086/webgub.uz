import React from 'react'

function Text({ children, styles, color }) {
    return (
        <p className={`text-[20px] md:text-[25px] leading-[35px] text-center text-${color} ${styles}`} style={{ fontFamily: 'Saira' }}>{children}</p>
    )
}

export default Text