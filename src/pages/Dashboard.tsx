import { IoSearch } from "react-icons/io5";
import { MdArrowRightAlt, MdOutlineErrorOutline, MdMailOutline } from "react-icons/md";
import { IoIosArrowDown, IoIosNotificationsOutline, IoMdLogIn } from "react-icons/io";
import Card from '../components/Card';
import {
    BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import graphData from "../utils/GraphData";
import ProgressBar from "../components/ProgressBar";
import results from "../utils/Results";
import Layout from "../components/Layout";
import { IoIosAdd } from "react-icons/io";


const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
        <ul style={{ display: 'flex', listStyle: 'none', padding: 0, }}>
            {payload.map((entry: any, index: number) => (
                <li key={`item-${index}`} style={{ marginRight: 10, display: 'flex', alignItems: 'center' }}>
                    <svg width="8" height="8" style={{ marginRight: 4 }}>
                        <circle cx="4" cy="4" r="4" fill={entry.color} />
                    </svg>
                    <span style={{ fontSize: '12px' }}>{entry.value}</span>
                </li>
            ))}
        </ul>
    );
};

const Dashboard = () => {
    return (
        <Layout>
            <div className="flex-1 min-h-screen bg-bgColor px-8 py-6 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">Dashboard</h1>
                    <div className="flex gap-6 items-center">
                        <p className="text-secondary font-medium">20 Sep 2019, Friday</p>
                        <div className="bg-accentBlue/15 h-10 w-10 flex items-center justify-center rounded-md cursor-pointer hover:bg-accentBlue/20 duration-200">
                            <IoSearch className="text-accentBlue text-lg" />
                        </div>
                    </div>
                </div>


                <div className="flex justify-between bg-accentRed/20 rounded-2xl py-6 px-16 relative mt-3">
                    <div className="grid gap-3">
                        <h1 className="text-accentRed font-semibold text-xl">Welcome back Anna!</h1>
                        <div className="text-darkGray">
                            <p className="text-sm font-medium">You have learn <b>80%</b> of your goal this week!</p>
                            <p className="text-sm font-medium">Keep it up and improve your result!</p>
                        </div>
                    </div>
                    <img className="w-72 absolute -bottom-8 right-20" src="/assets/girl.png" alt="" />
                </div>


                <div className="w-full flex gap-8 justify-between flex-1">
                    <div className="bg-white rounded-lg p-5 w-[40%]">
                        <div className="flex justify-between items-cente">
                            <h1 className=" font-bold text-sm">Latest Result</h1>
                            <p className="flex items-center gap-3 font-medium text-black/70 text-xs cursor-pointer hover:text-black/90 duration-200">More <MdArrowRightAlt className="text-xl" /></p>
                        </div>
                        <div className="flex flex-col justify-between mt-3">
                            {
                                results.map((result) => <div className="w-full h-max grid grid-cols-12 py-4 border-b border-black/10">
                                    <div className="col-span-7 flex text-xs">
                                        <p className="text-secondary font-medium"><b className="font-semibold text-black">{result.title}</b> - {result.subtitle}</p>
                                    </div>
                                    <ProgressBar progress={result.progress} color={result.color} className="col-span-5 " showProgress={true} />
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-5 w-[60%]">
                        <div className="flex justify-between items-center">
                            <h1 className=" font-semibold text-sm">Time spent on learning</h1>
                            <p className="flex items-center gap-3 font-medium text-black/70 text-xs cursor-pointer hover:text-black/90 duration-200">Last week <IoIosArrowDown className="text-lg" /></p>
                        </div>
                        <div className="flex-1">
                            <ResponsiveContainer minHeight={255} width="100%">
                                <BarChart
                                    data={graphData}
                                    margin={{
                                        top: 20, bottom: 5,
                                    }}
                                >
                                    <Tooltip />
                                    <XAxis tickLine={false} orientation="top" ticks={graphData.map((data) => data.name)} dataKey="name" axisLine={false} />
                                    <Legend content={CustomLegend} />
                                    <Bar barSize={6} dataKey="Vocabulary" stackId="a" fill="#ff808b" />
                                    <Bar barSize={6} dataKey="Grammar" stackId="a" fill="#4d4cac" />
                                    <Bar barSize={6} dataKey="Listening" stackId="a" fill="#5e81f4" />
                                    <Bar barSize={6} dataKey="Writing" stackId="a" fill="#dcdcdc" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h1 className=" font-semibold">Your courses</h1>
                        <p className="flex items-center gap-3 font-medium text-black/70 text-xs cursor-pointer hover:text-black/90 duration-200">More <MdArrowRightAlt className="text-xl" /></p>
                    </div>
                    <div className="flex gap-6">
                        <Card className={"bg-darkBlue"} shortform={'B2'} title={"Business English"} subtitle={"Grammar"} />
                        <Card className={"bg-grayieshBlue"} shortform={'B2'} title={"Common English"} subtitle={"Phrasal verbs"} />
                        <Card className={"bg-accentRed"} shortform={'C1'} title={"Business Spanish"} subtitle={"Vocabulary"} />
                    </div>
                </div>

            </div>

            <div className="w-3/12 py-6 px-8 flex flex-col gap-10 border-l-2 border-black/10">
                <div className="flex justify-between items-center">
                    <h1 className=" font-semibold">Logout</h1>
                    <IoMdLogIn className="text-secondary text-xl" />
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                        <div className="w-28 h-28 p-3 border-secondary/20 border-4 rounded-full overflow-hidden">
                            <img className="grayscale h-full aspect-square" src="/assets/profile.jpg" alt="" />
                        </div>
                        <div className="bg-accentBlue rounded-full text-white w-5 h-5 flex justify-center items-center absolute right-4 bottom-0"><IoIosAdd className="text-xl font-semibold"/></div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className="text-lg font-bold">Anna Morrison</h1>
                        <p className="text-sm text-secondary">Student</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5">

                    <div className="w-full gap-x-5 items-center grid grid-cols-12 ">
                        <p className="col-span-2 aspect-square h-12 bg-secondary/10 p-2 flex justify-center items-center rounded-xl font-semibold">B2</p>
                        <div className="col-span-6 flex flex-col">
                            <h1 className="text-sm font-semibold">English</h1>
                            <p className="text-secondary text-xs mt-1">High Intermediate</p>
                        </div>
                        <ProgressBar className="col-span-4" color="#4c84ff" progress={62} showProgress={false} />
                    </div>
                    <div className="w-full gap-x-5 items-center grid grid-cols-12 ">
                        <p className="col-span-2 aspect-square h-12 bg-secondary/10 p-2 flex justify-center items-center rounded-xl font-semibold">C1</p>
                        <div className="col-span-6 flex flex-col">
                            <h1 className="text-sm font-semibold">Spanish</h1>
                            <p className="text-secondary text-xs mt-1">Advance</p>
                        </div>
                        <ProgressBar className="col-span-4" color="#4c84ff" progress={35} showProgress={false} />
                    </div>

                </div>

                <div className="grid gap-5">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-sm">Reminders</h1>
                        <IoIosNotificationsOutline className="text-secondary text-2xl" />
                    </div>

                    <div className="w-full flex gap-3 items-center">
                        <div className="w-14 h-12 bg-accentRed/10 flex justify-center items-center  rounded-xl">
                            <MdOutlineErrorOutline className="text-lg text-accentRed" />
                        </div>
                        <div className="w-full flex flex-col">
                            <h1 className="text-sm font-semibold">Eng - Vocabluary test</h1>
                            <p className="text-secondary text-xs mt-1">24 Sep 2019, Friday</p>
                        </div>
                    </div>

                    <div className="w-full flex gap-3 items-center">
                        <div className="w-14 h-12 bg-accentBlue/10 flex justify-center items-center  rounded-xl">
                            <MdMailOutline className="text-lg text-accentBlue" />
                        </div>
                        <div className="w-full flex flex-col">
                            <h1 className="text-sm font-semibold">Eng - Send grammar homework</h1>
                            <p className="text-secondary text-xs mt-1">29 Sep 2019, Wednesday</p>
                        </div>
                    </div>

                    <div className="w-full flex gap-3 items-center">
                        <div className="w-14 h-12 bg-accentBlue/10 flex justify-center items-center  rounded-xl">
                            <MdMailOutline className="text-lg text-accentBlue" />
                        </div>
                        <div className="w-full flex flex-col">
                            <h1 className="text-sm font-semibold">Spanish - Send essey</h1>
                            <p className="text-secondary text-xs mt-1">05 Oct 2019, Monday</p>
                        </div>
                    </div>
                </div>


            </div>
        </Layout>
    )
}

export default Dashboard
