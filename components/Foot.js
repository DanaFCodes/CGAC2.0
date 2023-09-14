import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaTiktok } from 'react-icons/fa';

// functions
function Foot() {
//add dynamic date function here 
//add emailSubmit function

  return (
    <>
      <section id="footer" className="h-30 mt-0">
        <Image
        src="/loopDivider.png"
        width={1800}
        height={200}
        />
        
        <div id="footerDiv" className="flex">
          {/* <div id="left" className="py-4"> */}
          <div id="top" className="py-4 text-xl font-bod w-[60%]">
            <div>
            <h3 className="flex mb-5">➰follow us on Instagram➰</h3>
            </div>
           
            <div className="flex insta">
              <div className="mr-5">
                <img src="./poster.png" alt="CGAC workshop poster" />
              </div>
              <div className="mr-5">
                <img src="./insta(1).png" alt="Artwork by Teodor Rakhilkin" />
              </div>
              <div>
                <img
                  src="./withanironhandiwilllead.jpg"
                  alt="Artwork by Sonya Katashonova"
                />
              </div>
            </div>

          </div>

          <div id="bottom foot" className="">
              <h3 className="text-xl font-bod mt-5 flex justify-end mr-2">➰stay in the loop➰</h3>
            <div className="w-full" id='contactDiv'>
                {/* add remaining classes to form element... */}
              <form className="footerInput pt-4" action="">
                <label htmlFor="submit"></label>
                <input
                  name="submit"
                  type="text required"
                  placeholder="  gardenartists@gmail.com"
                  id='formInput'
                  className="rounded-sm h-10 font-bod w-64"
                />
                <button id='formButton' className="btn btn-animation font-bod">Submit</button>
              </form>

              <div id='contactUs'>
              <h3 className="text-xl font-bod mt-8 justify-end align-bottom flex mr-3">➰contact us➰</h3>
              <div className="flex items-center justify-end mr-3">
                <AiOutlineMail className="scale-150 mt-3 mr-2" />
                <p className="mt-3">cgac.spillthebeans@gmail.com</p>
              </div>

              <div className="flex items-center justify-end mr-3 mt-2">
                <AiFillInstagram className="scale-150 mr-2" />
                <p>@cgac.workshop</p>
              </div>

              <div className="flex items-center justify-end mr-3 mt-2">
                <FaTiktok className="scale-150 mr-2" />
                <p>@cgac.toronto</p>
              </div>
              </div>
            </div>
        </div>
            
          <div id='contactUs2' className="hidden ">
              <h3 className="text-xl font-bod mt-8 justify-end align-bottom flex mr-3">➰contact us➰</h3>
              <div className="flex items-center justify-end mr-3">
                <AiOutlineMail className="scale-150 mt-3 mr-2" />
                <p className="mt-3">cgac.spillthebeans@gmail.com</p>
              </div>

              <div className="flex items-center justify-end mr-3 mt-2">
                <AiFillInstagram className="scale-150 mr-2" />
                <p>@cgac.workshop</p>
              </div>

              <div className="flex items-center justify-end mr-3 mt-2">
                <FaTiktok className="scale-150 mr-2" />
                <p>@cgac.toronto</p>
              </div>
              </div>
          </div>

        <div className="flex items-center justify-center">
          <p className="text-xs text-center font-bod mt-5">
            Website by Dana Filatov &copy; 2023 Community Garden Art Collective
            (CGAC)
          </p>
          <div id='copyrightWithDate'></div> 
         </div>
      </section>

    </>
  );
}


export default Foot;

