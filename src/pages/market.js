import React, {useState, useEffect} from 'react'
import Nav from "../../components/Nav";
import Foot2 from "../../components/Foot2";
import Image from 'next/image';
import Modal from '../../components/Modal';

function Market() {
  // kimia
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  // danny
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  // dana
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);

  return (
    <>
      <section id='marketplace'className="grid place-items-center" style={{'background-image': "url('/marketVersion6lol.png')", 'minWidth': '100vw', 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat'}}>
        <header className="">
          <section className="">
            <Nav />
          </section>
        </header>

        <main className="" style={{padding: '5% 5% 2% 5%'}}>
        
        {/* showModal */}
        <Modal id='tarot' onClose={() => setShowModal(false)} visible={showModal}>
        <div className='flex'> 
        <div className='w-1/2' id='info'>
          <h2>TITLE OF PIECE</h2>
          <br/>
          <p>
          ARTIST NAME <br/>
          <br/>
          <br/>
          info <br/>
          info <br/>
          info <br/>
          info <br/>
          <br/><br/><br/><br/><br/><br/><br/>
          contact info</p>
          <br/>
          <a href='mailto:kimiaghofrani1997@gmail.com?subject=Saw your work on cgac.ca and want to learn more!&body=Hi, I saw your work on cgac.ca and am interested in learning some more about this piece..'>click here to email artist directly!</a>
        </div>

        <div className='' id='image'>
          <Image className="lg:-mt-[17%] rounded-full" src="/kimia1.jpg" alt="" height={500} width={500} />
        </div>
        </div>
        </Modal>
        {/* showModal ends */}

        {/* showModal2 */}
        <Modal id='tarot' onClose={() => setShowModal2(false)} visible={showModal2}>
        <div className='flex'> 
        <div className='w-1/2' id='info'>
          <h2>TITLE OF PIECE</h2>
          <br/>
          <p>
          ARTIST NAME <br/>
          <br/>
          <br/>
          info <br/>
          info <br/>
          info <br/>
          info <br/>
          <br/><br/><br/><br/><br/><br/><br/>
          contact info</p>
          <br/>
          <a href='mailto:kimiaghofrani1997@gmail.com?subject=Saw your work on cgac.ca and want to learn more!&body=Hi, I saw your work on cgac.ca and am interested in learning some more about this piece..'>click here to email artist directly!</a>
        </div>

        <div className='' id='image'>
          <Image className="lg:-mt-[17%] " src="/kimia2.jpg" alt="" height={400} width={400} />
        </div>
        </div>
        </Modal>
        {/* showModal2 ends */}

        {/* showModal3 */}
        <Modal id='' onClose={() => setShowModal3(false)} visible={showModal3}>
        <div className='flex'> 
        <div className='w-1/2' id='info'>
          <h2>TITLE OF PIECE</h2>
          <br/>
          <p>
          ARTIST NAME <br/>
          <br/>
          <br/>
          info <br/>
          info <br/>
          info <br/>
          info <br/>
          <br/><br/><br/><br/><br/><br/><br/>
          contact info</p>
          <br/>
          <a href='mailto:kimiaghofrani1997@gmail.com?subject=Saw your work on cgac.ca and want to learn more!&body=Hi, I saw your work on cgac.ca and am interested in learning some more about this piece..'>click here to email artist directly!</a>
        </div>

        <div className='' id='image'>
          <Image className="mt-10 scale-125 ml-[-5%] " src="/kimia3.jpg" alt="" height={400} width={400} />
        </div>
        </div>
        </Modal>
        {/* showModal3 ends */}

        {/* showModal4 */}
        <Modal id='tarot' onClose={() => setShowModal4(false)} visible={showModal4}>
        <div className='flex'> 
        <div className='w-1/2' id='info'>
          <h2>TITLE OF PIECE</h2>
          <br/>
          <p>
          ARTIST NAME <br/>
          <br/>
          <br/>
          info <br/>
          info <br/>
          info <br/>
          info <br/>
          <br/><br/><br/><br/><br/><br/><br/>
          contact info</p>
          <br/>
          <a href='mailto:kimiaghofrani1997@gmail.com?subject=Saw your work on cgac.ca and want to learn more!&body=Hi, I saw your work on cgac.ca and am interested in learning some more about this piece..'>click here to email artist directly!</a>
        </div>

        <div className='' id='image'>
          <Image className="lg:-mt-[17%]" src="/danny1.jpg" alt="" height={500} width={500} />
        </div>
        </div>
        </Modal>
        {/* showModal4 ends */}

        {/* showModal5 */}
        <Modal id='tarot' onClose={() => setShowModal5(false)} visible={showModal5}>
        <div className='flex'> 
        <div className='w-1/2' id='info'>
          <h2>TITLE OF PIECE</h2>
          <br/>
          <p>
          ARTIST NAME <br/>
          <br/>
          <br/>
          info <br/>
          info <br/>
          info <br/>
          info <br/>
          <br/><br/><br/><br/><br/><br/><br/>
          contact info</p>
          <br/>
          <a href='mailto:kimiaghofrani1997@gmail.com?subject=Saw your work on cgac.ca and want to learn more!&body=Hi, I saw your work on cgac.ca and am interested in learning some more about this piece..'>click here to email artist directly!</a>
        </div>

        <div className='' id='image'>
          <Image className="lg:-mt-[17%] " src="/danny3.jpg" alt="" height={400} width={400} />
        </div>
        </div>
        </Modal>
        {/* showModal5 ends */}

        {/* showModal6 */}
        <Modal id='' onClose={() => setShowModal6(false)} visible={showModal6}>
        <div className='flex'> 
        <div className='w-1/2' id='info'>
          <h2>TITLE OF PIECE</h2>
          <br/>
          <p>
          ARTIST NAME <br/>
          <br/>
          <br/>
          info <br/>
          info <br/>
          info <br/>
          info <br/>
          <br/><br/><br/><br/><br/><br/><br/>
          contact info</p>
          <br/>
          <a href='mailto:kimiaghofrani1997@gmail.com?subject=Saw your work on cgac.ca and want to learn more!&body=Hi, I saw your work on cgac.ca and am interested in learning some more about this piece..'>click here to email artist directly!</a>
        </div>

        <div className='' id='image'>
          <Image className="mt-10 scale-125 ml-[-5%] " src="/danny2.jpg" alt="" height={400} width={400} />
        </div>
        </div>
        </Modal>
        {/* showModal6 ends */}

        
          <div className='flex sm:flex-col'>

          
            <div className="mt-[25%] ml-[-2%] lg:scale-100 md:scale-75 sm:scale-60 rounded-a!@ full max-w-[600px] max-h-[200px]">
            <Image className="rounded-full" src="/model13.png" alt="" height={600} width={800} />
           </div>
            <div className="lg:ml-[40%] mt-6 lg:scale-100 md:scale-75 sm:mt-60 sm:ml-[-2%] sm:scale-75 ">
              <Image className="rounded-full " src="/bubb2.png" alt="" height={600} width={600} />
            </div>
            </div>
  

          {/* kimia */}
          <div id="marketArtworks" className="mt-48 lg:flex-row items-center flex md:flex-col sm:flex-col w-[100%] gap-28">
            <div className="bg-white mr-20 overflow-hidden items-center rounded-full lg:max-w-[400px] lg:max-h-[400px] md:max-w-[200px] md:max-h-[200px] cursor-pointer">
              <Image className="lg:-mt-[17%] rounded-full" src="/kimia1.jpg" alt="" height={500} width={500} onClick={() => setShowModal(true)} />
            </div>
            <div className="bg-white  overflow-hidden rounded-full lg:max-w-[400px] lg:max-h-[600px] md:max-w-[400px] md:max-h-[500px] cursor-pointer">
              <Image src="/kimia3.jpg" alt="" height={600} width={500} className='mt-[10%]' onClick={() => setShowModal3(true)} />
            </div>
            <div className="bg-white  overflow-hidden rounded-full max-w-[400px] max-h-[400px] object-fill cursor-pointer">
              <Image src="/kimia2.jpg"className='mt-[-5%]' alt="" height={500} width={500} onClick={() => setShowModal2(true)}/>
            </div>
          </div>
          {/* kimia ends */}

          {/* dana */}
          <div id="marketArtworks" className="mt-20 mr-28 lg:flex-row items-center flex md:flex-col sm:flex-col w-[100%] gap-20">
            <div className="bg-white overflow-hidden items-center rounded-full lg:max-w-[450px] lg:max-h-[500px] md:max-w-[200px] md:max-h-[200px] cursor-pointer">
              <Image className="lg:-mt-[17%] rounded-full" src="/dana1.jpg" alt="" height={500} width={500} onClick={() => setShowModal(true)} />
            </div>
            <div className="bg-white  overflow-hidden rounded-full max-w-[400px] max-h-[400px] cursor-pointer">
              <Image src="/dana2.jpg"className='mt-[-5%]' alt="" height={500} width={500} onClick={() => setShowModal2(true)}/>
            </div>
            <div className="bg-white  overflow-hidden rounded-full max-w-[420px] max-h-[600px] cursor-pointer">
              <Image src="/dana2.jpg"className='mt-[-5%]' alt="" height={500} width={500} onClick={() => setShowModal2(true)}/>
            </div>
          </div>
          {/* dana ends */}

          {/* danny */}
          <div id="marketArtworks" className="mt-20 ml-28 lg:flex-row items-center flex md:flex-col sm:flex-col w-[100%] gap-16">
            <div className="bg-white overflow-hidden items-center rounded-full lg:max-w-[400px] lg:max-h-[400px] md:max-w-[200px] md:max-h-[200px] cursor-pointer">
              <Image className="lg:-mt-[17%] rounded-full" src="/danny1.jpg" alt="" height={500} width={500} onClick={() => setShowModal(true)} />
            </div>
            <div className="bg-white  overflow-hidden rounded-full max-w-[400px] max-h-[400px] cursor-pointer">
              <Image src="/danny3.jpg"className='mt-[-5%]' alt="" height={500} width={500} onClick={() => setShowModal2(true)}/>
            </div>
            <div className="bg-white  overflow-hidden rounded-full max-w-[420px] max-h-[600px] cursor-pointer">
              <Image src="/danny2.jpg"className='mt-[-5%]' alt="" height={500} width={500} onClick={() => setShowModal2(true)}/>
            </div>
          </div>
          {/* danny ends */}

        </main>
        <footer className='mt-16'>
          <Foot2 />
        </footer>
      </section>
    </>
  );
}

export default Market