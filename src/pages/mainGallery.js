import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";
import Image from 'next/image';
import { useState } from 'react';

function MainGallery() {
  // functions
  const [artistOpen, setArtistOpen] = useState(true);
    const artistStatement = () => {
    const artistButt = (document.getElementById("artistButt"));
    const artistState = (document.getElementById("artistStatement"));
    if (artistOpen) {
      artistState.style.display= "block";  
      artistButt.textContent = "collapse artist statement"
    } else {
      artistState.style.display= "none";
        artistButt.textContent = "expand artist statement"   
    }
  }
  const artistStatement2 = () => {
    const artistButt = (document.getElementById("artistButt2"));
    const artistState = (document.getElementById("artistStatement2"));
    if (artistOpen) {
      artistState.style.display= "block";  
      artistButt.textContent = "collapse artist statement"
    } else {
      artistState.style.display= "none";
        artistButt.textContent = "expand artist statement"   
    }
  }
  const artistStatement3 = () => {
    const artistButt = (document.getElementById("artistButt3"));
    const artistState = (document.getElementById("artistStatement3"));
    if (artistOpen) {
      artistState.style.display= "block";  
      artistButt.textContent = "collapse artist statement"
    } else {
      artistState.style.display= "none";
        artistButt.textContent = "expand artist statement"   
    }
  }
  function play() {
    const audio = (document.getElementById("a1"));
    if (audio.paused) audio.play();
    else audio.pause();
  }

  return (
    <>
      <section id="mainGall" className="text-olive2 grid place-items-center" style={{'background-image': "url('/galleryBackdrop.png')", 'minWidth': '100vw', 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat'}}>
        <header>
          <section>
            <Nav />
          </section>
        </header>

        <main style={{padding: '5% 5% 2% 5%'}}>
          <div className='flex relative'>
          <h4 className="font-bod mt-[25%] text-sm ml-[10%] text-center w-[50%] mb-12">
            Depictions of spring and florals have been present in art for centuries! With the arrival of spring, and blooms beginning to erupt all around us, we were interested in the question, “How can floral and spring imagery, and all its associations and cliches, be new and exciting after so many iterations through time?”. The following quote came to mind to describe this need for something new, “Florals? For spring? Groundbreaking” <br/>Delivered by Meryl Streep in the iconic 2006 movie, The Devil Wears Prada, the quote was the prompt presented to artists for CGAC’s 5th digital exhibition.<br /> <br />It brings an opportunity to reinvent and invigorate the theme of florals and spring; Artists Breann Ritchie, Cleo Peterson, Donica Larade, Helen Tran, Lanni Weingarten, Pegy Korat, and Sarah Zanchetta did just that.  Exploring themes of love, growth, ancestral rituals, transformation, healing, and more, these emerging artists are taking us into their world. A new renaissance of florals!
            <br/><br/><br/><br/>click sound wave to listen, press again to stop
          </h4>
          
          <div className='absolute top-3/4 mt-16 left-1/2 text-center w-[100%]'>
             <Image className="sm:scale-50 lg:scale-75 lg:block md:block sm:block"
            src={'/yellowarrow2.png'}
            height={20}
            width={150}
            alt='yellow arrow pointing to sound wave'
            />
          </div>
          </div>

          <div className='flex lg:mt-[-1%]'>
            <Image className='sm:hidden lg:block'
            src={'/ear.png'}
            height={100}
            width={100}
            alt='ear'
            />
          <div>
          <button onClick={play} className='relative'>
            <audio id="a1" src="./chainSmokers-Roses.mp3"></audio> 
            <Image className="opacity-0 hover:opacity-100 absolute top-[-2%]"
            src={'/soundLong1.png'}
            height={700}
            width={5000}
            alt='image of sound wave'
            />
            <Image className="opacity-100"
              src={'/soundLong2.png'}
              height={100}
              width={5000}
              alt='image of sound wave'
            />
          </button>
          </div>
          </div>

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
              <button onClick={artistStatement} className="btn btn-animation font-bod mt-5 mb-16 hover:content-['']">
                <p id='artistButt'>expand artist statement</p>
              </button> 
            </div>
            <div className='hidden' id='artistStatement'>
              <p className='mt-[-2%] text-center' >audio clip here</p>
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
            <div onClick={() => setArtistOpen(!artistOpen)} className="flex items-center justify-center ">
              <button onClick={artistStatement2} className="btn btn-animation font-bod mt-5 mb-16 hover:content-['']">
                <p id='artistButt2'>expand artist statement</p>
              </button> 
            </div>
            <div className='hidden' id='artistStatement2'>
              <p className='mt-[-2%] text-center ' >audio clip here</p>
              <p id='artistState' className='ml-[25%] text-center w-[50%] mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod leo. Donec non nunc magna. Aliquam porta porta justo eu facilisis. Etiam id venenatis tellus. Maecenas dictum justo et nisi placerat, non eleifend ex tristique. Nulla erat augue, pharetra id volutpat viverra, pellentesque nec nunc. Fusce a varius arcu.

In feugiat pellentesque nisl eget consequat. Sed finibus molestie mauris, vitae pharetra ante tempor eget. Fusce quis nisi at turpis pulvinar aliquam. Nullam tempor, diam pulvinar tempus vestibulum, enim orci euismod ipsum, sed lacinia enim tellus quis nunc. Donec euismod odio ac leo blandit fermentum. Nam dapibus, augue quis ullamcorper.</p>
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
            <div onClick={() => setArtistOpen(!artistOpen)} className="flex items-center justify-center ">
              <button onClick={artistStatement3} className="btn btn-animation font-bod mt-5 mb-16 hover:content-['']">
                <p id='artistButt3'>expand artist statement</p>
              </button> 
            </div>
            <div className='hidden' id='artistStatement3'>
              <p className='mt-[-2%] text-center'>audio clip here</p>
              <p id='artistState' className='ml-[25%] text-center w-[50%] mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non euismod leo. Donec non nunc magna. Aliquam porta porta justo eu facilisis. Etiam id venenatis tellus. Maecenas dictum justo et nisi placerat, non eleifend ex tristique. Nulla erat augue, pharetra id volutpat viverra, pellentesque nec nunc. Fusce a varius arcu.

In feugiat pellentesque nisl eget consequat. Sed finibus molestie mauris, vitae pharetra ante tempor eget. Fusce quis nisi at turpis pulvinar aliquam. Nullam tempor, diam pulvinar tempus vestibulum, enim orci euismod ipsum, sed lacinia enim tellus quis nunc. Donec euismod odio ac leo blandit fermentum. Nam dapibus, augue quis ullamcorper.</p>
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