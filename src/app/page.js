"use client";
import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Thumbnail from "./components/Thumbnail";
import Filter from "./components/Filter";
import { NavBar } from "./components/NavBar";
import { videoData } from "./components/videoData";

export default function Home() {
  const [menu, setMenu] = useState(true);
  const [item, setItems] = useState(videoData);
  const [chosenFilter, setChosenFilter] = useState("all");
  const filterVideos = (channelName) => {
    if (channelName !== chosenFilter) {
      const newVideos = videoData.filter((newVal) => newVal["channel-name"] === channelName);
      setItems(newVideos);
      setChosenFilter(channelName);
    } else {
      setItems(videoData);
      setChosenFilter("all");
    }
  };
  const search = (input) => {
    setChosenFilter("");
    const filteredVideo = videoData.filter((newVal) => newVal.title.toLowerCase().includes(input.toLowerCase()));
    setItems(filteredVideo);
  };

  return (
    <main className="flex min-h-screen pt-[55px] bg-[#000000]">
      <NavBar setMenu={setMenu} search={search} />
      {menu && <SideBar />}
      <div className={`flex flex-col ${menu && "w-[85%]"} w-full`}>
        <Filter setItems={setItems} filterVideos={filterVideos} chosenFilter={chosenFilter} />
        <Thumbnail item={item} />
      </div>
    </main>
  );
}
