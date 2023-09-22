import React from 'react'
const SideBarTop = [
    {
        "menu-title": "Home",
        "menu-icon": "./home.svg"
    },
    {
        "menu-title": "Explore",
        "menu-icon": "./explore.svg"
    },
    {
        "menu-title": "Subscriptions",
        "menu-icon": "./sub.svg"
    },
    {
        "menu-title": "Library",
        "menu-icon": "./library.svg"
    },
    {
        "menu-title": "History",
        "menu-icon": "./history.svg"
    },
]
export default function SideBar() {
    return (
        <div className='flex justify-center items-center bg-[#212121] w-[240px] h-screen'>
            {/* {
                SideBarTop.map((data) => (
                    <div className="flex">
                        {/* <Image src={data['menu-icon']} width={30} height={30} /> */}
                        <h3>{data.menu-title}</h3>
                    </div>
                ))
            } */ }
        </div>
    )
}
