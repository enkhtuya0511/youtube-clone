'use client'
import { NavBar } from '../components/NavBar'
import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import Thumbnail from '../components/Thumbnail'
import Filter from '../components/Filter'
import { videoData } from '../components/videoData'

export default function Home() {
  const [menu, setMenu] = useState(true);
  const [item, setItems] = useState(videoData);
  const [chosenFilter, setChosenFilter] = useState('');
  const buttons = [... new Set(videoData.map((val) => val['channel-name']))]
  const filterVideos = (channelName) => {
    const newVideos = videoData.filter((newVal) => newVal['channel-name'] === channelName);
    setItems(newVideos);
    setChosenFilter(channelName)
  }
  // const [input, setInput] = useState('');
  // let updatedVideos = [...videoData];
  // updatedVideos.filter((value, id) => {return ( value.title.toLowerCase().includes(input)) })

  // useEffect(() => {
  //   updatedVideos.filter((val, id) => {
  //     if (input === val.title.toLowerCase()) {
  //       return setVideo(updatedVideos);
  //     } else {
  //       setVideo('');
  //       console.log('TvT');
  //     }
  //   })
  // }, [])

  return (
    <>
      <main className="flex min-h-screen pt-[55px] bg-[#000000]">
        <NavBar setMenu={setMenu} />
        {menu && <SideBar />}
        <div className='flex flex-col w-[85%]'>
          <Filter buttons={buttons} setItems={setItems} filterVideos={filterVideos} chosenFilter={chosenFilter} />
          <Thumbnail item={item} />
        </div>
      </main>
    </>
  )
}
