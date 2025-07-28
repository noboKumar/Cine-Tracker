import { Button } from "@/components/ui/button";
import React from "react";
import Container from "./Container";

export default function NavBar() {
  return (
    <nav className=" bg-slate-100 shadow-md">
      <Container className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-950">
            Cine<span className="text-amber-700">Tracker</span>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-4 text-xl">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Movies</a>
            </li>
            <li>
              <a>My Watchlist</a>
            </li>
          </ul>
        </div>
        <div>
          <Button>login</Button>
        </div>
      </Container>
    </nav>
  );
}
