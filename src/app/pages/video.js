import React from 'react'
import { NavBar } from '../components/NavBar'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation';

const video = () => {
  const router = useRouter();
  const channel = (channelId) => {
  router.push('channel/' + channelId)
  }

  const searchParams = useSearchParams();
  const search = searchParams.get('v');

  const fetchDataChannelID = async () => {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?id=${search}&key=AIzaSyAmBEnc-7CrkrsNwdjk9I7sFRtCcC9di0s&part=snippet,contentDetails,statistics`)
    .then((response) => (response.json()));
    console.log(response);
  }
  return (
    <div className='bg-[#212121]'>
        <NavBar />
    </div>
  )
}

export default video