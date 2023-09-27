import React from 'react'

const Filter = () => {
  return (
    <div className='w-screen h-[10%] bg-[#212121] fixed left-[240px] top-[60px] p-[10px] flex gap-[20px] pl-[20px]'>
      <button className='bg-[#FFFFFF] rounded-[32px] border-[1px] 
       p-[15px] flex items-center text-center text-[#030303]'>All</button>
      <button>Item</button>
      <button>Item</button>
      <button>Item</button>
      <button>Item</button>
    </div>
  )
}

export default Filter