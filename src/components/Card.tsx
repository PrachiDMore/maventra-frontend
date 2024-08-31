import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";



const Card = ({shortform, title, subtitle, className}: {shortform: string, title: string, subtitle: string, className: string}) => {
  return (
    <div className={"w-full flex bg-darkBlue text-white rounded-2xl p-5 gap-5 " + className}>
      <div className="w-[25%] h-12 bg-white/20 flex justify-center items-center  rounded-xl">
        <p className="text-xl font-semibold">{shortform}</p>
      </div>
      <div className="w-full flex flex-col ">
        <p className="text-secondary text-sm">{title}</p>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-semibold">{subtitle}</h1>
          <MdArrowRightAlt className="text-2xl"/>
        </div>
      </div>
    </div>
  )
}

export default Card
