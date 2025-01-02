'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import sampleImage from './sample-image.png'; // Replace with your image path
import Topbar from '@/components/topbar';
import { blockIcons, downArrow, upArrowIcon } from '@/components/resources/icons';

const Docs = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedImage, setSelectedImage] = useState(sampleImage);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleView = () => {
    alert('Viewing the document...');
  };

  const handleUploadAgain = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Assuming you're using Next.js file handling
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      alert('Document uploaded successfully!');
    }
  };

  const handleRemove = () => {
    setSelectedImage(null);
    alert('Document removed!');
  };

  return (
    <div className="text-white p-6 mt-10 border rounded-lg bg-[#30333D]">
      {/* Privacy Policy Section */}
      <div className="border-b border-gray-700 bg-[#424756] rounded-lg">
        <div
          className="p-4 flex justify-start items-center gap-5 cursor-pointer"
          onClick={() => toggleSection('privacyPolicy')}
        >
          <span className="text-gray-400">{activeSection === 'privacyPolicy' ? <span>{upArrowIcon}</span> : <span>{downArrow}</span>}</span>
          <h2 className="text-lg font-bold">Privacy Policy</h2>
        </div>
        {activeSection === 'privacyPolicy' && (
          <div className="p-6 bg-[#424756] flex items-center gap-4">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="Privacy Policy"
                className="rounded-lg"
                width={300}
                height={150}
              />
            ) : (
              <div className="text-gray-400">No document uploaded</div>
            )}
            <div className="flex flex-col space-y-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold"
                onClick={handleView}
              >
                View
              </button>
              <label
                htmlFor="upload-input"
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer text-center"
              >
                Upload Again
                <input
                  id="upload-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUploadAgain}
                />
              </label>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Terms & Conditions Section */}
      <div className="border-b border-gray-700 bg-[#424756] rounded-lg mt-5">
        <div
          className="p-4 flex justify-start items-center gap-5 cursor-pointer"
          onClick={() => toggleSection('termsConditions')}
        >
          <span className="text-gray-400">{activeSection === 'termsConditions' ? <span>{upArrowIcon}</span> : <span>{downArrow}</span>}</span>
          <h2 className="text-lg font-bold">Term and Conditions</h2>
        </div>
        {activeSection === 'termsConditions' && (
          <div className="p-6 bg-[#424756]">
            <p className="text-gray-300">Details about terms and conditions...</p>
          </div>
        )}
      </div>

      {/* Community Guidelines Section */}
      <div className="border-b border-gray-700 bg-[#424756] rounded-lg mt-5">
        <div
          className="p-4 flex justify-start items-center gap-5 cursor-pointer"
          onClick={() => toggleSection('communityGuidelines')}
        >
          <span className="text-gray-400">{activeSection === 'communityGuidelines' ? <span>{upArrowIcon}</span> : <span>{downArrow}</span>}</span>
          <h2 className="text-lg font-bold">Community Guidelines</h2>
        </div>
        {activeSection === 'communityGuidelines' && (
          <div className="p-6 bg-[#424756]">
            <p className="text-gray-300">Details about community guidelines...</p>
          </div>
        )}
      </div>

      {/* Liability Waiver Section */}
      <div className="border-b border-gray-700 bg-[#424756] rounded-lg mt-5">
        <div
          className="p-4 flex justify-start items-center gap-5 cursor-pointer"
          onClick={() => toggleSection('liabilityWaiver')}
        >
          <span className="text-gray-400">{activeSection === 'liabilityWaiver' ? <span>{upArrowIcon}</span> : <span>{downArrow}</span>}</span>
          <h2 className="text-lg font-bold">Liability Wavier & Disclaimer</h2>
        </div>
        {activeSection === 'liabilityWaiver' && (
          <div className="p-6 bg-[#424756]">
            <p className="text-gray-300">Details about liability waiver and disclaimer...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="px-10 py-5 bg-[#1A1D26] min-h-screen">
      <Topbar title={'Documentation'} icon={blockIcons} />
      <Docs />
    </div>
  );
};

export default Page;
