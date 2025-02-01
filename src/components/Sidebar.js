import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";




const Sidebar = () => {

    const mainLinks =[
        {
            icon: <IoMdHome className='text-xl' />,
            name: 'Home'
        },
        {
            icon: <SiYoutubeshorts className='text-xl' />,
            name: 'Shorts'
        },
        {
            icon: <MdSubscriptions />,
            name: 'Subscribe'
        }
    ]

    const otherLinks =[
        {
            icon: <MdOutlineVideoLibrary />,
            name: 'Library'
        },
        {
            icon: <MdOutlineHistory />,
            name: 'History'
        },
        {
            icon: <MdWatchLater />,
            name: 'Watch Later'
        },
        {
            icon: <LuThumbsUp />,
            name: 'Liked Videos'
        }
    ]

    return (
      <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen '>
        <ul className='flex flex-col border-b-2 border-gray-700 '>
            {mainLinks.map(
                ({icon,name}) =>{
                    return(
                        <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-zinc-600" : " "} rounded-xl`}>
                            <a href='#' className=' flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                }
            )}
        </ul>
        <ul className='flex flex-col border-gray-800 border-b-1 '>
            {otherLinks.map(
                ({icon,name}) =>{
                    return(
                        <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name === "Home" ? "bg-zinc-600" : " "}rounded-xl`}>
                            <a href='#' className=' flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>{name}</span>
                            </a>
                        </li>
                    )
                }
            )}
        </ul>
      </div>
    )
}

export default Sidebar
