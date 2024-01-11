import Image from 'next/image';

export default function Home() {
  // onClick, door redirects to gallery page 
  function enterGallery() {
    location.href = 'MainGallery';    
  }

  return (
    <>
      <section id='homePage' className="">
        <main className="">
          <section id="galleryPortal" className=" overflow-visible	">
            <div className='w-[2200px] h-[2500px] overflow-visible	'>
              <Image className="opacity-100 absolute"
              src="/landLandLAND.png"
              width={2200}
              height={550}
              alt='Illustration of garden gate'
              />
              <Image className=" hover:opacity-100 opacity-0 absolute z-20 mt-[48.7%] "
              src="/openGateHell2.png"
              width={2200}
              height={200}
              alt='Illustration of open garden gate'
              onClick={enterGallery}
              />
              </div>
          </section>
        </main>
      </section>
    </>
  );
};