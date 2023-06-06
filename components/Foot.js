import React from "react";
import { useEffect, useState } from "react";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaTiktok } from 'react-icons/fa';

function Foot() {
  // FUCK YOU DYNAMIC DATE!!!!!!😭😭
  // function date() {
  //   const [year, setYear] = useState("2023");
  //   useEffect(() => setYear(), []);
  //   const year = typeof window !== "undefined" ? "2023" : "blue";

  //   if (typeof window !== "undefined") {
  //     const now = new Date(),
  //       year = now.getFullYear();

  //     const pTag = document.getElementById('copyrightWithDate')
  //     pTag.textContent = (year);
  //     console.log(year)
  //   }
  // }
  // date()
  // window.onload = function () {
  //   setInterval(date, 500);
  // }
  function emailSubmit() {
    console.log("ciao");
  }

  return (
    <>
      <section id="footer" className="h-30 border-t-2 border-yellow-700 mt-10">
        <div id="footerDiv" className="">
          <div id="left" className="py-4">
            <div id="top">
              <h3 className="text-xl font-bod mt-3">➰stay in the loop➰</h3>
              <div className="w-full">
              <form className="footerInput" action="">
                <label htmlFor="submit"></label>
                <input
                  name="submit"
                  type="text required"
                  placeholder="gardenartists@gmail.com"
                  className="rounded-sm h-10 font-bod w-64"
                />
                <button className="btn btn-animation font-bod">Submit</button>
              </form>
              </div>
            </div>

            <div id="bottom">
              <h3 className="text-xl font-bod mt-3">➰contact us➰</h3>
              <div className="flex items-center">
                <AiOutlineMail className="scale-150 mt-3 mr-2" />
                <p className="mt-3">cgac.spillthebeans@gmail.com</p>
              </div>

              <div className="flex items-center">
                <AiFillInstagram className="scale-150 mr-2" />
                <p>@cgac.workshop</p>
                <FaTiktok className="scale-150 ml-2" />
                <p>@cgac.toronto</p>
              </div>
            </div>
          </div>

          <div id="right" className="py-4 text-xl font-bod mt-3">
            <div>
            <h3 className="flex justify-end mb-5">➰follow us on Instagram➰</h3>
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
        </div>

        <div className="flex items-center justify-center">
          <p className="text-xs text-center font-bod mt-5">
            Website by Dana Filatov &copy; 2023 Community Garden Art Collective
            (CGAC)
          </p>
          {/* <div id='copyrightWithDate'>{date()}</div> */}
        </div>
      </section>
    </>
  );
}

export default Foot;

