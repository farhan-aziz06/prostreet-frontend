import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

export default function Notifications() {
  const notifications = [
    {
      agent: 'Agent Rose',
      message: 'Please, kindly do take a snap-shot of the card.',
      time: '3 mins',
    },
    {
      agent: 'Agent Rose',
      message: 'Please, kindly do take a snap-shot of the card.',
      time: '3 mins',
    },
    {
      agent: 'Agent Rose',
      message: 'Please, kindly do take a snap-shot of the card.',
      time: '3 mins',
    },
    {
      agent: 'Agent Rose',
      message: 'Please, kindly do take a snap-shot of the card.',
      time: '3 mins',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
        <FaDotCircle className="text-green-400" />
        <span>Notifications</span>
      </h2>

      {/* Notifications List */}
      <div className="bg-gray-800 rounded-lg p-4 space-y-4">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-700 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <FaDotCircle className="text-green-400 text-lg" />
              <div>
                <p className="font-bold">{notification.agent}</p>
                <p className="text-sm text-gray-400">
                  Message: {notification.message}
                </p>
              </div>
            </div>
            <div className="bg-gray-600 text-green-400 px-3 py-1 rounded-full text-sm">
              {notification.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
