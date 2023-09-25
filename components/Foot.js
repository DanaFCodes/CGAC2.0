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
        alt="loop divider"
        />
        
        <h3 className="mt-8 md:text-3xl text-xl font-bod w-[100%] text-center md:text-start">➰follow us on Instagram➰</h3>
           
        <div className="instaImages flex mt-6 w-[100%] justify-start">
          <div className="md:mr-10 mr-4"> 
            <Image
            src={'/poster.png'}
            width={400}
            height={400}
            alt="CGAC workshop poster"
            />
          </div>
          <div className="md:mr-10 mr-4">
            <Image
            src={'/insta(1).png'}
            width={530}
            height={600}
            alt="Artwork by Teodor Rakhilkin"
          />
          </div>
          <div>
            <Image
            src={'/withanironhandiwilllead.jpg'}
            width={585}
            height={600}
            alt="Artwork by Sonya Katashonova"
          />
          </div>
        </div>

        <div className="flex justify-between flex-wrap" id='bottomDiv'>
          <div id='contactForm' className="mt-16 sm:content-center">
            <h3 className="md:text-3xl text-xl font-bod text-start">➰stay in the loop➰</h3>
              <form className="footerInput pt-4 flex" action="">
                <label htmlFor="submit"></label>
                <input
                  name="submit"
                  type="text required"
                  placeholder="gardenart@gmail.com  "
                  id='formInput'
                  className="rounded-sm h-12 font-bod pl-2 pr-10 sm:w-64 content-center"
                />
              </form>
            <button id='formButton' className="btn btn-animation font-bod  mt-5 ">Submit</button>
          </div>

          <div id='contactUs' className=" justify-between">
            <h3 className="md:text-3xl text-xl font-bod flex justify-end mt-16">➰contact us➰</h3>
              <div className="flex items-center sm:justify-start justify-end md:mr-3 mt-5">
                <AiFillInstagram className="scale-150 mr-2 sm:justify-start" />
                <p>@cgac.workshop</p>
              </div>

              <div className="flex items-center sm:justify-start justify-end md:mr-3 mt-5">
                <FaTiktok className="scale-150 mr-2" />
                <p>@cgac.toronto</p>
              </div>

              <div className="flex items-center sm:justify-start justify-end md:mr-3 mt-1">
                <AiOutlineMail className="scale-150 mt-3 mr-2" />
                <p className="mt-3">cgac.spillthebeans@gmail.com</p>
              </div>
          </div>

              <div>
                <Image
                src={'/grassFooter.png'}
                width={2000}
                height={400}
                //ask gang about this + tall flower on side
                alt="grass footer"
                />
              </div>
        </div>
            
        <div className="flex items-center justify-center">
          <p className="text-xs sm:text-sm text-center font-bod mt-1">
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

