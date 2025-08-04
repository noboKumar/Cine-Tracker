"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }
  if (session?.user) {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-blue-900 font-semibold">
          {session.user.email}
        </span>
        <button
          className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    <Button className="cursor-pointer" onClick={() => signIn()}>
      Login
    </Button>
  );
};

export default LoginButton;
