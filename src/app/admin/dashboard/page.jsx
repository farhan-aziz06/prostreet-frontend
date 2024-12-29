'use client';
import React, { useMemo } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { FaBasketballBall, FaFutbol, FaTableTennis, FaGolfBall } from 'react-icons/fa';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Registering required components
ChartJS.register(
    CategoryScale,     // For x-axis
    LinearScale,       // For y-axis
    BarElement,        // For bar chart elements
    ArcElement,        // For doughnut chart elements
    Title,             // For chart titles
    Tooltip,           // For tooltips
    Legend             // For legend
);

export default function Dashboard() {
    // Dummy data for charts
    const barData = useMemo(() => ({
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
            {
                label: 'Registered Users',
                data: [20, 40, 50, 30],
                backgroundColor: '#FCD34D',
                borderRadius: 4,
            },
        ],
    }), []);

    const doughnutData = useMemo(() => ({
        labels: ['Soccer Matches', 'Basketball Matches', 'Tennis Matches', 'Golf'],
        datasets: [
            {
                data: [90, 60, 50, 33],
                backgroundColor: ['#34D399', '#F87171', '#60A5FA', '#A78BFA'],
            },
        ],
    }), []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold">
                        Welcome <span className="text-green-400">JHON</span>,
                    </h1>
                    <p className="text-gray-400">Hello, here you can manage your business by zone</p>
                </div>
                <select className="bg-gray-800 border border-gray-700 text-gray-400 rounded px-4 py-2">
                    <option>Select Date</option>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                </select>
            </div>

            {/* Match Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center bg-orange-500 rounded p-4">
                    <FaBasketballBall className="text-2xl mr-3" />
                    <div>
                        <p>Basketball Match</p>
                        <h2 className="text-2xl font-bold">24</h2>
                    </div>
                </div>
                <div className="flex items-center bg-green-500 rounded p-4">
                    <FaFutbol className="text-2xl mr-3" />
                    <div>
                        <p>Soccer Match</p>
                        <h2 className="text-2xl font-bold">24</h2>
                    </div>
                </div>
                <div className="flex items-center bg-blue-500 rounded p-4">
                    <FaTableTennis className="text-2xl mr-3" />
                    <div>
                        <p>Tennis Match</p>
                        <h2 className="text-2xl font-bold">24</h2>
                    </div>
                </div>
                <div className="flex items-center bg-purple-500 rounded p-4">
                    <FaGolfBall className="text-2xl mr-3" />
                    <div>
                        <p>Golf Match</p>
                        <h2 className="text-2xl font-bold">24</h2>
                    </div>
                </div>
            </div>

            {/* User Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[1, 2].map((_, i) => (
                    <div key={i} className="bg-gray-800 rounded p-4">
                        <div className="flex items-center mb-4">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="User"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <p className="text-sm">11 Sep, 2024</p>
                                <h3 className="text-lg font-bold">Selena John</h3>
                            </div>
                        </div>
                        <div className="text-sm text-gray-400">
                            <p>Female</p>
                            <p>30 yrs old</p>
                            <p className="text-yellow-400">Newyork Street</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-6 rounded">
                    <h3 className="text-lg font-bold mb-4">Monthly Registered Users</h3>
                    {/* <Bar data={barData} options={{ maintainAspectRatio: false }} height={200} /> */}
                </div>
                <div className="bg-gray-800 p-6 rounded">
                    <h3 className="text-lg font-bold mb-4">Monthly Matches</h3>
                    <Doughnut data={doughnutData} />
                </div>
            </div>

            {/* Feedback Section */}
            <div className="bg-gray-800 p-6 rounded">
                <h3 className="text-lg font-bold mb-4">Recent Feedbacks</h3>
                <div className="bg-gray-900 p-4 rounded mb-4">
                    <p className="text-sm text-gray-400">User 1</p>
                    <p>This app is great! Could you add more sports?</p>
                    <button className="mt-2 px-4 py-2 bg-green-500 rounded text-white hover:bg-green-600">
                        Respond
                    </button>
                </div>
            </div>
        </div>
    );
}
