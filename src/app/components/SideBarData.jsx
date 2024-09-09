import React from "react";
import { HiOutlineLightBulb, HiOutlineMusicalNote, HiOutlineNewspaper } from "react-icons/hi2";

export const SideBarData1 = [
  {
    title: "Home",
    icon: "./home.svg",
  },
  {
    title: "Subscriptions",
    icon: "./sub.svg",
  },
  {
    title: "History",
    icon: "./history.svg",
  },
  {
    title: "Watch Later",
    icon: "./watchLater.svg",
  },
];

export const SideBarData2 = [
  {
    youtuber: "James Gouse",
    avatar: "/31.png",
  },
  {
    youtuber: "Alan Cooper",
    avatar: "/36.png",
  },
  {
    youtuber: "Jesica Lambert",
    avatar: "/80.png",
  },
  {
    youtuber: "Anna White",
    avatar: "/91.png",
  },
];

export const SideBarData3 = [
  {
    title: "Youtube Premium",
    icon: "./youtube.svg",
  },
  {
    title: "Live",
    icon: "./live.svg",
  },
  {
    title: "Settings",
    icon: "./settings.svg",
  },
  {
    title: "Help",
    icon: "./help.svg",
  },
  {
    title: "Send feedback",
    icon: "./feedback.svg",
  },
];

export const SideBarData4 = [
  {
    title: "Learning",
    icon: <HiOutlineLightBulb className="w-[30px] h-[30px] basis-[30%] text-[#FFFFFF]" />,
  },
  {
    title: "News",
    icon: <HiOutlineNewspaper className="w-[30px] h-[30px] basis-[30%] text-[#FFFFFF]" />,
  },
  {
    title: "Music",
    icon: <HiOutlineMusicalNote className="w-[30px] h-[30px] basis-[30%] text-[#FFFFFF]" />,
  },
];
