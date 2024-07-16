"use client";

import { useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-primary p-6 rounded shadow-lg max-w-sm">
          <h2 className="text-xl font-bold mb-2">
            Welcome to <b>Career development courses</b>
          </h2>
          <p className="mb-4">Make your Future Bright and Secure With Skills</p>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
