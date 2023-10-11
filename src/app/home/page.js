'use client'
import { NavBar } from '../components/NavBar'
import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import Thumbnail from '../components/Thumbnail'
import Filter from '../components/Filter'
import { videoData } from '../components/videoData'

export default function Home() {
  const [menu, setMenu] = useState(true);
  const [video, setVideo] = useState(videoData);
  const [search, setSearch] = useState('');
  let updatedVideos = [...video];
  // filteredVideos.filter((value, id) => {return ( value.title.toLowerCase().includes(search)) })

  useEffect((search) => {
    updatedVideos.filter((val, id) => {
      if (search === val.title.toLowerCase()) {
        return setVideo(updatedVideos);
      } else {
        setVideo('');
        console.log('TvT');
      }
    })
  }, [])

  return (
    <>
<<<<<<< HEAD
      <main className="flex min-h-screen pt-[55px] bg-[#212121]">
      <NavBar setMenu={setMenu} />
=======
      <main className="flex min-h-screen pt-[55px] bg-[#000000]">
        <NavBar setMenu={setMenu} setSearch={setSearch} />
>>>>>>> 4f131aa2c1e9e395c196a0d35f63b644ae14eba2
        {menu && <SideBar />}
        <div className='flex flex-col w-[85%]'>
          <Filter />
          <Thumbnail video={video} />
        </div>
      </main>
    </>
  )
}
