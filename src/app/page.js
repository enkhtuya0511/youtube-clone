'use client'
import Image from 'next/image'
import { NavBar } from './components/NavBar'
import React, { useState } from 'react'
import SideBar from './components/SideBar'
import Thumbnail from './components/Thumbnail'
import Filter from './components/Filter'

export default function Home() {
  const [menu, setMenu] = useState(true)

  return (
    <>
      <NavBar setMenu={setMenu} />
      <main className="flex min-h-screen pt-[55px]">
        {menu && <SideBar />}
        <div className='flex flex-col w-[85%]'>
            <Filter />
            <Thumbnail />
        </div>
      </main>
    </>
  )
}
