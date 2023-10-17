import React from 'react'
import Nav2 from "../../components/Nav2";
import Foot from "../../components/Foot";
import Image from 'next/image';

function market() {
  return (
    <>
      <section id='marketplace'className="bg-olive grid place-items-center">
        <header className="">
          <section className="">
            <Nav2 />
          </section>
        </header>
        <main className="" style={{padding: '5% 5% 2% 5%'}}>
          <h2 className='text-center'>Marketplace</h2>
          <h4 className='text-center'>
            Welcome to the CGAC Marketplace! <br />
            <br />
            Below you will find works by a variety of emerging artists, many of whom have been exhibited here at CGAC.  CGAC’s mission is rooted in creating community, and as such aims to help emerging artists navigate the local art-scene, as well as making art more accessible to the public.

This Market is another iteration of helping our community of artists bloom and prosper in the art world. Let’s get artists PAID for their amazing work! <br /><br />

Profits go directly to the artists, and the art goes directly to you! What could be better?
          </h4>

          <section id="marketArtworks" className="mt-6 flex mb-12">
            <div className="flex items-center justify-center pr-10 py-10 relative">
              <Image src="/logoNoBackG.png" alt="" height={500} width={400} />
              <p className="absolute top-64 pb-12 text-center">
              credit line <br/> $price <br/> artist contact
              </p>
            </div>
            <div className="flex items-center justify-center py-10 pr-10 relative">
              <Image src="/logoNoBackG.png" alt="" height={500} width={400} />
              <p className="absolute top-64 pb-12 text-center">
              credit line <br/> $price <br/> artist contact
              </p>
            </div>
            <div className="flex items-center justify-center py-10 relative">
              <Image src="/logoNoBackG.png" alt="" height={500} width={400} />
              <p className="absolute top-64 mb-10 text-center">
              credit line <br/> $price <br/> artist contact
              </p>
            </div>

          </section>
         


        </main>
        <footer className='mt-16'>
          <Foot />
        </footer>
      </section>
    </>
  );
}

export default market