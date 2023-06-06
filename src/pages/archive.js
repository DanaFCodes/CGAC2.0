import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";

function archive() {
  return (
    <>
      <header className="container ">
        <section className="">
          <Nav />
        </section>
      </header>
      <main className="container">
        <h2>Archive</h2>
        <h4>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae
          mollitia deserunt, veniam quisquam quos animi quo reprehenderit unde,
          placeat, cum dignissimos minima beatae amet in earum illo. Numquam
          atque quis praesentium eligendi corrupti maxime neque distinctio
          molestias animi obcaecati illo beatae, eos quibusdam nostrum
          temporibus, doloribus quidem pariatur! Itaque.
        </h4>
      </main>
      <footer>
        <Foot />
      </footer>
    </>
  );
}

export default archive