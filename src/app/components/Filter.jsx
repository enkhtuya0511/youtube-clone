import React from 'react'
import { useState } from 'react'

const Filter = () => {
  const text = [
    { 'name': 'All' },
    { 'name': 'SBS TV동물농장x애니멀봐' },
    { 'name': 'BBC Earth' },
    { 'name': 'BBC' },
    { 'name': 'TED-ED' },
  ]
  const [active, setActive] = useState(true);
  return (
    <div className='w-full h-[5%] bg-[#212121] p-[10px] flex gap-[15px] pl-[20px] overflow-auto hover:overflow-scroll"'>
      {
        text.map((val, idx) => {
          return (
            <div style={{
              display: 'flex', alignItems: 'center', borderRadius: '32px', border: '1px', padding: '8px', textAlign: 'center',
              backgroundColor: active ? '#000000' : '#FFFFFF', color: active ? '#FFFFFF' : '#000000' ,
            }} onClick={() => {setActive(!active)}}>{val.name}</div>
          )
        })
      }
    </div>
  )
}

export default Filter