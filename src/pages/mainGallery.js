import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";
import Image from 'next/image';


function mainGallery() {
    function play() {
      const audio = document.getElementById("a1");
      if (audio.paused) audio.play();
      else audio.pause();
    }
    
  return (
    <>
      <section id="mainGall" className="bg-apricot grid place-items-center">
        <header className="">
          <section className="">
            <Nav />
          </section>
        </header>

        <main className="">
          <h1 className="text-3xl lg:text-5xl flex font-heading mt-16 mb-5">Florals? For Spring? Groundbreaking...</h1>
          <h2 className="font-heading text-xl flex mb-2">Curatorial Statement</h2>
          <h2 className="font-heading text-sm flex">click sound wave to listen, press again to stop</h2>
          <button onClick={play} className='relative'>
            <audio id="a1" src="./chainSmokers-Roses.mp3"></audio> 
            <Image className="opacity-0 hover:opacity-100 absolute bottom-0"
            src={'/soundWave1.png'}
            height={100}
            width={1000}
            alt='image of sound wave'
            />
            <Image className="opacity-100"
              src={'/soundWave3.png'}
              height={100}
              width={1000}
              alt='image of sound wave'
            />
          </button>
          <h4 className="font-bod mt-7 mb-1 text-sm">
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
            <div className="flex items-center justify-center">
            <button className="btn btn-animation font-bod mt-5 mb-16">credit line</button> 
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

export default mainGallery