import React from 'react';
import { useState } from 'react';
import Link from "next/link";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import Image from 'next/image';
import Dropdown from '@/pages/Dropdown';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const burg = document.getElementById("burg");

  const handleNav = () => {
    // setting menuOpen to the opposite state of menuOpen at default, onClick
    setMenuOpen(!menuOpen)
    document.getElementById("burg").style.display="none";
    // burg.style.display === 'none' ? '' : 'none';


  }

  return (
    <>
    <nav className="font-body">
      <div id="" className="justify-between items-center flex">
          <ul style={{padding: '5% 5% 2% 5%'}} className="z-10 md:visible sm:invisible justify-center flex w-screen text-center md:gap-8 lg:gap-12 sm:text-sm md:text-md lg:text-lg">
            {/* <Link href={"/"}>
              <li className="hover:text-olive">Home</li>
            </Link> */}
            <Link href={"/mainGallery"}>
              <li className="hover:text-olive mt-3">Main Gallery</li>
            </Link>
            <Link href={"/calendar"}>
              <li className="hover:text-olive mt-3">Calendar</li>
            </Link>
            
            <Link href="/">
            <Image 
            src="/logo.png"
            width={100}
            height={100}
            alt='CGAC logo'
            />
            </Link>
            
            <Link href={"/market"}>
              <li className="hover:text-olive mt-3">Marketplace</li>
            </Link>
            {/* <Link href={"/ingen"}>
              <li className="hover:text-olive">InGen</li>
            </Link> */}
            {/* <Link href={"/archive"}>
              <li className="hover:text-olive">Archive</li>
            </Link> */}
            <Link href={"/aboutUs"}>
              <li className="hover:text-olive mt-3">About us</li>
            </Link>
          </ul>
        </div>
        
        {/* HAMBURGER */}
        <div
          onClick={handleNav} 
          className= "z-20 md:hidden cursor-pointer pl-24 mt-[-7%] pb-5 hover:text-darkBlue relative "
        >
          <GiHamburgerMenu onClick={handleNav} className='z-20' id='burg'/>
        </div>    

        {/* SLIDE OUT NAV */}
      <div
        id='slideOut'
        className={
          menuOpen
          ? "absolute z-10 left-0 top-0 w-[65%] md:hidden w-screen bg-olive p-6 mb-10 text-center"
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
        <div className={menuOpen ? "flex float-left" : "hidden"}>
          <ul className='gap-4 flex text-center'>
            <Link href={"/mainGallery"}>
              <li className="hover:text-princeOrange text-frenchGrey">Main Gallery</li>
            </Link>
            <Link href={"/calendar"}>
              <li className="hover:text-princeOrange text-frenchGrey">Calendar</li>
            </Link>
            <Link href="/">
            <Image 
            src="/logo.png"
            width={50}
            height={50}
            alt='CGAC logo'
            />
            </Link>
            <Link href={"/market"}>
              <li className="hover:text-princeOrange text-frenchGrey">Marketplace</li>
            </Link>
            {/* <Link href={"/archive"}>
              <li className="hover:text-princeOrange text-frenchGrey">Archive</li>
            </Link> */}
            <Link href={"/aboutUs"}>
              <li className="hover:text-princeOrange text-frenchGrey">About us</li>
            </Link>
          {/* <div className="flex gap-2 py-1">
            <AiFillInstagram />
            <AiOutlineMail />
          </div> */}
          </ul>
        </div>
        </div>
      </nav>
    
      <Image className='md:mt-[-4%] sm:mt-[-20%] mb-[-5%] z-0'
      src="/bushDivider2.png"
      width={1500}
      height={100}
      alt='bushy nav divider'
      />
    </>
  );
} 

export default Nav