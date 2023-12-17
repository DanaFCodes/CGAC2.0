import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";
import Image from 'next/image';


function Market() {

  window.onload = function(){ 

  // if (typeof window !== "undefined") {
    // Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onClick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onClick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it


}

  return (
    <>
      <section id='marketplace'className="bg-red-400 grid place-items-center" style={{'background-image': "url('/marketBack.png')", 'minWidth': '100vw', 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat'}}>
        <header className="">
          <section className="">
            <Nav />
          </section>
        </header>
        <main className="	" style={{padding: '5% 5% 2% 5%'}}>

            <div className="mt-[15%] md:ml-[-3%] lg:ml-[-15%] rounded-a!@ full max-w-[300px] max-h-[300px]">
            <Image className="rounded-full" src="/ourModelMarket.png" alt="" height={500} width={500} />
   </div>
            <div className="ml-[10%] mt-16">
              <Image className="rounded-full " src="/ourModelMarket.png" alt="" height={500} width={500} />
            </div>
     
    <button id="myBtn">Open Modal</button>

    <div id="myModal modal" class="">

      <div id="modal-content">
        <span id="close">×</span>
        <p>Some text in the Modal..</p>
      </div>

    </div>


          {/* kimia */}
          <div id="marketArtworks" className="mt-16 lg:flex-row flex md:flex-col sm:flex-col w-[100%]">
            <div className="bg-white overflow-hidden rounded-full lg:max-w-[400px] lg:max-h-[400px] md:max-w-[200px] md:max-h-[200px]">
              <Image className="lg:-mt-[17%] rounded-full" src="/kimia1.jpg" alt="" height={500} width={500} />
              {/* <p className="pb-12 text-center mt-3">
              credit line <br/> $price <br/> artist contact
              </p> */}
            </div>
            <div className="bg-white  overflow-hidden rounded-full max-w-[300px] max-h-[300px] object-fill">
              <Image src="/kimia2.jpg"className='mt-[-5%]' alt="" height={400} width={400} />
            </div>
            <div className="bg-white  overflow-hidden rounded-full lg:max-w-[400px] lg:max-h-[400px] md:max-w-[200px] md:max-h-[200px]">
              <Image src="/kimia3.jpg" alt="" height={400} width={450} className='mt-[10%]' />
            </div>
          </div>
          {/* kimia ends */}

          {/* danny */}
          <div id="marketArtworks" className="mt-5 lg:flex-row md:flex-row flex flex-col w-[100%]">
            <div className="bg-white overflow-hidden rounded-full lg:max-w-[400px] lg:max-h-[400px] md:max-w-[200px] md:max-h-[200px]">
              <Image className="-mt-[17%] border rounded-full scale-150" src="/danny1.jpg" alt="" height={500} width={500} />
            </div>
            <div className="bg-white overflow-hidden rounded-full lg:max-w-[500px] lg:max-h-[500px] md:max-w-[200px] md:max-h-[200px]">
              <Image src="/danny3.jpg" alt="" height={800} width={800} className='scale-150 mt-5'/>
            </div>
            <div className="bg-white overflow-hidden rounded-full max-w-[270px] max-h-[270px] ">
              <Image src="/danny2.jpg"className='scale-150' alt="" height={500} width={500} />
            </div>
          </div>
          {/* danny ends */}

          {/* dana */}
          <div id="marketArtworks" className="mt-16 lg:flex-row flex md:flex-col sm:flex-col w-[100%]">
            <div className="bg-white overflow-hidden rounded-full lg:max-w-[300px] lg:max-h-[300px] md:max-w-[200px] md:max-h-[200px]">
              <Image className="mt-10 scale-150 rounded-full" src="/dana1.jpg" alt="" height={400} width={500} />
            </div>
            <div className="bg-white  overflow-hidden rounded-full max-w-[300px] max-h-[300px] object-fill">
              <Image src="/dana2.jpg"className='mt-[10%] scale-125' alt="" height={400} width={400} />
            </div>
            {/* why is this circle not a damn circleeeeee */}
            <div className="bg-white  overflow-hidden rounded-full lg:max-w-[500px] lg:max-h-[650px] md:max-w-[200px] md:max-h-[200px]">
              <Image src="/dana2.jpg" alt="" height={500} width={500} className='' />
            </div>
          </div>
          {/* dana ends */}
        </main>
        <footer className='mt-16'>
          <Foot />
        </footer>
      </section>
    </>
  );
}

export default Market