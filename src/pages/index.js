import Nav from '../../components/Nav'
import Foot from '../../components/Foot'
import Image from 'next/image';

// functions
export default function Home() {
  // onClick, door redirects to gallery page 
  function enterGallery() {
    const door = document.getElementById("door");
    location.href = 'MainGallery';    
  }

  return (
    <>
      <section id='homePage' className="">
        {/* <header style={{padding: '5% 5% 2% 5%'}}>
            <Nav />
        </header> */}

        <main className="text-olive2">
          {/* <section id="comingUp " style={{padding: '5% 5% 2% 5%'}}>
            <h2 className="mt-4 mb-4 font-heading text-center mr-32 md:mr-64">coming up: </h2>
            <h2 className="md:text-2xl font-heading text-center">🚨materials exchange🚨</h2>
            <h2 className="md:text-2xl font-heading text-center">🚨spring book share🚨</h2>
            
            <h1 className="md:text-5xl text-xl flex items-center justify-center font-heading md:pb-5 mt-8 align-middle border-green-950 border-3">
            🌱step inside our garden🌱
            </h1>
          </section> */}

          <section id="galleryPortal" className="relative overscroll-none ">
            <div className='relative'>

              <Image className="opacity-100"
              src="/largeLand.png"
              width={2200}
              height={500}
              alt='Illustration of garden gate'
              onClick={enterGallery}
              />

              {/* I THINK WE SHOULD CROP THE LEAFY GATE PART OF THE OPEN-GATE.PNG AND THEN ADD IT AS WHAT THIS LANDING3.PNG IS DOING NOW */}
              {/* <Image className="opacity-100 hover:opacity-100 absolute top-[50%] left-[39%] right-0 z-20"
              src="/openGate.png"
              width={420}
              height={400}
              alt='Illustration of garden gate'
              onClick={enterGallery}
              /> */}
              {/* <div className='relative'>
               <Image className="opacity-50 hover:opacity-100 absolute top-[44.5%] left-[38.65%] right-0 z-20"
              src="/landGate.png"
              width={415}
              height={500}
              alt='Illustration of garden gate'
              onClick={enterGallery}
              />
              </div> */}
              
              <div className='' id='gatDivDiv'>
              <div className='relative' id='gateDiv'>
              <button className='w-80 h-80 top-[-25%] left-[37%]'>
              <Image className="opacity-50 hover:opacity-100 absolute top-[44.5%] left-[38.65%] right-0 z-20"
              src="/landGate.png"
              width={415}
              height={500}
              alt='Illustration of garden gate'
              onClick={enterGallery}
              />
              </button>
              </div>
              </div>

              </div>

                 {/* <Image className="opacity-100 absolute top-[25.3%] left-[-0.15%] right-0 z-20"
              src="/glag2.gif"
              width={390}
              height={500}
              alt='Illustration of garden gate'
              onClick={enterGallery}
              /> */}

          </section>
        </main>
        {/* <footer style={{padding: '5% 5% 2% 5%'}}>
          <Foot />
        </footer> */}
      </section>
    </>
  );
};