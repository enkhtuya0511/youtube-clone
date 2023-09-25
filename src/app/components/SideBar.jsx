import React from 'react'
import Image from 'next/image';
import { SideBarData } from "./SideBarData";

export default function SideBar() {
    return (
        <div className='bg-[#212121] w-[14%] h-screen'>
            <ul className='flex flex-col'>
                {SideBarData.map((value, key) => (
                    <li key={key} className='flex justify-center items-center py-[20px] h-[50px] bg-[#212121] hover:bg-[#303030] cursor-pointer'>
                        <Image src={value.icon} width={30} height={30} className='basis-[30%] w-[30px] h-[30px]' alt='icon'/>
                        <div className='text-[#FFFFFF] basis-[70%]'>{value.title}</div>
                    </li>
                ))}
                <h3 className='text-[#AAAAAA] text-left py-[20px] pl-[20px]'>SUBSCRIPTIONS</h3>
                {SideBarData.map((value, key) => (
                    <li key={key} className='flex justify-center items-center py-[20px] h-[50px] bg-[#212121] hover:bg-[#303030] cursor-pointer'>
                        <Image src={value.avatar} width={30} height={30} className='basis-[30%] w-[30px] h-[30px]' alt='avatar'/>
                        <div className='text-[#FFFFFF] basis-[70%]'>{value.youtuber}</div>
                    </li>
                ))}
                <h3 className='text-[#AAAAAA] text-left py-[20px] pl-[20px]'>MORE FROM YOUTUBE</h3>
                {SideBarData.map((value, key) => (
                    <li key={key} className='flex justify-center items-center py-[20px] h-[50px] bg-[#212121] hover:bg-[#303030] cursor-pointer'>
                        <div className='text-[#FFFFFF] basis-[70%]'>{value.text}</div>
                    </li>
                ))}
            </ul>

        </div>
    )
}
