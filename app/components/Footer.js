import React from "react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <Container className={"py-6 text-center font-semibold text-blue-950"}>
        All rights reserved &copy; {new Date().getFullYear()} CineTracker
      </Container>
    </footer>
  );
}
