import React from 'react'
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";
import Image from 'next/image';


function mainGallery() {
    function play() {
      const audio = document.getElementById("a1");
      if (audio.paused) audio.play();
      else audio.pause();
    }
    
  return (
    <>
      <section id="mainGall" className="bg-apricot grid place-items-center">
        <header className="">
          <section className="">
            <Nav />
          </section>
        </header>

        <main className="">
          <h1 className="text-3xl flex font-heading">SHOWTITLE</h1>
          <h2 className="font-heading text-xl flex">Curatorial Statement</h2>
          <button onClick={play}>
            <audio id="a1" src="./chainSmokers-Roses.mp3"></audio> [This is the
            audio button we can design it into a fun audio sound wave🌊✨]
          </button>
          <h4 className="font-bod mt-5 text-sm">
            A note from the curators: <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, debitis fugit. Placeat reiciendis, doloremque, alias iure officiis animi natus accusamus, fugiat cum quo eaque eos quis maiores est illo. Earum hic esse deleniti amet laborum impedit, quaerat, aliquam enim excepturi, praesentium magnam exercitationem dolore deserunt nemo illum consequuntur soluta optio. Quam ullam illum rem nihil quisquam. Facilis dolorum in magni est odit dignissimos quisquam eum autem voluptate officiis ullam porro mollitia, exercitationem sit esse quo voluptatem dolor doloribus ipsa facere consectetur provident aliquid impedit. Qui aspernatur accusantium fugit laudantium quo praesentium nulla. Voluptatibus inventore provident id amet maiores. Harum atque, aliquam hic libero, odio voluptatum similique nemo repellat incidunt deserunt sint omnis vero eaque voluptatibus eum non quas maxime sapiente dicta sit cupiditate eos ipsa natus consequuntur? Velit dolorem voluptatum, doloremque quis in et laudantium assumenda quasi sed veniam sunt enim odio non nihil corrupti reprehenderit, omnis quisquam laborum voluptates cumque nemo iure recusandae quod ex? Harum voluptatibus, cupiditate amet eligendi ipsa voluptas pariatur alias, aperiam asperiores enim eum quisquam excepturi mollitia qui unde aut sequi commodi dignissimos aspernatur accusamus, sunt maiores! Consectetur, ab? Mollitia laboriosam distinctio cumque delectus iure, velit ducimus ipsum dignissimos sapiente maxime, dolore vitae quaerat dicta!
          </h4>

          <section id="theArtworks" className="mt-6 max-w-full overflow-hidden">
            <div className="flex items-center justify-center py-10 border-orange-50 bg-orange-50">
              <Image src="/logoNoBackG.png" alt="" height={500} width={400} />
            </div>
            <p className="flex items-center justify-center pt-4 pb-12">
              credit line
            </p>

            <div className="flex items-center justify-center py-10 border-orange-50 bg-orange-50">
              <Image src="/logoNoBackG.png" alt="" height={500} width={400} />
            </div>
            <p className="flex items-center justify-center pt-4 pb-12">
              credit line
            </p>

            <div className="flex items-center justify-center py-10 border-orange-50 bg-orange-50">
              <Image src="/logoNoBackG.png" alt="" height={500} width={400} />
            </div>
            <p className="flex items-center justify-center pt-4 pb-12">
              credit line
            </p>

            <div className="flex items-center justify-center py-10 border-orange-50 bg-orange-50">
              <Image src="/logoNoBackG.png" alt="" height={500} width={400} />
            </div>
            <p className="flex items-center justify-center pt-4 pb-12">
              credit line
            </p>

            <div className="flex items-center justify-center py-10 border-orange-50 bg-orange-50">
              <Image src="/logoNoBackG.png" alt="" height={500} width={400} />
            </div>
            <p className="flex items-center justify-center pt-4 pb-12">
              credit line
            </p>
          </section>
        </main>
        <footer>
          <Foot />
        </footer>
      </section>
    </>
  );
}

export default mainGallery