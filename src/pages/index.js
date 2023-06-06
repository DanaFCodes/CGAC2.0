import Nav from '../../components/Nav'
import Foot from '../../components/Foot'

export default function Home() {
  function enterGallery() {
    const door = document.getElementById("door");
    // onClick, door redirects to gallery page 
    location.href = 'mainGallery';    
  }

  return (
    <>
      <section id='homePage' className="bg-princeOrange grid place-items-center">
        <header className="">
          <section>
            <Nav />
          </section>
        </header>

        <main className="text-olive">
          <section id="comingUp">
            <h1 className="text-5xl flex items-center justify-center font-heading pb-5 border-2 align-middle border-green-950 border-3">
              {/* maybe we can make this a cute thing like a cute designed "join us for..." or somethin */}
              Come hang out with CGAC!!
            </h1>
            <h2 className="mt-8 font-heading ml-20">coming up: </h2>
            {/* what do we want our bullet point to look like? should link to an instagram post w more info? */}
            <h2 className="text-2xl font-heading text-center">🚨materials exchange🚨</h2>
            <h2 className="text-2xl font-heading text-center">🚨summer book share🚨</h2>
          </section>

          <section id="galleryPortal" className="py-10">
            <h3 className="text-lg flex items-center justify-center mb-5 font-bod">
              step inside our garden...
            </h3>
            <div
              className="opening-door frame relative z-0 flex items-center justify-center"
              onClick={enterGallery}
            >
              <button className="door" id="door" onClick={enterGallery}>
                <div className="handle"></div>
              </button>
            </div>
          </section>
        </main>
        <footer>
          <Foot />
        </footer>
      </section>
    </>
  );
};