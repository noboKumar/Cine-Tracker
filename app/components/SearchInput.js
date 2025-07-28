import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "./ui/button";

export default function SearchInput() {
  return (
    <div>
      <div className="flex items-center gap-2 w-1/5">
        <Input
          type="text"
          placeholder="Search for movies..."
        />
        <Button type="submit" variant={"outline"}>Search</Button>
      </div>
    </div>
  );
}
