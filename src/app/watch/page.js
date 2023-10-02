"use client";
import { NavBar } from "../components/NavBar";
import React, { useState, useEffect } from "react";
import Primary from "../components/Primary";
import Secondary from "../components/Secondary";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#121212]">
      <NavBar setMenu={setMenu} />
      <div className="flex justify-center items-center min-w-screen p-[20px]">
        <Primary isClient={isClient}/>
        <Secondary isClient={isClient}/>
      </div>
    </main>
  );
}
