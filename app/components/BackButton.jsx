"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const route = useRouter();
  return (
    <button
      onClick={() => route.back()}
      className="absolute top-4 left-4 bg-black/50 border-2 border-white px-3 py-2 rounded-lg z-50 cursor-pointer flex items-center gap-2"
    >
      <FaArrowLeft /> Back
    </button>
  );
};

export default BackButton;