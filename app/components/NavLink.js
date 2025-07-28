"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavLink({href, children, className}) {
    const pathName = usePathname();
    const isActive = pathName === href || (href === '/' && pathName === '/home');
  return (
    <Link href={href} className={isActive? "bg-slate-500 text-white px-2 py-1 rounded" : ""}>{children}</Link>
  )
}
