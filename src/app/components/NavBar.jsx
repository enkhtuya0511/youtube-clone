import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { SecondaryData } from './SecondaryData';
import { useRouter } from 'next/navigation';

export const NavBar = ({ setMenu }) => {
    const router = useRouter();
    const handleClick = (videoId) => {
        router.push('watch?v=' + videoId)
    }

    //search
    const [search, setSearch] = useState('');
    const searchF = () => {
        const lol = SecondaryData.filter((value, id) => value.title.toLowerCase().includes(search)).map((value, id) => {
            return (
                <li key={id} className='bg-[#FFFFFF] p-[7px]' onClick={() => handleClick(value.videoId)}>{value.title}</li>
            )
        }

        )
        console.log(lol)
    }
    return (
        <div className='flex justify-between items-center fixed top-[0] py-[20px] px-[30px] bg-[#212121] w-full h-[60px]'>
            <div className='flex gap-5'>
                <button className='bg-[#212121] border-none' onClick={() => setMenu((olddMenu) => !olddMenu)}>
                    < GiHamburgerMenu style={{ color: '#FFFFFF', width: '25px', height: '25px' }} />
                </button>
                <a href="/home" className='mt-[5px]'>
                    <Image src='/youtube-logo.svg' alt='Youtube Logo' width={90} height={20} />
                </a>

            </div>
            <div className='w-[450px] h-[40px] flex'>
                <input type="text"
                    placeholder='Search'
                    className='border-none bg-[#121212] w-[290px] h-full text-[#AAAAAA] pe-[10px] ps-[10px]'
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') return searchF()
                    }}
                />
                <button className='flex justify-center items-center bg-[#303030] h-full border-none text-[#FFFFFF] w-[58px]'>< BsSearch /></button>
                <button className='flex justify-center items-center bg-[#000000] border-none text-[#FFFFFF] h-[45px] rounded-[50%] ml-[7px] w-[40px]'>< FaMicrophone /></button>
            </div>
            <div className='flex gap-[17px]'>
                <button>
                    <Image src='/create.svg' alt='create' width={30} height={30} />
                </button>
                <button>
                    <Image src='/apps.svg' alt='apps' width={30} height={30} />
                </button>
                <button>
                    <Image src='/notifications.svg' alt='notifications' width={30} height={30} />
                </button>
                <button>
                    <Image src='/profile.svg' alt='profile' width={30} height={30} />
                </button>
            </div>
        </div >
    )
}
