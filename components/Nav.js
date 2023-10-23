import React from 'react';
import { useState } from 'react';
import Link from "next/link";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen)
    if (!menuOpen) {
      document.getElementById("burg").style.display="none";  
  } else {
    document.getElementById("burg").style.display="flex"
  }
  }

  return (
    <>
    <nav className="font-body">
      <div id="" className="justify-between items-center flex">
          <ul style={{padding: '5% 5% 2% 5%'}} className="z-10 md:visible sm:invisible justify-center flex w-screen text-center md:gap-8 lg:gap-12 sm:text-sm md:text-md lg:text-lg text-frenchGrey">
            {/* <Link href={"/"}>
              <li className="hover:text-olive">Home</li>
            </Link> */}
            <Link href={"/MainGallery"}>
              <li className="hover:text-princeOrangeOG  mt-1 lg:text-2xl ">Main Gallery</li>
            </Link>
            <Link href={"/calendar"}>
              <li className="hover:text-princeOrangeOG mt-1 lg:text-2xl">Calendar</li>
            </Link>
            
            <Link href="/">
            <Image className='mt-[-5%] lg:scale-150 md:scale- hover:opacity-0'
            src="/frenchLogo.png"
            width={100}
            height={100}
            alt='CGAC logo'
            />
            <Image className='mt-[-49%] lg:scale-150 md:scale- opacity-0 hover:opacity-100'
            src="/persimmonLogo.png"
            width={100}
            height={100}
            alt='CGAC logo'
            />
            </Link>

            
            <Link href={"/Market"}>
              <li className="hover:text-princeOrangeOG mt-1 lg:text-2xl">Marketplace</li>
            </Link>
            {/* <Link href={"/ingen"}>
              <li className="hover:text-olive">InGen</li>
            </Link> */}
            {/* <Link href={"/archive"}>
              <li className="hover:text-olive">Archive</li>
            </Link> */}
            <Link href={"/AboutUs"}>
              <li className="hover:text-princeOrangeOG mt-1 lg:text-2xl">About us</li>
            </Link>
          </ul>
        </div>
        
        {/* HAMBURGER */}
        <div
          className= "z-20 md:hidden cursor-pointer pl-24 mt-[-7%] pb-5 hover:text-darkBlue relative "
        >
          <GiHamburgerMenu onClick={handleNav} className='z-20' id='burg'/>
        </div>    

        {/* SLIDE OUT NAV */}
        <div
        id='slideOut'
        className={
          menuOpen
          ? "absolute z-10 top-0 md:hidden w-screen bg-olive p-6 mb-10 content-center"
          : "left[-100%] absolute"
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
          <ul className='flex w-100 text-center sm:gap-3 bg-olive'>
            <Link href={"/MainGallery"}>
              <li className="hover:text-princeOrangeOG text-frenchGrey sm:text-xs mr-1">Main Gallery</li>
            </Link>
            <Link href={"/calendar"}>
              <li className="hover:text-princeOrange text-frenchGrey sm:text-xs ">Calendar</li>
            </Link>
            <Link href="/">
            <Image className='absolute bottom-10 left-36'
            src="/logo.png"
            width={50}
            height={50}
            alt='CGAC logo'
            />
            </Link>
            <Link href={"/Market"}>
              <li className="hover:text-princeOrange text-frenchGrey sm:text-xs ml-[-10%]">Marketplace</li>
            </Link>
            {/* <Link href={"/archive"}>
              <li className="hover:text-princeOrange text-frenchGrey">Archive</li>
            </Link> */}
            <Link href={"/AboutUs"}>
              <li className="hover:text-princeOrange text-frenchGrey sm:text-xs">About us</li>
            </Link>
          {/* <div className="flex gap-2 py-1">
            <AiFillInstagram />
            <AiOutlineMail />
          </div> */}
          </ul>
        </div>
        </div>
      </nav>
    
      <Image className='md:mt-[-10%] sm:mt-[-10%] mb-[-15%] z-0'
      src="/bushy2.png"
      width={3500}
      height={300}
      alt='bushy nav divider'
      />
    </>
  );
} 

export default Nav