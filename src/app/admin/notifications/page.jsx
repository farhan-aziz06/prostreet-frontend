import { blockIcons, ovalIcon } from '@/components/resources/icons';
import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

const Notifications=()=>{
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
    <div className="min-h-screen bg-[#1A1D26] text-white px-5 md:px-10 py-7">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
        <span>{blockIcons}</span>
        <span>Notifications</span>
      </h2>

      {/* Notifications List */}
      <div className="bg-[#30333D] border border-[#8B909F] rounded-lg p-2 md:p-4 space-y-3 md:space-y-7">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex justify-between items-start bg-custom-cardBg p-4 rounded-lg"
          >
            <div className="flex item-start  space-x-7">
              <span className="mt-2 md:0">{ovalIcon}</span>
              <div>
                <p className="font-bold mt-1 text-xl">{notification.agent}</p>
                <p className="text-lg font-medium text-custom-textColor md:w-[60%]">
                  Message: {notification.message}
                </p>
              </div>
            </div>
            <div className="bg-gray-700 text-nowrap px-3 py-1 rounded-full text-lg font-semibold">
              {notification.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications