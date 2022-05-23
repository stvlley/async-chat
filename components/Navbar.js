import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "react-scroll/modules/components/Link";

const Navbar = ({ authenticatedState }) => {

  const router = useRouter();

  // const user = session.user
  const handleClick = (e) => {
    e.preventDefault()
    router.push('signup')
  }


  return (
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="/">
            async // chat
          </a>

          {/* hamburger */}
          <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <span class="block relative w-6 h-px rounded-sm bg-white"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <button onClick={() => router.push('/profile')} >Profile</button>
            {
              authenticatedState === 'not-authenticated' && (<li class="nav-item">
                <Link href="/login" class="p-2 flex items-center text-xs uppercase font-bold  text-white hover:opacity-75" >
                  <i class="text-lg text-white " /><span class="ml-2">Sign In</span>
                </Link>
              </li>)
            }
            <Link href="/pretected">
            <i class="text-lg text-white " /><span class="ml-2">protected</span>

            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;