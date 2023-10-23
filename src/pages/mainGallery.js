import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";
import Image from 'next/image';
import { useState } from 'react';

function MainGallery() {
  const [artistOpen, setArtistOpen] = useState(false);
  if (typeof window !== 'undefined') {
    document.addEventListener("DOMContentLoaded", function () {
      const artistState = (document.getElementById("artistStatement"));
      const artistButt = (document.getElementById("artistButt"));
      artistButt.addEventListener("mouseover", function() {
        this.textContent = "artist ste"
      })
      artistButt.addEventListener("mouseout", function() {
        this.textContent = "flick"
      })
    });
  }
      const artistStatement = () => {
    setArtistOpen(!artistOpen)
    if (!artistOpen) {
      artistState.style.display= "none";  
    } else {
      artistState.style.display= "block";
    }
  }
  function play() {
    const audio = (document.getElementById("a1"));
    if (audio.paused) audio.play();
    else audio.pause();
  }


  return (
    <>
      <section id="mainGall" className="bg-apricot text-olive2 grid place-items-center">
        <header className="">
          <section className="">
            <Nav />
          </section>
        </header>

        <main className="" style={{padding: '5% 5% 2% 5%'}}>
          <Image
          src={'/gallText.png'}
          height={400}
          width={400}
          alt="show-header"
          />
          {/* <h1 className="text-3xl lg:text-5xl flex font-heading mt-16 mb-5 text-persimmon">Florals? For Spring? Groundbreaking...</h1> */}
          <h2 className="font-heading text-xl flex mb-2">Curatorial Statement</h2>
          <div className='flex'>
          <h2 className="font-heading text-sm flex">click sound wave to listen, press again to stop</h2>
          <Image className="mt-[-2%]"
            src={'/yellowDownArrow.png'}
            height={100}
            width={100}
            alt='image of sound wave'
            />
          </div>
          
          <div className='flex'>
          <div>
            <Image
            src={'/ear.png'}
            height={100}
            width={100}
            alt='ear'
            />
          </div>

          <div>
          <button onClick={play} className='relative'>
            <audio id="a1" src="./chainSmokers-Roses.mp3"></audio> 
            <Image className="opacity-0 hover:opacity-100 absolute bottom-0"
            src={'/soundWave1.png'}
            height={700}
            width={2000}
            alt='image of sound wave'
            />
            <Image className="opacity-100"
              src={'/soundWave3.png'}
              height={100}
              width={1000}
              alt='image of sound wave'
            />
          </button>
          </div>

          </div>

          <h4 className="font-bod mt-7 mb-1 text-sm ml-[25%] text-center w-[50%] mb-12">
            A note from the Curators: <br />
            Depictions of spring and florals have been present in art for centuries! With the arrival of spring, and blooms beginning to erupt all around us, we were interested in the question, “How can floral and spring imagery, and all its associations and cliches, be new and exciting after so many iterations through time?”. The following quote came to mind to describe this need for something new, 		

“Florals? For spring? Groundbreaking”

Delivered by Meryl Streep in the iconic 2006 movie, The Devil Wears Prada, the quote was the prompt presented to artists for CGAC’s 5th digital exhibition.<br /> <br />It brings an opportunity to reinvent and invigorate the theme of florals and spring; Artists Breann Ritchie, Cleo Peterson, Donica Larade, Helen Tran, Lanni Weingarten, Pegy Korat, and Sarah Zanchetta did just that.  Exploring themes of love, growth, ancestral rituals, transformation, healing, and more, these emerging artists are taking us into their world. A new renaissance of florals!
            
          </h4>

          <section id="theArtworks" className="mt-6 max-w-full overflow-hidden">
            <div className='text-center mt-10'>
              <h2 className='font-heading text-4xl'>Sarah Zanchetta</h2>
              <h3 className='mb-3 italic'>You left me in a ditch: unaware, uncared for, unknown</h3>
            </div>
            <div className="flex items-center justify-center">
              <Image 
              src="/sarahZanchetta.jpeg"  
              height={600} 
              width={800} 
              alt='painting by'/>
            </div>
            <p className='text-xs ml-[25%] text-center w-[50%] mt-5'>You left me in a ditch: unaware, uncared for, unknown, 60 x 84, Cotton embroidery thread, natural dyed cotton fabric, natural dyes, notebook, paint, pine wood, plant matter, plastic gallon buckets, Queen Annes Lace, seeds, thrifted jars</p>
            <div onClick={() => setArtistOpen(!artistOpen)} className="flex items-center justify-center ">
              {/* onClick={showArtStatement()} */}
            <button onClick={artistStatement} className="btn btn-animation font-bod mt-5 mb-16 hover:content-['']">
              <p id='artistButt' className="hover:before:content-[attr(data-hover)]" data-hover='click me!'>artist statement</p>
            </button> 
            </div>

            <div className='artistStatement hide artistOpen' id='artistStatement hide'>
              <p className='mt-[-2%] text-center ' >audio clip here</p>
              <p id='artistState' className='ml-[25%] text-center w-[50%] mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod leo. Donec non nunc magna. Aliquam porta porta justo eu facilisis. Etiam id venenatis tellus. Maecenas dictum justo et nisi placerat, non eleifend ex tristique. Nulla erat augue, pharetra id volutpat viverra, pellentesque nec nunc. Fusce a varius arcu.

In feugiat pellentesque nisl eget consequat. Sed finibus molestie mauris, vitae pharetra ante tempor eget. Fusce quis nisi at turpis pulvinar aliquam. Nullam tempor, diam pulvinar tempus vestibulum, enim orci euismod ipsum, sed lacinia enim tellus quis nunc. Donec euismod odio ac leo blandit fermentum. Nam dapibus, augue quis ullamcorper.</p>
            </div>

            <div className='text-center mt-5'>
              <h2 className='font-heading text-4xl'>Cleo Peterson</h2>
              <h3 className='mb-3 italic'>Love Poem</h3>
            </div>
            <div className="flex items-center justify-center">
              <Image 
              src="/lalaloveupoem.jpg"  
              height={600} 
              width={ 1000} 
              alt='painting by'/>
            </div>
            <div className="flex items-center justify-center">
            <button className="btn btn-animation font-bod mt-5 mb-16">credit line</button> 
            </div>

            <div className='text-center mt-5'>
              <h2 className='font-heading text-4xl'>Helen Tran</h2>
              <h3 className='mb-3 italic'>I’m Glad There is You</h3>
            </div>
            <div className="flex items-center justify-center">
              <Image 
              src="/florals.jpeg"  
              height={600} 
              width={1000} 
              alt='painting by'/>
            </div>
            <div className="flex items-center justify-center">
            <button className="btn btn-animation font-bod mt-5 mb-16">credit line</button> 
            </div>
          </section>
        </main>
        <footer>
          <Foot />
        </footer>
      </section>
    </>
  );
}
// }

export default MainGallery