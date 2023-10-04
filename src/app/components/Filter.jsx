import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Filter = () => {
  const text = [
    {'name': 'All'},
    { 'name': 'SBS TV동물농장x애니멀봐' },
    { 'name': 'BBC Earth' },
    { 'name': 'BBC' },
    { 'name': 'TED-ED' },
  ]
  const [active, setActive] = useState(false);
  return (
    <div className='w-full h-[5%] bg-[#212121] p-[10px] flex gap-[15px] pl-[20px] overflow-auto hover:overflow-scroll"'>
      {
        text.map((val, idx) => {
          return (
            idx === active ? <button className='bg-[#FFFFFF] rounded-[32px] border-[1px] p-[15px] flex items-center text-center text-[#030303]' onClick={() => setActive(true)}>{val.name}</button>
              : <button className='bg-[#303030] rounded-[32px] border-[1px] p-[8px] flex items-center text-center text-[#FFFFFF]' onClick={() => setActive(false)}>{val.name}</button>
          )
        })
      }
    </div>
  )
}

export default Filter