import { MdArrowRightAlt } from "react-icons/md";



const Card = ({shortform, title, subtitle, className}: {shortform: string, title: string, subtitle: string, className: string}) => {
  return (
    <div className={"w-full flex text-white rounded-2xl p-4 gap-5 " + className}>
      <div className="w-12 h-12 bg-white/10 flex justify-center items-center rounded-xl">
        <p className="text-xl font-semibold">{shortform}</p>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-white/70 text-xs">{title}</p>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-semibold">{subtitle}</h1>
          <MdArrowRightAlt className="text-2xl"/>
        </div>
      </div>
    </div>
  )
}

export default Card
