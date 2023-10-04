"use client";
import { NavBar } from "../components/NavBar";
import React, { useState, useEffect } from "react";
import Primary from "../components/Primary";
import Secondary from "../components/Secondary";
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [menu, setMenu] = useState(true);

  const searchParams = useSearchParams();
  const search = searchParams.get('v');
  // api key AIzaSyAmBEnc-7CrkrsNwdjk9I7sFRtCcC9di0s

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
      const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${search}&key=AIzaSyAmBEnc-7CrkrsNwdjk9I7sFRtCcC9di0s`)
          .then((res) => (res.json()));
      setData(res);
      console.log(res);
      setLoading(false);
  }

  useEffect(() => {
    setIsClient(true);
    fetchData();
  }, [search]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#121212]">
      <NavBar setMenu={setMenu} />
      <div className="flex justify-center items-center min-w-screen p-[20px]">
        <Primary isClient={isClient} search={search} loading={loading} data={data}/>
        <Secondary isClient={isClient}/>
      </div>
    </main>
  );
}
