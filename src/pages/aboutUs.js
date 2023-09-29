import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";
import Image from 'next/image';

function aboutUs() {
  return (
    <>
    <section className='bg-frenchGrey'> 
      <header style={{padding: '5% 5% 2% 5%'}}>
        <Nav />
      </header>

      <main className="container">
        <h1 className='text-center text-lg md:text-5xl mt-10'>CGAC Mission Statement</h1>
        <br />
        <br />
        <h4 className='text-center px-10 xl:px-44 text-md md:text-lg lg:text-xl'>
        At Community Garden Art Collective (CGAC) we encourage expression through art and are committed to uplifting those who have made it their livelihood. We are dedicated to promoting emerging art practices and encouraging local collaborations amongst new artists. Our mission is to function as a digital platform for online exhibitions, publications, and as space to list upcoming in-person and digital art events happening in and around Toronto. CGAC will also host in-person and digital workshops as well as produce interviews and reviews of emerging art shows to encourage connections amongst new artists. CGAC’s mission is rooted in creating community, and as such aims to help young artists navigate the local art-scene, as well as making (emerging, local) art more accessible to the public. CGAC is a gathering place for artists, enthusiasts, and buyers. We hope to see you in our garden soon!
        </h4>

        <h1 className='text-center text-lg md:text-5xl mt-20 text-olive2'>Take a gander at these CGAC artists</h1>
        <div className='flex justify-center items-center'>
        <button className="btn btn-animation font-bod mt-5 mr-10 bg-apricot">artist1</button>
        <button className="btn btn-animation font-bod mt-5 mr-10">artist2</button>
        <button className="btn btn-animation font-bod mt-5 ">artist3</button>
        </div>

        <h1 className='text-center text-lg md:text-5xl mt-24'>Meet the team!</h1>
        <div className='flex justify-between mt-6' style={{padding: '5% 5% 2% 5%'}}>
        <Image
        className='rounded-3xl mr-3'
        src={'/danaSelfP.png'}
        width={150}
        height={150}
        alt='portrait of Dana Filatov'
        />

        {/* need Kimia and Dannys portraits */}
        <Image
        className='rounded-3xl mr-3'
        src={'/danaSelfP.png'}
        width={150}
        height={150}
        alt='portrait of Dana Filatov'
        />

        <Image
        className='rounded-3xl'
        src={'/danaSelfP.png'}
        width={150}
        height={150}
        alt='portrait of Dana Filatov'
        />
        </div>
        <div className='flex justify-between text-center' style={{padding: '5% 5% 2% 5%'}}>
          <p className='mr-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p className='mr-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>

      
      </main>
      </section>
      <footer style={{padding: '5% 5% 2% 5%'}}>
        <Foot />
      </footer>
    </>
  );
}

export default aboutUs