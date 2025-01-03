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
    <div className="text-white p-6 mt-10 border rounded-lg bg-[#30333D] ">
      <h2 className="text-2xl font-bold mb-6">Feedback</h2>

      {/* Feedback List */}
      <div className="space-y-6">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="bg-[#424756] p-6 rounded-lg flex flex-col"
          >
            <div className="flex justify-between items-center">
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
            {feedback.response && (
              <div className="text-sm text-gray-300 mb-2">
                <p className="text-sm text-white">{feedback.response}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-[#1F202A] p-6 shadow-lg w-[600px] border rounded-lg m-5">
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
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                className="w-full h-24 bg-[#30333D] text-gray-300 px-4 py-3 rounded-lg outline-none"
                placeholder="Add comments here..."
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold"
                onClick={handleResponseSubmit}
              >
                Submit
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
    <Topbar title={"Support and Feedback"} icon={blockIcons}/>
      <Feedback />
    </div>
  );
};

export default Page;
