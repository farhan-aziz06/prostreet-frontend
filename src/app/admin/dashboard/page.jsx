'use client';
import React, { useMemo, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import Image from 'next/image';
import Profile from './player profile.png';
import { basketballIcon, byeIcon } from '@/components/resources/icons';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend,
    ArcElement,
    Tooltip,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);
const Feedback = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    const feedbacks = [
        {
            user: 'User 1',
            message: 'This app is great!. Could you add more sports?',
            response: '',
        },
        {
            user: 'User 2',
            message: 'Amazing work, but can you improve performance?',
            response: '',
        },
    ];

    const openModal = (feedback) => {
        setSelectedFeedback(feedback);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedFeedback(null);
        setModalOpen(false);
    };

    return (
        <div className="text-white p-6 mt-10 border border-[#767E97] rounded-lg bg-[#30333D]">
            <h2 className="text-2xl font-bold mb-6">Feedback</h2>

            {/* Feedback List */}
            <div className="space-y-6">
                {feedbacks.map((feedback, index) => (
                    <div
                        key={index}
                        className="bg-[#424756] p-6 rounded-lg flex justify-between items-center"
                    >
                        <div>
                            <p className="text-lg font-semibold mb-2">{feedback.user}</p>
                            <p className="text-sm text-gray-300 mb-2">{feedback.message}</p>
                        </div>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold"
                            onClick={() => openModal(feedback)}
                        >
                            Respond
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
                    <div className="bg-[#1F202A] p-6 shadow-lg w-[600px] border rounded-lg">
                        <h2 className="text-xl font-bold text-center text-white mb-6">
                            Add a Response
                        </h2>
                        <p className="text-lg text-center font-semibold text-gray-300 mb-4">{selectedFeedback?.user}</p>
                        <div className="text-sm text-gray-400 mb-6">
                            <p className="font-semibold text-lg text-white">Feedback:</p>
                            <span className="text-md text-white"> {selectedFeedback?.message}</span>
                        </div>
                        <div className="mb-6">
                            <label className="font-semibold text-lg text-white block mb-2">
                                Respond:
                            </label>
                            <textarea
                                className="w-full h-24 bg-[#30333D] text-gray-300 px-4 py-3 rounded-lg outline-none"
                                placeholder="Add comments here..."
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold"
                                onClick={closeModal}
                            >
                                Respond
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
const Dashboard = () => {
    const barData = useMemo(() => ({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Monthly Registered Users',
                data: [1000, 2000, 1500, 3000, 2500, 1800, 2200, 2700, 4000, 3000, 2800, 3200],
                backgroundColor: (context) => {
                    const colors = Array(context.raw.length).fill('#FEDB8A');
                    return colors;
                },
                borderRadius: 5,
                barThickness: 20,
            },
        ],
    }), []);
    const doughnutData = useMemo(() => ({
        labels: ['Soccer Matches', 'Basketball Matches', 'Tennis Matches', 'Golf'],
        datasets: [
            {
                data: [120, 90, 60, 30], // Match data
                backgroundColor: ['#B6F36A', '#FF8E4F', '#84CDEE', '#B891EB'], // Colors for sections
                hoverOffset: 4,
            },
        ],
    }), []);
    const doughnutOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }, // Disable default legend
            tooltip: {
                backgroundColor: '#1F2937',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                borderColor: '#FFFFFF',
                borderWidth: 1,
            },
        },
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: { label: (context) => `${context.raw} users` },
                backgroundColor: '#14AE5C',
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 5,
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#fff' },
            },
            y: {
                grid: { color: '#424756' },
                ticks: { color: '#fff' },
            },
        },
    };

    return (
        <div className="min-h-screen bg-[#1A1D26] text-white md:p-6">
            {/* Header */}
            <div className="md:flex justify-between items-center mb-6 px-5 md:px-10">
                <div className="flex gap-5 items-center">
                    <span className='hidden md:flex'>{byeIcon}</span>
                    <div>
                        <h1 className="text-2xl font-bold">
                            Welcome <span className="text-green-400">JHON</span>,
                        </h1>
                        <p className="text-gray-400">Hello, here you can manage your business by zone</p>
                    </div>
                </div>
                <button className=" hidden md:flex bg-transparent border border-[#DEDEDE99] text-white rounded-xl px-5 py-4">
                    <select className="bg-transparent border-none px-3">
                        <option className=''>Select Date</option>
                        <option className=''>Today</option>
                        <option className=''>This Week</option>
                        <option className=''>This Month</option>
                    </select>
                </button>
            </div>

            {/* Matches Section */}
            <div className="md:flex items-start justify-start gap-2 md:gap-10 px-5 md:px-10">
                <div>
                    {['Basketball', 'Soccer', 'Tennis', 'Golf'].map((sport, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between gap-4 rounded p-4 md:w-[360px] py-4 my-3 bg-[#${['FF8E4F', 'B6F36A', '84CDEE', 'B891EB'][index]
                                }]`}
                        >
                            <div className="flex items-center justify-start gap-5">
                                <span>{basketballIcon}</span>
                                <p className="text-black text-sm">{sport} Match</p>
                            </div>
                            <h2 className="text-2xl text-black font-bold">24</h2>
                        </div>
                    ))}
                </div>

                {/* User Profiles */}
                {[...Array(2)].map((_, idx) => (
                    <div key={idx} className="border border-[#767E97] rounded-lg px-5 py-4 md:w-[25%] mt-2 bg-[#30333D]">
                        <div className="flex items-start justify-between">
                            <div>
                                <Image
                                    src={Profile}
                                    alt="user image"
                                    width={100}
                                    height={100}
                                    className="pb-5"
                                />
                                <p>11 Sep, 2024</p>
                                <h1 className="text-[#14AE5C] font-semibold text-xl py-2">Selena John</h1>
                            </div>
                            <div>
                                <button className="text-[#14AE5C] rounded-3xl bg-[#FFFFFF1A] px-4 py-3">
                                    New user
                                </button>
                            </div>
                        </div>
                        <div className="border-t border-[#DDDDDD66] mx-5 my-3"></div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="font-semibold text-lg">Female</h1>
                                <p className="text-sm">30 yrs old</p>
                            </div>
                            <div className="font-semibold text-xl text-[#FCCE6E]">
                                <p>Newyork Street</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart Section */}
            <div className='md:flex justify-start gap-4 px-5 md:px-10 mt-10'>
                <div className="bg-[#30333D] p-3 md:p-6 rounded-lg border border-[#767E97] w-full md:w-[60%] mb-5">
                    <h2 className="text-white text-lg font-bold mb-4">Monthly Registered Users</h2>
                    <div className="text-white text-4xl font-semibold mb-4">24000</div>
                    {/* Scrollable container for horizontal scroll */}
                    <div className="overflow-auto">
                        <div style={{ minWidth: '800px', minHeight:"300px"}}>
                            <Bar data={barData} options={barOptions} />
                        </div>
                    </div>
                </div>


                <div className="bg-[#30333D] p-6 rounded-lg border border-[#767E97] md:w-[40%] md:flex items-start justify-between mb-5">
                    <div>
                        <h2 className="text-white text-lg font-bold mb-20">Monthly Matches</h2>
                        <div className="relative" style={{ height: '200px', width: '200px', margin: '0 auto' }}>
                            <Doughnut data={doughnutData} options={doughnutOptions} />
                            {/* Centered Text */}
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <div>
                                    <p className="text-white text-4xl font-bold">233</p>
                                    <p className="text-gray-400 text-lg font-medium text-center">Matches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Custom Legend */}
                    <div className="mt-5 md:mt-32 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#B6F36A]"></span>
                            <p className="text-gray-400">Soccer Matches</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#FF8E4F]"></span>
                            <p className="text-gray-400">Basketball Matches</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#84CDEE]"></span>
                            <p className="text-gray-400">Tennis Matches</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#B891EB]"></span>
                            <p className="text-gray-400">Golf</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-5 md:px-10 pb-5'>
                <Feedback />
            </div>
        </div>
    );
};

export default Dashboard;
