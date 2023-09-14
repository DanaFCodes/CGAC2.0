import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";
import Image from 'next/image';

function market() {
  return (
    <>
      <section id='marketplace'className="bg-lime-400 grid place-items-center">
        <header className="">
          <section className="">
            <Nav />
          </section>
        </header>
        <main className="">
          <h2>Marketplace</h2>
          <h4>
            Welcome to the CGAC Marketplace! <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            recusandae mollitia deserunt, veniam quisquam quos animi quo
            reprehenderit unde, placeat, cum dignissimos minima beatae amet in
            earum illo. Numquam atque quis praesentium eligendi corrupti maxime
            neque distinctio molestias nimi obcaecati illo beatae, eos
            quibusdam nostrum temporibus, doloribus quidem pariatur! Itaque.
          </h4>

          <section id="marketArtworks" className="mt-6 flex">
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