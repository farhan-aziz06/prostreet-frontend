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
      <h2 className="text-2xl font-bold mb-6 gap-4 flex items-center space-x-2">
        <span>{blockIcons}</span>
        <span>Notifications</span>
      </h2>

      {/* Notifications List */}
      <div className="bg-[#30333D] border border-[#8B909F] rounded-lg p-2 mt-10 md:p-10 space-y-3 md:space-y-7">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="lg:flex justify-between items-start bg-custom-cardBg p-4 rounded-lg"
          >
            <div className="flex item-start  space-x-7">
              <span className="mt-2 md:0">{ovalIcon}</span>
              <div>
                <p className="font-bold pb-4 text-xl">{notification.agent}</p>
                <p className="text-lg font-medium text-custom-textColor xl:w-[60%]">
                  Message: {notification.message}
                </p>
              </div>
            </div>
            <div className="bg-green-700/20 text-nowrap px-6 py-1 mx-12 rounded-full text-lg font-semibold w-28">
              {notification.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications