import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";

function calendar() {
  return (
    <>
    <section className='bg-princeOrange'>
      <header className="">
        <section className="">
          <Nav />
        </section>
      </header>
      <main className="container bg-darkBlue">
        <h2 className='lg:text-6xl sm:text-xl text-center mt-10 text-olive2'>🚧 calendar under construction 🚧</h2>
        <h2 className='lg:text-6xl sm:text-xl text-center mt-4 text-olive2'>coming soon!</h2>
        <br />
        <br />
       
      </main>
      <footer>
        <Foot />
      </footer>
      </section>
    </>
  );
}

export default calendar