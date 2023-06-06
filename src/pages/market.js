import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";

function market() {
  return (
    <>
      <section className='bg-lime-400 max-h-screen'>
        <header className="container ">
          <section className="">
            <Nav />
          </section>
        </header>
        <main className="container">
          <h2>Marketplace</h2>
          <h4>
            Welcome to the CGAC Marketplace! <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            recusandae mollitia deserunt, veniam quisquam quos animi quo
            reprehenderit unde, placeat, cum dignissimos minima beatae amet in
            earum illo. Numquam atque quis praesentium eligendi corrupti maxime
            neque distinctio molestias animi obcaecati illo beatae, eos
            quibusdam nostrum temporibus, doloribus quidem pariatur! Itaque.
          </h4>
        </main>
        <footer>
          <Foot />
        </footer>
      </section>
    </>
  );
}

export default market