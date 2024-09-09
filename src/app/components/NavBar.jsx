import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

export const NavBar = ({ setMenu, search }) => {
  return (
    <div className="flex justify-between items-center fixed top-[0] py-[20px] px-[30px] bg-[#212121] w-full h-[60px]">
      <div className="flex gap-5 justify-center items-center">
        <button className="border-none" onClick={() => setMenu((oldMenu) => !oldMenu)}>
          <GiHamburgerMenu style={{ color: "#FFFFFF", width: "25px", height: "25px" }} />
        </button>
        <a href="/">
          <Image src="/youtube-logo.svg" alt="Youtube Logo" width={90} height={20} />
        </a>
      </div>
      <div className="w-[450px] h-[40px] flex">
        <input
          type="text"
          placeholder="Search"
          className="border-none bg-[#121212] w-[290px] h-full text-[#AAAAAA] pe-[10px] ps-[10px]"
          onKeyDown={(e) => {
            if (e.key === "Enter") return search(e.target.value);
          }}
        />
        <button className="flex justify-center items-center bg-[#303030] h-full border-none text-[#FFFFFF] w-[58px]">
          <BsSearch />
        </button>
      </div>
      <button>
        <Image src="/73.png" alt="avatar" width={30} height={30} />
      </button>
    </div>
  );
};
