import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-gray-600">
        Loading...
      </p>
    </div>
  );
};

export default loading;
