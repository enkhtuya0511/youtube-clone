import React from 'react'
import Image from 'next/image';
import { SideBarData1, SideBarData2, SideBarData3 } from "./SideBarData";

export default function SideBar() {
    return (
        <div className='bg-[#212121] w-[20%] h-screen overflow-x-hidden overflow-y-scroll pt-[10px]'>
            <ul className='flex flex-col bg-[#212121] '>
                {SideBarData1.map((value, key) => (
                    <li key={key} className='flex justify-center items-center py-[20px] h-[50px]  hover:bg-[#303030] cursor-pointer'>
                        <Image src={value.icon} width={30} height={30} className='basis-[30%] w-[30px] h-[30px]' alt='icon'/>
                        <div className='text-[#FFFFFF] basis-[70%]'>{value.title}</div>
                    </li>
                ))}
                <h3 className='text-[#AAAAAA] text-left py-[20px] px-[20px]'>SUBSCRIPTIONS</h3>
                {SideBarData2.map((value, key) => (
                    <li key={key} className='flex justify-center items-center py-[20px] h-[50px]  hover:bg-[#303030] cursor-pointer'>
                        <Image src={value.avatar} width={30} height={30} className='basis-[30%] w-[30px] h-[30px]' alt='avatar'/>
                        <div className='text-[#FFFFFF] basis-[70%]'>{value.youtuber}</div>
                    </li>
                ))}
                <h3 className=' text-[#AAAAAA] text-left py-[20px] px-[20px]'>MORE FROM YOUTUBE</h3>
                {SideBarData3.map((value, key) => (
                    <li key={key} className='flex justify-center items-center py-[20px] h-[50px]  hover:bg-[#303030] cursor-pointer'>
                        <Image src={value.icon} width={30} height={30} className='basis-[30%] w-[30px] h-[30px]' alt='icon'/>
                        <div className='text-[#FFFFFF] basis-[70%]'>{value.title}</div>
                    </li>
                ))}
                <div className='flex flex-wrap p-[20px] gap-x-[10px] text-[#AAAAAA] no-underline'>
                    <a href="#">About</a>
                    <a href="#">Press</a>
                    <a href="#">Copyright</a>
                    <a href="#">Contact us</a>
                    <a href="#">Creators</a>
                    <a href="#">Advertise</a>
                    <a href="#">Developers</a>
                </div>

                <div className='flex flex-wrap px-[20px] py-[10px] gap-x-[10px] text-[#AAAAAA] no-underline'>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Policy & Safety</a>
                    <a href="#">How Youtube works</a>
                    <a href="#">Test new features</a>
                </div>

                <div className='flex flex-wrap pt-[10px] pb-[60px] px-[20px] text-[#AAAAAA] no-underline'>
                    <bold>© 2021 Google LLC</bold>
                </div>
            </ul>
        </div>
    )
}
