import React from 'react'
import { MdOutlineSpaceDashboard, MdOutlineFolder } from "react-icons/md";
import { FiBook, FiCalendar, FiMessageSquare, FiEdit } from "react-icons/fi";




const Sidebar = () => {
    return (
        <div className='w-1/5 h-screen py-8 px-5 flex flex-col gap-10 justify-between'>
            <div className='flex gap-7 items-center px-4'>
                <h1 className='text-2xl bg-accentBlue rounded-lg w-7 h-7 flex justify-center items-center text-white font-extrabold'>L</h1>
                <h1 className='text-lg font-bold '>Logo</h1>
            </div>

            <div className='flex flex-col gap-10 px-4'>
                <a href='/' className='flex gap-8 items-center'>
                    <MdOutlineSpaceDashboard className='text-secondary text-xl' />
                    <p className='text-secondary '>Dashboard</p>
                </a>
                <a href='/classes' className='flex gap-8 items-center'>
                    <MdOutlineFolder className='text-secondary text-xl' />
                    <p className='text-secondary '>Classes</p>
                </a>
                <a href='/resources' className='flex gap-8 items-center'>
                    <FiBook className='text-secondary text-xl' />
                    <p className='text-secondary '>Resources</p>
                </a>
                <a href='/learning-plan' className='flex gap-8 items-center'>
                    <FiCalendar className='text-secondary text-xl' />
                    <p className='text-secondary '>Learning Plan</p>
                </a>
                <a href='/chat' className='flex gap-8 items-center'>
                    <FiMessageSquare className='text-secondary text-xl' />
                    <p className='text-secondary '>Chat</p>
                </a>
                <a href='/setting' className='flex gap-8 items-center'>
                    <FiEdit className='text-secondary text-xl' />
                    <p className='text-secondary '>Setting</p>
                </a>
            </div>

            <div className='bg-bgColor rounded-xl relative flex flex-col p-3 gap-7'>
                <img className='absolute -top-16 w-40 h-40' src="/assets/folder.png" alt="" />
                <p className='text-secondary text-sm pt-14 text-center'>Upgrade to <span className='text-black font-bold'>PRO</span> for more resources</p>
                <button className='w-full bg-accentBlue text-white py-2 rounded-lg font-semibold'>Upgrade</button>
            </div>

        </div>
    )
}

export default Sidebar
