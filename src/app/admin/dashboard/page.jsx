'use client';
import React, { useMemo, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import Image from 'next/image';
import Profile from './player profile.png';
import { basketballIcon, byeIcon, startFeedbackIcon, upArrowIcon } from '@/components/resources/icons';
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
    const [responseText, setResponseText] = useState('');
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
        setResponseText(feedback.response); // Pre-fill with existing response
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedFeedback(null);
        setModalOpen(false);
        setResponseText('');
    };

    const handleResponseSubmit = () => {
        if (selectedFeedback) {
            setFeedbacks((prevFeedbacks) =>
                prevFeedbacks.map((feedback) =>
                    feedback === selectedFeedback
                        ? { ...feedback, response: responseText }
                        : feedback
                )
            );
            closeModal();
        }
    };

    return (
        <div className="text-white p-6 mt-2 border rounded-xl border-[#8B909F] bg-[#30333D] ">
            <div className="flex items-center justify-start gap-3 mb-6 p-6 border-b border-[#E4E4E466]">
                <span className=''>{startFeedbackIcon}</span>
                <h2 className="text-2xl font-bold ">Recent Feedback</h2>
            </div>

            {/* Feedback List */}
            <div className="space-y-6 px-5 pb-7">
                {feedbacks.map((feedback, index) => (
                    <div
                        key={index}
                        className="bg-[#424756] p-6 rounded-lg flex flex-col"
                    >
                        <div className="flex flex-col px-3 md:flex-row justify-between items-center">
                            <div>
                                <p className="text-lg font-bold mb-2">{feedback.user}</p>
                                <p className="text-lg mb-2">{feedback.message}</p>
                                {feedback.response && (
                                    <div className="text-sm mb-2">
                                        <p className="text-lg "><span className='font-bold pr-4'>Response: </span> {feedback.response}</p>
                                    </div>
                                )}
                            </div>
                            <button
                                className="bg-[#14AE5C] text-white px-20 py-4 rounded-xl"
                                onClick={() => openModal(feedback)}
                            >
                                Respond
                            </button>
                        </div>

                    </div>
                ))}
            </div>

            {/* Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setModalOpen(false)} // Close modal when clicking outside
                >
                    <div
                        className="bg-[#222530] p-12 py-10 shadow-lg w-[1028px] border border-[#797979] rounded-lg m-5"
                        onClick={(e) => e.stopPropagation()} // Prevent click inside from closing the modal
                    >
                        <h2 className="text-xl font-bold text-center text-white mb-3">
                            Add a Response
                        </h2>
                        <p className="text-lg text-center font-semibold text-gray-300 mb-4">
                            {selectedFeedback?.user}
                        </p>
                        <div className="text-sm text-gray-400 mb-6">
                            <p className="font-semibold text-lg text-white">Feedback:</p>
                            <span className="text-md text-white">{selectedFeedback?.message}</span>
                        </div>
                        <div className="mb-6">
                            <label className="font-semibold text-lg text-white block mb-2 py-3">
                                Respond:
                            </label>
                            <textarea
                                value={responseText}
                                onChange={(e) => setResponseText(e.target.value)}
                                className="w-full h-24 bg-[#30333D] text-gray-300 px-4 py-3 rounded-2xl outline-none"
                                placeholder="Add comments here..."
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-[#14AE5C] text-white px-20 py-4 rounded-xl"
                                onClick={handleResponseSubmit}
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
    const [isOpen, setIsOpen] = useState(false);
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
                hoverBackgroundColor: '#14AE5C',
                borderRadius: 7,
                barThickness: 50,
                barPercentage: 0.7,
                categoryPercentage: 0.9,
            },
        ],
    }), []);

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        // Replace with your icon
                        return `${context.raw} users`;
                    },
                },
                backgroundColor: '#09655A',
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 10,
                displayColors: false, // Remove color indicator box
                position: 'nearest', // Position the tooltip near the bar
                yAlign: 'bottom', // Align tooltip above the bar
                xAlign: 'center', // Align tooltip center horizontally
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#fff' },
            },
            y: {
                grid: { display: false }, // Hide Y-axis grid
                ticks: { display: false }, // Hide Y-axis labels
            },
        },
    };


    const doughnutData = useMemo(() => ({
        labels: ['Soccer Matches', 'Basketball Matches', 'Tennis Matches', 'Golf'],
        datasets: [
            {
                data: [120, 90, 60, 30], // Match data
                backgroundColor: ['#B6F36A', '#FF8E4F', '#84CDEE', '#B891EB'],
                borderWidth: 2, // Set border width for the gap
                borderColor: '#1F2937' // Colors for sections
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
            },
        },
        cutout: '80%', // Decrease width of filled part
    };


    return (
        <div className="min-h-screen bg-[#1A1D26] text-white">
            {/* Header */}
            <div className="md:flex justify-between items-center mb-6 px-5 md:px-10">
                <div className="flex gap-5 items-start">
                    <span className='hidden md:flex  mt-2 '>{byeIcon}</span>
                    <div>
                        <h1 className="text-2xl font-bold">
                            Welcome <span className="text-green-400">JHON</span>,
                        </h1>
                        <p className="text-gray-400">Hello, here you can manage your business by zone</p>
                    </div>
                </div>
                <div className="relative hidden md:flex">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-transparent border border-[#DEDEDE99] text-white rounded-xl px-5 py-3 outline-none flex items-center justify-between gap-24"
                    >
                        <span>Select Date</span>
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-[#1A1D26] border border-[#DEDEDE99] rounded-xl shadow-lg">
                            <ul className="text-white">
                                <li className="px-5 py-4 hover:bg-[#DEDEDE33] cursor-pointer rounded-xl">Today</li>
                                <li className="px-5 py-4 hover:bg-[#DEDEDE33] cursor-pointer rounded-xl">This Week</li>
                                <li className="px-5 py-4 hover:bg-[#DEDEDE33] cursor-pointer rounded-xl">This Month</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Matches Section */}
            <div className="md:flex items-start justify-start gap-2 md:gap-5 px-5 md:px-10">
                <div>
                    {['Basketball', 'Soccer', 'Tennis', 'Golf'].map((sport, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between gap-4 rounded p-4 md:w-[460px] py-4 my-3 bg-[#${['FF8E4F', 'B6F36A', '84CDEE', 'B891EB'][index]
                                }]`}
                        >
                            <div className="flex items-center justify-start gap-5 pl-5">
                                <div className='rounded-3xl bg-[#01010126] p-3'>
                                    <span>{basketballIcon}</span>
                                </div>
                                <p className="text-black text-sm">{sport} Match</p>
                            </div>
                            <h2 className="text-2xl text-black font-bold pr-5">24</h2>
                        </div>
                    ))}
                </div>

                {/* User Profiles */}
                {[...Array(2)].map((_, idx) => (
                    <div key={idx} className="border border-[#767E97] rounded-lg px-5 py-9 md:w-[35%] mt-2 bg-[#30333D]">
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
                                <button className="text-[#14AE5C] rounded-3xl bg-[#FFFFFF1A] px-7 py-2">
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
            <div className='md:flex justify-start gap-4 px-5 md:px-10 mt-3'>
                <div className="bg-[#30333D] p-3 md:p-6 rounded-lg border border-[#767E97] w-full md:w-[60%] mb-5">
                    <h2 className="text-white text-lg font-bold mb-4">Monthly Registered Users</h2>
                    <div className="text-white text-4xl font-semibold mb-4">24000</div>
                    {/* Scrollable container for horizontal scroll */}
                    <div className="overflow-auto">
                        <div style={{ minWidth: '800px', minHeight: "300px" }}>
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
