import { MdOutlineSpaceDashboard, MdOutlineFolder } from "react-icons/md";
import { FiBook, FiCalendar, FiMessageSquare, FiEdit } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const Sidebar = () => {
    let location = useLocation();
    const [open, setOpen] = useState(true)
    const routes = [
        {
            label: "Dashboard",
            path: "/",
            icon: <MdOutlineSpaceDashboard className='text-xl' />
        },
        {
            label: "Classes",
            path: "/classes",
            icon: <MdOutlineFolder className='text-xl' />
        },
        {
            label: "Resources",
            path: "/resources",
            icon: <FiBook className='text-xl' />
        },
        {
            label: "Learning Plan",
            path: "/learning-plan",
            icon: <FiCalendar className='text-xl' />
        },
        {
            label: "Chat",
            path: "/chat",
            icon: <FiMessageSquare className='text-xl' />
        },
        {
            label: "Settings",
            path: "/settings",
            icon: <FiEdit className='text-xl' />
        },
    ]
    return (
        <div className={twMerge('min-h-screen py-8 flex flex-col justify-between border-r-2 border-black/10', open ? "w-2/12" : "w-[6vw]")}>
            <div className={twMerge('flex gap-7 items-center', open ? "px-9 justify-start" : "px-2 justify-center")}>
                <h1 onClick={() => setOpen(!open)} className='select-none text-2xl bg-accentBlue rounded-lg w-7 h-7 flex justify-center items-center text-white font-extrabold'>L</h1>
                {open && <h1 className='text-lg font-bold '>Logo</h1>}
            </div>

            <div className={twMerge('flex flex-col gap-y-8 pl-9')}>
                {
                    routes.map((route) => <Link to={route.path} className={'flex gap-8 items-center'}>
                        <span className={location.pathname === route.path ? "text-[#4c84ff]" : "text-secondary"}>{route.icon}</span>
                        {open && <p className={twMerge('font-semibold text-sm flex-1', location.pathname === route.path ? "text-black" : "text-secondary")}>{route.label}</p>}
                        {location.pathname === route.path && <span className='h-full rounded-full w-1 bg-[#4c84ff]'></span>}
                    </Link>)
                }
            </div>

            {<div className={open ? "px-5" : "opacity-0 pointer-events-none"}>
                <div className='bg-bgColor rounded-xl relative flex flex-col p-3 gap-7'>
                    <img className='absolute left-1/2 -translate-x-1/2 -top-[70px] w-40 h-40' src="/assets/folder.png" alt="" />
                    <p className='text-xs text-secondary pt-14 text-center h-[88px]'>Upgrade to <span className='text-black font-bold'>PRO</span> for more resources</p>
                    <button className='w-full bg-accentBlue text-white py-2 rounded-xl font-semibold'>Upgrade</button>
                </div>
            </div>}

        </div>
    )
}

export default Sidebar
