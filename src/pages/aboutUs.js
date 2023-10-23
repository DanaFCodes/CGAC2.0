import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";
import Image from 'next/image';
import Link from "next/link";


function AboutUs() {
  return (
    <>
    <section className='bg-frenchGrey'> 
      <header >
        <Nav />
      </header>

      <main className="container text-olive2" style={{padding: '5% 5% 2% 5%'}}>
        <h1 className='text-center text-lg md:text-5xl mt-10'>CGAC Mission Statement</h1>
        <br />
        <br />
        <h4 className='text-center px-10 xl:px-30 sm:px-0 text-md md:text-lg lg:text-xl '>
        At Community Garden Art Collective (CGAC) we encourage expression through art and are committed to uplifting those who have made it their livelihood. We are dedicated to promoting emerging art practices and encouraging local collaborations amongst new artists. Our mission is to function as a digital platform for online exhibitions, publications, and as space to list upcoming in-person and digital art events happening in and around Toronto. CGAC will also host in-person and digital workshops as well as produce interviews and reviews of emerging art shows to encourage connections amongst new artists. CGAC’s mission is rooted in creating community, and as such aims to help young artists navigate the local art-scene, as well as making (emerging, local) art more accessible to the public. CGAC is a gathering place for artists, enthusiasts, and buyers. We hope to see you in our garden soon!
        </h4>

        <h1 className='text-center text-lg md:text-5xl mt-20 relative'>Take a gander at these CGAC artists</h1>
        <h4 className='text-center text-sm md:text-lg mt-5 '>click on a name to see that artists website</h4>
        <Image
        className='absolute left-72 mt-[-5%] -rotate-45'
        src={'/yellowCurlyArrowDown.png'}
        width={150}
        height={150}
        alt='yellow arrow'
        />
        <div className='flex justify-center items-center'>
        {/* <button className="btn btn-animation font-bod mt-5 mr-10 bg-apricot">artist1</button>
        <button className="btn btn-animation font-bod mt-5 mr-10">artist2</button>
        <button className="btn btn-animation font-bod mt-5 ">artist3</button> */}
        <Image
        className='rounded-3xl mr-3 relative'
        src={'/artistB.png'}
        width={1500}
        height={2500}
        alt='branch with leaves and artists names on those leaves'
        
        />
         
        <button>
          <Link href={"/MainGallery"} className='absolute left-60 bottom-[-34%] -rotate-45 text-xl'>Kimia Ghofrani</Link>
        </button>
        </div>
        
        <button>
          <Link href={"/MainGallery"} className='absolute left-60 bottom-[-64%] rotate-45 text-xl'>Danny Cardoso</Link>
        </button>

        <h1 className='text-center text-lg md:text-5xl mt-24'>Meet the team!</h1>

        <div>
        <div className='flex justify-center gap-28' id='useSelect' style={{padding: '5% 5% 2% 5%'}}>
        <section id="marketArtworks" className="-mt-12 flex justify-center mb-12">
        <div className='md:flex lg:flex flex w-full text-center justify-center gap-14 mb-16 mt-[-5%]' style={{padding: '5% 5% 2% 5%'}}>
           <div className="flex-col items-center justify-center py-10 pr-20">
              <Image src="/Danny_GP.png" alt="" height={700} width={600} />
              <p className='w-80 text-center mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="fle-col items-center justify-center py-10 relative pr-20">
              <Image src="/Kimia_GPP.png" alt="" height={400} width={600} />
              <p className='w-80 text-center mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="flex-col items-center justify-center py-10 ">
              <Image src="/Dana_GP.png" alt="" height={700} width={600} />
              <p className='w-80 text-center mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            </div>
          </section>
        </div>
        </div>
      </main>
      </section>
      <footer className='bg-frenchGrey' >
        <Foot />
      </footer>
    </>
  );
}

export default AboutUs