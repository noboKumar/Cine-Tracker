"use client"
import { useSession } from "next-auth/react";
import React from "react";

const UserInfo = () => {
  const {data: session} = useSession();
  console.log(session);
  return <div className="text-lg font-semibold">Logged in user: {session?.user?.email}</div>;
};

export default UserInfo;
