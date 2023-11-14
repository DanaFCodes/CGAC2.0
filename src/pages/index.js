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
        <main className="text-olive2">
          <section id="galleryPortal" className="relative overflow-visible	">
            <div className='relative overflow-visible	'>
              <Image className="opacity-100 	"
              src="/longLanding333.png"
              width={2200}
              height={500}
              alt='Illustration of garden gate'
              onClick={enterGallery}
              />
        
              {/* <div className='' id='gatDivDiv'>
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
              </div> */}

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
      </section>
    </>
  );
};