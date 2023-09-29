import React from 'react'
import Image from 'next/image'
import { ThumbnailData } from './ThumbnailData'
import Link from 'next/link'

const Thumbnail = () => {
  return (
    <div className='min-w-screen h-[100%] flex flex-wrap gap-[20px] bg-[#000000] p-[40px]'>
      {
        ThumbnailData.map((value, key) => (
          <div key={key} className='bg-[#FFFFFF] h-[240px] w-[270px]'>
            <Link href='/video'>
              <Image src={value.image} width={270} height={150} />
              <div className='w-[100%] flex justify-center items-center p-[10px] gap-[10px] bg-[#000000]'>
                <div className='w-[20%] flex '>
                  <Image src={value.avatar} width={36} height={36} />
                </div>
                <div className='flex flex-col text-[#AAAAAA] w-[80%]'>
                  <div>
                    <h2 className='text-[#FFFFFF] text-[14px]'>{value.title}</h2>
                  </div>
                  <div className='text-[13px]'>{value.youtuber}</div>
                  <div className='text-[13px]'>{value.time}</div>
                </div>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Thumbnail