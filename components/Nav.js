import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import Image from 'next/image';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    // setting menuOpen to the opposite state of menuOpen at default, onClick
    setMenuOpen(!menuOpen)
  }

  return (
    <nav id="nav" className="font-body">
      <div className="justify-between items-center flex">
        <div id="leftside" className="">
          <Link href="/">
            <Image 
            src="/logo.png"
            width={100}
            height={100}
            />
          </Link>
        </div>

        <div id="middle" className="hidden md:flex">
          <ul className="flex gap-12 text-lg">
            <Link href={"/"}>
              <li className="hover:text-olive">Home</li>
            </Link>
            <Link href={"/mainGallery"}>
              <li className="hover:text-olive">Main Gallery</li>
            </Link>
            <Link href={"/market"}>
              <li className="hover:text-olive">Marketplace</li>
            </Link>
            {/* <Link href={"/ingen"}>
              <li className="hover:text-olive">InGen</li>
            </Link> */}
            {/* <Link href={"/archive"}>
              <li className="hover:text-olive">Archive</li>
            </Link> */}
            <Link href={"/aboutUs"}>
              <li className="hover:text-olive">About us</li>
            </Link>
          </ul>
        </div>

        <button
          id="rightside"
          className="pl-10 hover:text-darkBlue cursor-pointer hidden md:flex"
        >
          <BsFillMoonStarsFill />
        </button>
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer pl-24 hover:text-darkBlue"
        >
          <GiHamburgerMenu />
        </div>
      </div>
      {/* <div className="border-b-2 border-yellow-700"></div> */}

      {/* SLIDE OUT NAV */}
      <div
        id='slideOut'
        className={
          menuOpen
          ? "absolute z-10 left-0 top-0 w-[65%] md:hidden h-[100%] bg-violet-100 p-10"
          : " left[-100%] absolute"
        }
      >
        <div
          className={
            menuOpen ? "flex w-full items-center justify-end" : "hidden"
          }
        >
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose />
          </div>
        </div>
        <div className={menuOpen ? "flex-col float-left" : "hidden"}>
          <ul>
            <Link href={"/"}>
              <li className="hover:text-green-700 py-10">Main Gallery</li>
            </Link>
            <Link href={"/market"}>
              <li className="hover:text-green-700 py-10">Marketplace</li>
            </Link>
            <Link href={"/ingen"}>
              <li className="hover:text-green-700 py-10">InGen</li>
            </Link>
            <Link href={"/archive"}>
              <li className="hover:text-green-700 py-10">Archive</li>
            </Link>
            <Link href={"/aboutUs"}>
              <li className="hover:text-green-700 py-10">About us</li>
            </Link>
          </ul>
          <div className="flex flex-row">
            <AiFillInstagram />
            <AiOutlineMail />
          </div>
        </div>
      </div>
<Image
src="/bushDivider2.png"
width={1500}
height={100}
/>
    </nav>
  );
} 

export default Nav