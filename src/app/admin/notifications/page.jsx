import { blockIcons, ovalIcon } from '@/components/resources/icons';
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
        <span>{blockIcons}</span>
        <span>Notifications</span>
      </h2>

      {/* Notifications List */}
      <div className="bg-[#30333D] border border-[#8B909F] rounded-lg p-4 space-y-7">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-custom-cardBg p-4 rounded-lg"
          >
            <div className="flex items-center space-x-7">
              <span className=" mb-12">{ovalIcon}</span>
              <div>
                <p className="font-bold mt-1 text-xl">{notification.agent}</p>
                <p className="text-lg font-medium text-custom-textColor w-[60%]">
                  Message: {notification.message}
                </p>
              </div>
            </div>
            <div className="bg-gray-700 px-3 py-1 rounded-full text-lg font-semibold">
              {notification.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
