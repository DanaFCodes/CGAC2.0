import React from 'react'
import Nav from "../../components/Nav";
import Foot2 from "../../components/Foot2";

function Calendar() {
  return (
    <>
    <section className='' style={{'background-image': "url('/calendarBackground.png')", 'minWidth': '100vw', 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat'}}>
      <header className="">
        <section className="">
          <Nav />
        </section>
      </header>
      <main className="container bg-darkBlue">
        <h2 className='lg:text-6xl sm:text-xl text-center mt-80 text-olive2'>🚧 calendar under construction 🚧</h2>
        <h2 className='lg:text-6xl sm:text-xl text-center mt-4 mb-20 text-olive2'>coming soon!</h2>
        <br />
        <br />
       
      </main>
      <footer>
        <Foot2 />
      </footer>
      </section>
    </>
  );
}

export default Calendar