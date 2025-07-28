"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavLink({href, children, className}) {
    const pathName = usePathname();
    const isActive = pathName === href;
  return (
    <Link href={href} className={isActive? "bg-gray-200 px-2 py-1 rounded" : ""}>{children}</Link>
  )
}
