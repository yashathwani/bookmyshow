import React, { useState } from 'react';
import "./HomePage.css";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNewDesign, setShowNewDesign] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const confirmChanges = () => {
    setIsProcessing(true);
    // Handle changes here
  };

  const discardChanges = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="loader"></div>
      <main id="generatedWebsite"></main>

      <div id="inputModal" className="fixed inset-0 z-[9999] hidden flex items-center justify-center backdrop-blur-sm backdrop-brightness-50">
        <div className="bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden md:max-w-2xl">
          <div className="p-8">
            <textarea
              id="changeInput"
              className="w-full bg-transparent text-3xl text-gray-800 placeholder-gray-500 outline-none resize-none"
              rows="4"
              placeholder="Enter your prompt to change this element"
              autoFocus
            />
          </div>
          <div className="bg-white">
            <div className="flex justify-end items-center px-8 py-6 border-t border-gray-200">
              <button id="cancelChanges" className="text-base text-gray-600 hover:text-gray-800 mr-6">Cancel</button>
              <button
                id="submitChanges"
                className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-center min-w-[140px]"
                onClick={confirmChanges}
              >
                <span className={`button-text ${isProcessing ? 'hidden' : ''}`}>Submit change</span>
                {isProcessing && <span>Processing...</span>}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="fade-overlay" className="fixed inset-0 bg-black opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out z-50"></div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Compare old vs new website
                    </h3>
                    <div className="mt-4 w-full">
                      <div className="flex justify-center space-x-4 mb-4">
                        <label className="inline-flex items-center mb-5 cursor-pointer">
                          <span className="mr-2">Old design</span>
                          <input type="checkbox" checked={!showNewDesign} onChange={() => setShowNewDesign(!showNewDesign)} />
                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                          <span className="ml-2">New design</span>
                        </label>
                      </div>
                      <div className="relative w-full h-[60vh] overflow-auto border border-gray-200 rounded-lg">
                        <div className={`absolute inset-0 p-4 ${showNewDesign ? 'hidden' : ''}`}>
                          <div id="oldDesignContent"></div>
                        </div>
                        <div className={`absolute inset-0 p-4 ${showNewDesign ? '' : 'hidden'}`}>
                          <div id="newDesignContent"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={confirmChanges} disabled={isProcessing} className="w-full inline-flex justify-center rounded-md px-4 py-2 bg-black text-base font-medium text-white hover:bg-gray-800 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                  {isProcessing ? 'Processing...' : 'Confirm Changes'}
                </button>
                <button onClick={discardChanges} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  Discard Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
