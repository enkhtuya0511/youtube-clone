import Image from "next/image";
import { useRouter } from "next/navigation";
import { videoData } from "../components/videoData";

const Videos = ({ videoId }) => {
  const router = useRouter();
  const handleClick = (videoId) => {
    router.push("watch?v=" + videoId);
  };
  const videos = videoData.filter((video) => video.videoId !== videoId);
  return (
    <>
      {videos.map((value, id) => (
        <div className="flex p-[5px] gap-[5px]" onClick={() => handleClick(value.videoId)} key={id}>
          <div>
            <Image src={value.videoThumbnail} width={200} height={120} className="max-w-none" alt="video" />
          </div>
          <div className="w-[50%] p-[5px] flex flex-col justify-center gap-[5px] text-[10px]">
            <h1 className="text-[13px]">{value.title}</h1>
            <p className="text-[#AAAAAA]">{value["channel-name"]}</p>
            <p className="text-[#AAAAAA]">{value.views}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Videos;
