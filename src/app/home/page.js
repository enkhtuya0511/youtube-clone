'use client'
import { NavBar } from '../components/NavBar'
import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import Thumbnail from '../components/Thumbnail'
import Filter from '../components/Filter'

export default function Home() {
  const [menu, setMenu] = useState(true);

  return (
    <>
      <main className="flex min-h-screen pt-[55px]">
        <NavBar setMenu={setMenu} />
        {menu && <SideBar />}
        <div className='flex flex-col w-[85%]'>
          <Filter />
          <Thumbnail />
        </div>
      </main>
    </>
  )
}
