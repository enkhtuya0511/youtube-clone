"use client";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";
import { timeSince } from "@/utills/timeConverter";
import { SecondaryData } from "./SecondaryData";

const Primary = ({ isClient, search, loading, data }) => {

    return (
        <div className="flex flex-col justify-center items-center p-[10px] ">
            {isClient && (
                <ReactPlayer
                    url={"https://www.youtube.com/watch?v=" + search}
                    controls
                    playing={true}
                    loop
                    muted={true}
                    width='60%'
                    height={400}
                />
            )}

            { loading && <div className="bg-[#FFFFFF] text-[#000000]">Loading...</div>}
            <div className="text-[#FFFFFF] w-[60%]">
                <h1 className="flex pl-[5px] pt-[15px] text-[18px]">
                    {data.items?.[0].snippet?.title}
                </h1>
                <div className="flex justify-between items-center p-[5px]">
                    <p className="text-[14px]">{data.items?.[0].statistics.viewCount} views  {timeSince(new Date(data.items?.[0].snippet?.publishedAt))}</p>
                    <div className="flex gap-[8px] text-[14px]">
                        <div className="flex justify-center items-center gap-[5px]">
                            <BiLike />
                            <h1>{data.items?.[0].statistics.likeCount}</h1>
                        </div>
                        <div className="flex justify-center items-center gap-[5px]">
                            <BiDislike />
                        </div>
                        <div className="flex justify-center items-center gap-[5px]">
                            <PiShareFat />
                            <h1>SHARE</h1>
                        </div>
                        <div className="flex justify-center items-center gap-[5px]">
                            <Image src="/save.svg" width={20} height={20} />
                            <h1>SAVE</h1>
                        </div>
                        <div className="flex justify-center items-center gap-[5px]">
                            <BsThreeDots />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-[60%] p-[5px] text-[#FFFFFF] pt-[15px]">
                <div className="flex justify-between p-[5px]">
                    <div className="flex gap-[20px]">
                        <Image src='/avatar1.png' width={45} height={45} className="rounded-[50%]" alt="avatar" />
                        <div className="flex flex-col justify-end">
                            <h1 className="text-[15px]">{data.items?.[0].snippet?.channelTitle}</h1>
                            <p className="text-[#AAAAAA] text-[13px]">4.87M subscribers</p>
                        </div>
                    </div>
                    <button className="bg-[#CC0000] h-[35px] w-[110px] p-[5px]">Subscribe</button>
                </div>
                <div className="pl-[65px] pt-[10px]">
                    <p>{data.items?.[0].snippet?.description}</p>
                </div>
                <div className="flex gap-[25px] pt-[25px]">
                    <h1>{data.items?.[0].statistics.commentCount} Comments</h1>
                    <div className="flex">
                        <Image src='/sort.svg' width={24} height={24} alt="icon" />
                        <h1>SORT BY</h1>
                    </div>
                </div>
                <div className="flex pt-[20px] gap-[15px]">
                    <Image src='/profile.svg' width={40} height={40} alt="profile" />
                    <input type="text" placeholder="Add a public comment..." className="border-0 bg-[#121212]" />
                </div>
            </div>
        </div>
    )
}

export default Primary