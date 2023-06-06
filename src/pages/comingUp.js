import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";

function comingUp() {
  return (
    <>
      <header className="container ">
        <section className="">
          <Nav />
        </section>
      </header>
      <main className="container bg-darkBlue">
        <h2>Coming up...!!</h2>
        <br />
        <br />
        <h4>
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

export default comingUp