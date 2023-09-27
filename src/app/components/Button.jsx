import React from 'react'

const Button = ({text}) => {
    return (
        <button className='bg-[#303030] rounded-[32px] border-[1px] 
       p-[15px] flex items-center text-center text-[#FFFFFF]'>{text}</button>
    )
}

export default Button