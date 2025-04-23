import React from "react";

export default function AspirasiModal({ isOpen, onClose, name, angkatan, aspiration }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-[#00000080] transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="bg-white dark:bg-[#115C5B] rounded-2xl p-8 max-w-2xl w-full mx-4 z-10 relative max-h-[80vh] flex flex-col">
        <button 
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex items-center gap-5 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src="elon.jpg" alt="profile picture" className="object-cover" />
          </div>
          <div>
            <p className="font-bold text-xl">{name}</p>
            <p className="font-light text-sm text-gray-400">{angkatan}</p>
          </div>
        </div>
        
        <div className="w-full overflow-y-auto pr-2 flex-grow">
          <p className="text-lg">"{aspiration}"</p>
        </div>
      </div>

    </div>
  );
}