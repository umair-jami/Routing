import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul
        className="flex bg-slate-500 fixed top-0 w-full justify-center
      "
      >
        <Link href={"/"}>
          <li className="m-3 text-white">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="m-3 text-white">About</li>
        </Link>
        <Link href={"/contact"}>
          <li className="m-3 text-white">Contact</li>
        </Link>
        <Link href={"/navbar"}>
          <li className="m-3 text-white">Navbar</li>
        </Link>
      </ul>
    </div>
  )
}
