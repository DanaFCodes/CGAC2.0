import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaTiktok } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// functions
function Foot() {
function insta1() {
  location.href = "https://www.instagram.com/p/CokYPLGLhvM/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
}
function insta2() {
  location.href = "https://www.instagram.com/p/Cr1NQFHJvCX/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
}
function insta3() {
  location.href = "https://www.instagram.com/p/CZuFsL4u-Qj/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
}
const form = useRef('');

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ud07a0f', 'template_9dq44gi', form.current, 'JVePUTxJproHOHO2Q')
    document.getElementById("clearInput1").value = "";
    document.getElementById("clearInput2").value = "";
    document.getElementById("clearInput3").value = "";
  };
  return (
    <>
      <section id="footer" className="h-30">
        <Image
        className="-mt-7 md:-mt-2 " 
        src="/footLoopLoop.png"
        width={2550}
        height={200}
        alt="loop divider"
        />
        <div style={{padding: '5% 5% 2% 5%'}}>
          <div className="ml-[-1%] mb-2">
          <Image 
            src={'/gotInsta.png'}
            width={300}
            height={700}
            alt="CGAC workshop poster"
            />
          </div>
           
        <div className="instaImages flex mt-4 md:mt-6 w-[100%] justify-start relative z-30">
          <div className="md:mr-10 mr-4"> 
            <Image className="border-solid border-2 border-red-400" onClick={insta1}
            src={'/poster.png'}
            width={400}
            height={400}
            alt="CGAC workshop poster"
            
            />
          </div>
          <div className="md:mr-10 mr-4">
            <Image onClick={insta2}
            src={'/insta(1).png'}
            width={530}
            height={600}
            alt="Artwork by Teodor Rakhilkin"
          />
          </div>
          <div>
            <Image onClick={insta3}
            src={'/withanironhandiwilllead.jpg'}
            width={585}
            height={600}
            alt="Artwork by Sonya Katashonova"
          />
          </div>
        </div>

        <div className="flex pt-12 z-10" id='bottomDiv'>
          <div id='container' className="mt-1 md:mt-10 sm:content-center z-10">
          <Image 
          className="z-20 ml-[-5%]" 
          src={'/stayLoop.png'}
          width={400}
          height={700}
          alt="stay in the loop header"
          />

<form ref={form} onSubmit={sendEmail} className="flex flex-col">
      <input  id='clearInput1'  type="text" placeholder="name" name="user_name" className="bg-frenchGrey placeholder-gray-500 mb-5 mt-3 rounded-xl h-10 pl-5"/>
      <input id='clearInput2'  type="email" placeholder="email address" name="user_email" className="bg-frenchGrey placeholder-gray-500 mb-5 rounded-xl h-10 pl-5"/>
      <textarea  id='clearInput3' name="message" placeholder="How can CGAC support you best? ☀️🌱" className="bg-frenchGrey placeholder-gray-500 mb-5 rounded-xl h-20 pt-2 pl-5 pr-2" />
      <button   type="submit" value="Send" id='formButton popup submitp' className="btn btn-animation font-bod mt-5 ">
      <p id="submitp" >submit</p>
      </button> 
    </form>
         
          <div id='contactUs' className="pt-10 z-20 ">
            <Image 
            className="z-20" 
            src={'/contactUs.png'}
            width={300}
            height={700}
            alt="contact us header"
            />
            <div className="flex items-center ml-4 mt-5">
              <AiFillInstagram className="scale-150 mr-2 sm:justify-start fill-persimmon" />
              <p className="text-sm md:text-lg text-persimmon">@cgac.workshop</p>
            </div>

            <div className="flex items-center ml-4 mt-1 sm:mt-3">
              <FaTiktok className="scale-150 mr-2 fill-persimmon" />
              <p className="text-sm md:text-lg text-persimmon">@cgac.toronto</p>
            </div>

            <div className="flex items-center text-end ml-4 mt-1 mb-5 sm:mt-3">
              <AiOutlineMail className="scale-150 mt-1 mr-2 fill-persimmon" />
              <p className=" text-sm md:text-lg text-persimmon">cgac.spillthebeans@gmail.com</p>
            </div>
          </div>
          </div>
            </div>
          </div>     
        <div className="flex items-center justify-center z-20">
          <p className="text-xs text-black sm:text-sm text-center font-bod mt-1 mb-5 z-10">
            Website by Dana Filatov &copy; 2023 Community Garden Art Collective (CGAC)
          </p>
          <div id='copyrightWithDate'></div> 
         </div>
      </section>

      <div className="relative">
        <Image
        className="-mt-5 z-0 absolute bottom-0 left-[-10%]"
        src={'/apricotFootHill.png'}
        width={5500}
        height={1000}
        alt="grass footer"
        />
      </div>
    </>
  );
}
export default Foot;