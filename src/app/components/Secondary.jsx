import React, { useState } from 'react'
import Image from "next/image";
import { SecondaryData } from './SecondaryData';
import Button from './Button';
import { useRouter } from 'next/navigation'

const Secondary = () => {
    const router = useRouter();
    const handleClick = (videoId) => {
        router.push('watch?v=' + videoId)
    }
    return (
        <div className="w-[90%] flex flex-col p-[5px] text-[#FFFFFF] overflow-auto">
            <div className='flex gap-[10px] text-[14px] p-[10px]'>
                <button className='bg-[#FFFFFF] rounded-[32px] border-[1px] 
                p-[10px] flex items-center text-center text-[#030303]'>All</button>
                <Button text='From SBS TV동물농장x애니멀봐' />
            </div>
            {
                SecondaryData.map((value, key) => (
                    <div className="flex justify-center items-center p-[5px] gap-[5px]"
                        onClick={() => handleClick(value.videoId)}>
                        <div>

                            <Image src={value.videoThumbnail}
                                width={200} height={120} className='max-w-none' alt='video' />
                        </div>
                        <div className="w-[50%] p-[5px] flex flex-col justify-center gap-[5px] text-[10px]">
                            <h1 className="text-[13px]">{value.title}</h1>
                            <p className='text-[#AAAAAA]'>{value['channel-name']}</p>
                            <p className='text-[#AAAAAA]'>{value.views}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Secondary