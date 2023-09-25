import Nav from '../../components/Nav'
import Foot from '../../components/Foot'
import Image from 'next/image';

// functions
export default function Home() {
  // onClick, door redirects to gallery page 
  function enterGallery() {
    const door = document.getElementById("door");
    location.href = 'mainGallery';    
  }

  return (
    <>
      <section id='homePage' className="bg-princeOrange">
        <header style={{padding: '5% 5% 2% 5%'}}>
            <Nav />
        </header>

        <main className="text-olive">
          <section id="comingUp " style={{padding: '5% 5% 2% 5%'}}>
            <h2 className="mt-4 mb-4 font-heading text-center mr-32 md:mr-64">coming up: </h2>
            <h2 className="md:text-2xl font-heading text-center">🚨materials exchange🚨</h2>
            <h2 className="md:text-2xl font-heading text-center">🚨spring book share🚨</h2>
            
            <h1 className="md:text-5xl text-xl flex items-center justify-center font-heading md:pb-5 mt-8 align-middle border-green-950 border-3">
            🌱step inside our garden🌱
            </h1>
          </section>

          <section id="galleryPortal" className="py-10 relative">
              <Image className="opacity-100 hover:opacity-0"
              src="/landing1.png"
              width={2200}
              height={200}
              alt='Illustration of garden gate'
              onClick={enterGallery}
              />

              <Image className="opacity-0 hover:opacity-100 absolute bottom-8"
              src="/landing3.png"
              width={2200}
              height={200}
              alt='Illustration of garden gate'
              onClick={enterGallery}
              />
          </section>
        </main>
        <footer style={{padding: '5% 5% 2% 5%'}}>
          <Foot />
        </footer>
      </section>
    </>
  );
};