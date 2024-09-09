"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ReactPlayer from "react-player/youtube";
import Videos from "../components/Videos";
import Comments from "../components/Comments";
import VideoInfo from "../components/VideoInfo";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState("");

  const searchParams = useSearchParams();
  const search = searchParams.get("v");
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const fetchData = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${search}&key=${apiKey}`
    ).then((res) => res.json());
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    setIsClient(true);
    fetchData();
  }, [search]);
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24 bg-[#121212]">
      <div className="flex justify-between items-center fixed top-[0] py-[20px] px-[30px] bg-[#212121] w-full h-[60px]">
        <div className="flex justify-center items-center">
          <a href="/">
            <Image src="/youtube-logo.svg" alt="Youtube Logo" width={90} height={20} />
          </a>
        </div>
        <button>
          <Image src="/73.png" alt="avatar" width={30} height={30} />
        </button>
      </div>{" "}
      {loading ? (
        <div className="bg-[#FFFFFF] text-[#000000] w-[100%] h-[100%]">Loading...</div>
      ) : (
        <div className="flex flex-row min-w-screen p-[20px]">
          <div className="flex flex-col items-center p-[10px] w-[70%]">
            {isClient && (
              <ReactPlayer
                url={"https://www.youtube.com/watch?v=" + search}
                controls
                playing={true}
                loop
                muted={true}
                width="70%"
                height={400}
              />
            )}

            <div className="flex flex-col w-[70%] p-[5px] text-[#FFFFFF]">
              <VideoInfo data={data} />
              <Comments />
            </div>
          </div>
          <div className="w-[30%] flex flex-col p-[5px] text-[#FFFFFF] overflow-auto">
            <Videos videoId={search} />
          </div>
        </div>
      )}
    </main>
  );
}
