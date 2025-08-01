"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/movies?query=${search}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Search for movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-lg w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}
