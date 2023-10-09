import React from 'react'
import Image from 'next/image'
import { videoData } from './videoData'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Thumbnail = ({video}) => {
  const router = useRouter()
  const handleClick = (videoId) => {
    router.push('watch?v=' + videoId)
  }

  return (
    <div className='min-w-screen h-[100%] flex flex-wrap gap-[20px] bg-[#000000] p-[40px]'>
      {
        video.map((value, key) => (
          <div index={key} className='bg-[#FFFFFF] h-[240px] w-[270px]' onClick={() => handleClick(value.videoId)}>
            <Image src={value.videoThumbnail} width={270} height={150} alt='video' />
            <div className='w-[100%] flex justify-center items-center p-[10px] gap-[10px] bg-[#000000]'>
              <div className='w-[20%] flex '>
                <Image src={value.videoProfile} width={36} height={36} alt='avatar' className='rounded-[50%]' />
              </div>
              <div className='flex flex-col text-[#AAAAAA] w-[80%]'>
                <div>
                  <h2 className='text-[#FFFFFF] text-[14px]'>{value.title}</h2>
                </div>
                <div className='text-[13px]'>{value['channel-name']}</div>
                <div className='text-[13px]'>{value.views}</div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Thumbnail