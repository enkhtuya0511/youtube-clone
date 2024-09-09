import { videoData } from "./videoData";

const Filter = ({ setItems, filterVideos, chosenFilter }) => {
  const buttons = [...new Set(videoData.map((val) => val["channel-name"]))];
  return (
    <div className='w-full h-[5%] bg-[#212121] p-[10px] flex gap-[15px] pl-[20px] overflow-auto hover:overflow-scroll"'>
      <button
        style={{
          backgroundColor: chosenFilter === "all" ? "#FFFFFF" : "#000000",
          color: chosenFilter === "all" ? "#000000" : "#FFFFFF",
        }}
        className="flex items-center border-[1px] rounded-[32px] py-2 px-3 text-center"
        onClick={() => {
          filterVideos("all");
          setItems(videoData);
        }}
      >
        All
      </button>
      {buttons.map((val, id) => {
        return (
          <button
            key={id}
            style={{
              backgroundColor: chosenFilter === val ? "#FFFFFF" : "#000000",
              color: chosenFilter === val ? "#000000" : "#FFFFFF",
            }}
            className="flex items-center border-[1px] rounded-[32px] py-2 px-3 text-center"
            onClick={() => filterVideos(val)}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
