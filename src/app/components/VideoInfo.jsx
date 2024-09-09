import Image from "next/image";
import { useState } from "react";
import { timeSince, abbreviateNumber } from "@/utills/timeConverter";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const VideoInfo = ({ data }) => {
  const [sub, setSub] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        <h1 className="flex pl-[5px] pt-[15px] text-[18px]">{data.items?.[0].snippet?.title}</h1>
        <div className="flex justify-between items-center p-[5px]">
          <p className="text-[14px]">
            {abbreviateNumber(data.items?.[0].statistics.viewCount)} views {timeSince(new Date(data.items?.[0].snippet?.publishedAt))}
          </p>

          <div className="flex gap-[8px] text-[14px]">
            <div className="flex justify-center items-center gap-[5px]">
              <BiLike />
              <h1>{data.items?.[0].statistics.likeCount}</h1>
            </div>
            <div className="flex justify-center items-center gap-[5px]">
              <BiDislike />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-[5px] pt-[15px]">
        <div className="flex gap-[20px]">
          <Image src="/avatar1.png" width={45} height={45} className="rounded-[50%]" alt="avatar" />
          <div className="flex flex-col justify-end">
            <a href="/pages">
              <h1 className="text-[15px]">{data.items?.[0].snippet?.channelTitle}</h1>
            </a>

            <p className="text-[#AAAAAA] text-[13px]">4.87M subscribers</p>
          </div>
        </div>
        <button onClick={() => setSub(!sub)} className="bg-[#CC0000] h-[35px] w-[110px] p-[5px]">
          {sub ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className="pl-[65px] pt-[10px]">
        <p className={show ? "line-clamp-3" : "line-clamp-none"}>{data.items?.[0].snippet?.description}</p>
        <div onClick={() => setShow(!show)} className="text-[#FFFFFF] basis-[70%] font-bold">
          {show ? "...more" : "Show less"}
        </div>
      </div>
    </>
  );
};

export default VideoInfo;
