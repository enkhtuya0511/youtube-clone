'use client'
import Image from 'next/image'
import { NavBar } from './components/NavBar'
import React, { useState } from 'react'
import SideBar from './components/SideBar'
import Thumbnail from './components/Thumbnail'

export default function Home() {
  const [menu, setMenu] = useState(true)

  return (
    <>
      <NavBar setMenu={setMenu} />
      <main className="flex min-h-screen pt-[60px]">
        {menu && <SideBar />}
        <Thumbnail />
      </main>
    </>
  )
}
