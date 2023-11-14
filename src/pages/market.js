import React from 'react'
import Nav3 from "../../components/Nav3";
import Foot from "../../components/Foot";
import Image from 'next/image';

function Market() {
  return (
    <>
      <section id='marketplace'className=" grid place-items-center" style={{'background-image': "url('/marketBack.png')", 'minWidth': '100vw', 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat'}}>
        <header className="">
          <section className="">
            <Nav3 />
          </section>
        </header>
        <main className="" style={{padding: '5% 5% 2% 5%'}}>
          <h4 className='text-center mt-72'>
            Welcome to the CGAC Marketplace! <br />
            <br />
            Below you will find works by a variety of emerging artists, many of whom have been exhibited here at CGAC.  CGAC’s mission is rooted in creating community, and as such aims to help emerging artists navigate the local art-scene, as well as making art more accessible to the public.

This Market is another iteration of helping our community of artists bloom and prosper in the art world. Let’s get artists PAID for their amazing work! <br /><br />

Profits go directly to the artists, and the art goes directly to you! What could be better?
          </h4>

          <section id="marketArtworks" className="mt-6 flex justify-center">
            <div className="flex-col items-center justify-center pr-20 py-10">
              <Image src="/danny1.jpg" alt="" height={700} width={500} />
              <p className="pb-12 text-center mt-3">
              credit line <br/> $price <br/> artist contact
              </p>
            </div>
            <div className="flex-col items-center justify-center py-10 pr-20 ">
              <Image src="/danny2.jpg" alt="" height={500} width={600} />
              <p className="pb-12 text-center mt-3">
              credit line <br/> $price <br/> artist contact
              </p>
            </div>
            <div className="flex-col items-center justify-center py-10">
              <Image src="/danny3.jpg" alt="" height={500} width={550} />
              <p className="mb-10 text-center mt-3">
              credit line <br/> $price <br/> artist contact
              </p>
            </div>
          </section>

          <section id="marketArtworks" className="-mt-12 flex justify-center mb-12">
            <div className="flex-col items-center justify-center py-10 pr-20">
              <Image src="/dana1.jpg" alt="" height={700} width={600} />
              <p className="mt-3 mb-10 text-center">
              credit line <br/> $price <br/> artist contact
              </p>
            </div>
            <div className="fle-col items-center justify-center py-10 relative">
              <Image src="/dana2.jpg" alt="" height={500} width={700} />
              <p className="mt-3 mb-10 text-center">
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

export default Market