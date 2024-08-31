import { IoSearch } from "react-icons/io5";
import { MdArrowRightAlt, MdOutlineErrorOutline, MdMailOutline } from "react-icons/md";
import { IoIosArrowDown, IoIosNotificationsOutline, IoMdLogIn } from "react-icons/io";
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';



const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />

            <div className="w-4/5 h-screen bg-bgColor p-8 flex flex-col gap-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">Dashboard</h1>
                    <div className="flex gap-6 items-center">
                        <p className="text-secondary font-medium">20 Sep 2019, Friday</p>
                        <div className="bg-accentBlue/15 p-2 rounded-md">
                            <IoSearch className="text-accentBlue text-lg" />
                        </div>
                    </div>
                </div>


                <div className="flex justify-between bg-accentRed/20 rounded-lg py-6 px-20 relative mt-4">
                    <div className="grid gap-3">
                        <h1 className="text-accentRed font-bold text-xl">Welcome back Anna!</h1>
                        <div className="text-darkGray">
                            <p className="text-sm">You have learn <span className="text-black font-semibold">80%</span> of your goal this week!</p>
                            <p>Keep it up and improve your result!</p>
                        </div>
                    </div>
                    <img className="w-72 absolute -bottom-8 right-20" src="/assets/girl.png" alt="" />
                </div>


                <div className="w-full flex gap-8 justify-between">
                    <div className="bg-white rounded-lg p-5 w-[40%]">
                        <div className="flex justify-between items-cente">
                            <h1 className=" font-bold">Latest Result</h1>
                            <p className="flex items-center gap-3 text-sm font-medium">More <MdArrowRightAlt className="text-xl"/></p>
                        </div>
                        <div className="flex justify-between gap-5 py-5 ">
                            <div className="w-full text-sm flex gap-1">
                                <h1 className="font-medium">Unit 5 -</h1>
                                <p className="text-secondary font-medium">Technology</p>
                            </div>
                            <div className="w-full text-xs flex gap-2 items-center"><span className="w-full h-1 bg-secondary rounded-md"></span> 25%</div>
                        </div>
                        <div className="flex justify-between gap-5 py-5 border-t-2 border-secondary/60">
                            <div className="w-full text-sm flex gap-1">
                                <h1 className="font-medium">Unit 12 -</h1>
                                <p className="text-secondary font-medium">Ecology</p>
                            </div>
                            <div className="w-full text-xs flex gap-2 items-center"><span className="w-full h-1 bg-secondary rounded-md"></span> 25%</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-5 w-[60%]">
                        <div className="flex justify-between items-center">
                            <h1 className=" font-semibold">Time spent on learning</h1>
                            <p className="flex items-center gap-3 text-sm font-medium">Last week <IoIosArrowDown className="text-lg"/></p>
                        </div>
                        <div>


                        </div>
                        <div className="w-full flex justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-accentRed rounded-full"></div>
                                <p>Vocabulary</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-darkBlue rounded-full"></div>
                                <p>Grammar</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-accentBlue rounded-full"></div>
                                <p>Listening</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-grayieshBlue rounded-full"></div>
                                <p>Writing</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <h1 className=" font-semibold">Your courses</h1>
                        <p className="flex items-center gap-5">More <MdArrowRightAlt /></p>
                    </div>
                    <div className="flex gap-6">
                        <Card className={"bg-darkBlue"} shortform={'B2'} title={"Business English"} subtitle={"Grammar"} />
                        <Card className={"bg-grayieshBlue"} shortform={'B2'} title={"Common English"} subtitle={"Phrasal verbs"} />
                        <Card className={"bg-accentRed"} shortform={'C1'} title={"Business Spanish"} subtitle={"Vocabulary"} />
                    </div>
                </div>

            </div>

            <div className="w-[27%] py-8 px-5 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h1 className=" font-semibold">Logout</h1>
                    <IoMdLogIn className="text-secondary text-xl" />
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 p-3 border-secondary border-2 rounded-full"><img className="" src="/assets/profile.jpg" alt="" /></div>
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className="text-xl font-bold">Anna Morrison</h1>
                        <p className="text-secondary">Student</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="w-full flex gap-3 items-center">
                        <p className="w-[35%] h-12 bg-secondary/30 p-2 flex justify-center items-center rounded-xl font-semibold">B2</p>
                        <div className="w-full">
                            <h1 className="font-semibold">English</h1>
                            <p className="text-secondary text-xs">High Intermediate</p>
                        </div>
                        <div className="w-full h-1 bg-secondary rounded-md"></div>
                    </div>

                    <div className="w-full flex gap-3 items-center">
                        <p className="w-[35%] h-12 bg-secondary/30 p-2 flex justify-center items-center rounded-xl font-semibold">C1</p>
                        <div className="w-full">
                            <h1 className="font-semibold">English</h1>
                            <p className="text-secondary text-xs">High Intermediate</p>
                        </div>
                        <div className="w-full h-1 bg-secondary rounded-md"></div>
                    </div>
                </div>

                <div className="grid gap-5">
                    <div className="flex justify-between items-center">
                        <h1 className=" font-semibold">Reminders</h1>
                        <IoIosNotificationsOutline className="text-secondary text-2xl" />
                    </div>

                    <div className="w-full flex gap-3 items-center">
                        <div className="w-14 h-12 bg-accentRed/20 flex justify-center items-center  rounded-xl">
                            <MdOutlineErrorOutline className="text-lg text-accentRed" />
                        </div>
                        <div className="w-full">
                            <h1 className="font-semibold">Eng - Vocabluary test</h1>
                            <p className="text-secondary text-xs">24 Sep 2019, Friday</p>
                        </div>
                    </div>

                    <div className="w-full flex gap-3 items-center">
                        <div className="w-14 h-12 bg-accentBlue/20 flex justify-center items-center  rounded-xl">
                            <MdMailOutline className="text-lg text-accentBlue" />
                        </div>
                        <div className="w-full">
                            <h1 className="font-semibold">Eng - Send grammar homework</h1>
                            <p className="text-secondary text-xs">24 Sep 2019, Friday</p>
                        </div>
                    </div>

                    <div className="w-full flex gap-3 items-center">
                        <div className="w-14 h-12 bg-accentBlue/20 flex justify-center items-center  rounded-xl">
                            <MdMailOutline className="text-lg text-accentBlue" />
                        </div>
                        <div className="w-full">
                            <h1 className="font-semibold">Spanish - Send essey</h1>
                            <p className="text-secondary text-xs">24 Sep 2019, Friday</p>
                        </div>
                    </div>

                    {/* <div>
                        <div>
                            <MdMailOutline />
                        </div>
                        <div>
                            <h1>Eng - Send grammar homework</h1>
                            <p>24 Sep 2019, Friday</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <MdMailOutline />
                        </div>
                        <div>
                            <h1>Spanish - Send essey</h1>
                            <p>24 Sep 2019, Friday</p>
                        </div>
                    </div> */}

                </div>


            </div>

        </div>
    )
}

export default Dashboard
