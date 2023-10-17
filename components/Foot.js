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
      <section id="footer" className="h-30">
        <Image
        className="-mt-7 md:-mt-2"
        src="/gotInstaFoot.png"
        width={1800}
        height={200}
        alt="loop divider"
        />
        
        <div style={{padding: '5% 5% 2% 5%'}}>
        {/* <h3 className="mt-8 md:text-3xl text-xl font-bod w-[100%] text-center md:text-start">➰follow us on Instagram➰</h3> */}
           
        <div className="instaImages flex mt-2 md:mt-4 w-[100%] justify-start relative">
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

        <div className="flex justify-between flex-wrap pt-12 z-10" id='bottomDiv'>
          <div id='contactForm' className="mt-10 md:mt-10 sm:content-center z-10">
            <h3 className="lg:text-5xl md:text-3xl text-xl font-bod text-start">➰stay in the loop➰</h3>
              <form className="footerInput pt-4 flex" action="">
                <label htmlFor="submit"></label>
                <input
                  name="submit"
                  type="text required"
                  placeholder="gardenart@gmail.com  "
                  id='formInput'
                  className="rounded-sm h-12 font-bod pl-2 pr-10 w-64 sm:w-100 content-center"
                />
              </form>
            <button id='formButton' className="btn btn-animation font-bod mt-5 ">Submit</button>
          

          <div id='contactUs' className="pt-20 z-20">
            <h3 className="lg:text-5xl md:text-3xl text-xl font-bod flex mt-10 md:mt-10 z-10">➰contact us➰</h3>
              <div className="flex items-center md:mr-3 mt-5">
                <AiFillInstagram className="scale-150 mr-2 sm:justify-start" />
                <p className="text-sm md:text-lg">@cgac.workshop</p>
              </div>

              <div className="flex items-center md:mr-3 mt-5">
                <FaTiktok className="scale-150 mr-2" />
                <p className="text-sm md:text-lg">@cgac.toronto</p>
              </div>

              <div className="flex items-center text-end md:mr-3 mt-1">
                <AiOutlineMail className="scale-150 mt-3 mr-2" />
                <p className="mt-3 text-sm md:text-lg">cgac.spillthebeans@gmail.com</p>
              </div>
          </div>
          </div>
          </div>

        </div>
     

      <div id="flowers" className="flex relative">
        <div id="mobileFlowers">
         <div className="z-30 flex-shrink-0  ">
          <Image 
          className="z-20 absolute bottom-12 right-[20%]"
          src={'/Flower3.png'}
          width={400}
          height={700}
          alt="orange flower"
          />
         </div>

         <div className="z-30  ">
          <Image 
          className="z-20 absolute bottom-10 right-[18%]" 
          src={'/Flower3.png'}
          width={300}
          height={700}
          alt="orange flower"
          />
         </div>

         <div className="z-30 ">
          <Image 
          className="z-20 absolute bottom-8 right-[10%]"
          src={'/Flower3.png'}
          width={400}
          height={700}
          alt="orange flower"
          />
         </div>
         </div>

        <div className="sm:opacity-0 md:opacity-0 lg:opacity-100">
         <div className="z-30 relative ">
          <Image 
          className="z-20 absolute right-[0%] bottom-5"
          src={'/Flower3.png'}
          width={900}
          height={700}
          alt="orange flower"
          />
         </div>

         <div className="z-30 relative ">
          <Image 
          className="z-20 absolute right-[1%] bottom-20"
          src={'/Flower3.png'}
          width={500}
          height={1000}
          alt="orange flower"
          />
         </div>

         <div className="z-30 relative ">
          <Image 
          className="z-20 absolute right-[1%] bottom-14"
          src={'/Flower3.png'}
          width={600}
          height={700}
          alt="orange flower"
          />
         </div>
         </div>
      </div>
      <div className="flex items-center justify-center z-20">
          <p className="text-xs sm:text-sm text-center font-bod mt-1 z-10">
            Website by Dana Filatov &copy; 2023 Community Garden Art Collective
            (CGAC)
          </p>
          <div id='copyrightWithDate'></div> 
         </div>
      </section>

              <div className="relative">
                <Image
                className="-mt-5 z-0 absolute bottom-0"
                src={'/mossFoot.png'}
                width={4000}
                height={4000}
                alt="grass footer"
                />
              </div>
              
    </>
  );
}


export default Foot;

