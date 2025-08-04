"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const BookMarkButton = (id) => {
  const { data: session, status } = useSession();
  const handleBookMark = async () => {
    if (status !== "authenticated") {
      toast.error("Please login to bookmark");
      return;
    }
    try {
      const res = await axios.post("/api/bookmark", {
        userEmail: session?.user?.email,
        movieId: id,
        timeStamp: new Date(),
      });
      console.log("Success", res.data);
      toast.success("Bookmarked Added");
    } catch (err) {
      console.error("Bookmark failed", err.response?.data || err.message);
      toast.error("This didn't work.");
    }
  };
  return (
    <button onClick={handleBookMark}>
      <MdOutlineBookmarkAdd className="cursor-pointer" size={30} />
    </button>
  );
};

export default BookMarkButton;
