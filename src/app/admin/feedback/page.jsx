'use client';

import { blockIcons } from '@/components/resources/icons';
import Topbar from '@/components/topbar';
import React, { useState } from 'react';

const Feedback = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [responseText, setResponseText] = useState('');
  const [feedbacks, setFeedbacks] = useState([
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
  ]);

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
    <div className="text-white p-6 mt-10 border rounded-xl border-[#8B909F] bg-[#30333D] ">
      <h2 className="text-2xl font-bold md:mb-6 px-5 py-5">Feedback</h2>

      {/* Feedback List */}
      <div className="space-y-6 md:px-5 pb-7">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-[#424756] p-6 rounded-lg flex flex-col"
          >
            <div className="lg:flex flex-col px-3 md:flex-row justify-between items-center">
              <div>
                <p className="text-lg font-bold mb-2">{feedback.user}</p>
                <p className="text-lg mb-2">{feedback.message}</p>
                {feedback.response && (
                  <div className="text-sm w-1/2">
                    <p className="lg:text-lg max-w-1/2 break-words"><span className='font-bold pr-4'>Response: </span> {feedback.response}</p>
                  </div>
                )}
              </div>
              <button
                className="bg-[#14AE5C] text-white px-10 lg:px-20 py-4 rounded-xl"
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
                className="bg-[#14AE5C] text-white px-10 lg:px-20 py-4 rounded-xl"
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

const Page = () => {
  return (
    <div className="px-10 py-7  min-h-screen">
      <Topbar title={"Support and Feedback"} icon={blockIcons} />
      <Feedback />
    </div>
  );
};

export default Page;
