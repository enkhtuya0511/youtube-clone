import Image from "next/image";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [like, setLike] = useState(false);
  const date = new Date();

  const addComment = () => {
    setComments([...comments, text]);
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="flex pt-[25px]">
        <h1>Comments</h1>
      </div>
      <div className="flex pt-[20px] gap-[15px]">
        <Image src="/73.png" width={40} height={40} alt="profile" />
        <input
          type="text"
          value={text}
          placeholder="Add a public comment..."
          className="border-0 bg-[#121212]"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") return addComment();
          }}
        />
        <button onClick={() => setText("")}>cancel</button>
        <button onClick={() => addComment()}>comment</button>
      </div>
      {comments.length > 0 &&
        comments.map((com, id) => {
          return (
            <div key={id}>
              <div className="flex pt-[5px] mt-[10px] gap-[15px]">
                <Image src="/73.png" className="rounded-[50%] w-[40px] h-[40px]" width={40} height={40} alt="profile" />
                <div className="flex flex-col text-[#FFFFFF] gap-[3px]">
                  <div className="flex gap-[10px]">
                    <h3 className="font-bold">@Enkhe</h3>
                    <h3 className="text-[#AAAAAA]">{date.getHours() + ":" + date.getMinutes() + " " + date.toDateString()}</h3>
                  </div>
                  <p className="text-[#FFFFFF]">{com}</p>
                </div>
              </div>
              <div className="flex items-center pl-[55px] gap-[10px] ">
                <button onClick={() => setLike(!like)}>
                  <BiLike className="cursor-pointer" />
                </button>
                <h3 className="text-[#AAAAAA]">{!like ? "" : "1"}</h3>
                <BiDislike className="cursor-pointer" />
                <h3 className="p-[3px] rounded-[50px] text-[#AAAAAA] cursor-pointer hover:bg-[#E1E1E1]">Reply</h3>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Comments;
