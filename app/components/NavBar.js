import { Button } from "@/components/ui/button";
import React from "react";
import Container from "./Container";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <nav className=" bg-slate-200 shadow-md">
      <Container className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-950">
            Cine<span className="text-amber-700">Tracker</span>
          </h1>
        </div>
        <div>
          <ul className="flex items-center space-x-6 text-xl">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/movies">Movies</NavLink>
            </li>
            <li>
              <NavLink href="/watchlist">My Watchlist</NavLink>
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
