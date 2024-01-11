import React from 'react'
import Nav from "../../components/Nav";
import Foot3 from "../../components/Foot3";
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function AboutUs() {
  function artistWeb() {
    // Mikayla Lacey
    location.href = 'https://mikaylalacey.partial.gallery/';    
  } function artistWeb2() {
    // Neil Maguire
    location.href = 'https://www.corkingallery.com/artists/neil-maguire/';  
  } function artistWeb3() {
    // Paula Mclean
    location.href = 'http://www.paulamclean.ca/';  
  } function artistWeb4() {
    // Jet Coghlan
    location.href = 'https://www.agreenerfuture.ca/litter-artists/jet-coghlan/';  
  } function artistWeb5() {
    // Danny Cardoso
    location.href = 'https://www.dannycardoso.com/';  
  } function artistWeb6() {
    // Par Nair
    location.href = 'https://www.artofpar.com/';  
  } function artistWeb7() {
    // Alexandru Stratulat
    location.href = '';  
  } function artistWeb8() {
    // Alejandro Rizzo Nervo
    location.href = 'https://www.rizzonervo.com/home/';  
  } function artistWeb9() {
    // Devon Pryce
    location.href = 'https://devonpryce.partial.gallery/';  
  } function artistWeb10() {
    // Alejandro Rizzo Nervo
    location.href = 'https://www.rizzonervo.com/home/';  
  } function artistWeb11() {
    // Devon Pryce
    location.href = 'https://devonpryce.partial.gallery/';  
  }



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; 
  
  return (
    <>
    <section className='' style={{'background-image': "url('/aboutUsBack.png')", 'minWidth': '100vw', 'backgroundSize': 'cover', 'backgroundRepeat': 'no-repeat'}}> 
      <header >
        <Nav />
      </header>

      <main className="container text-olive2" style={{padding: '5% 5% 2% 5%'}}>
        <h1 className='text-center text-lg md:text-5xl mt-96'>CGAC Mission Statement</h1>
        <br />
        <br />
        <h4 className='text-center px-10 xl:px-30 sm:px-0 text-md md:text-lg lg:text-xl '>
        At Community Garden Art Collective (CGAC) we encourage expression through art and are committed to uplifting those who have made it their livelihood. We are dedicated to promoting emerging art practices and encouraging local collaborations amongst new artists. Our mission is to function as a digital platform for online exhibitions, publications, and as space to list upcoming in-person and digital art events happening in and around Toronto. CGAC will also host in-person and digital workshops as well as produce interviews and reviews of emerging art shows to encourage connections amongst new artists. CGAC’s mission is rooted in creating community, and as such aims to help young artists navigate the local art-scene, as well as making (emerging, local) art more accessible to the public. CGAC is a gathering place for artists, enthusiasts, and buyers. We hope to see you in our garden soon!
        </h4>

        <div className=''>
        <h1 className='text-center text-lg md:text-5xl mt-36 '>Take a gander at these CGAC artists</h1>
        <h4 className='text-center text-sm md:text-lg mt-5 w-full'>click on a name to see that artists website</h4>
        </div>
  
       
        <div className='p-5 mt-10 text-white h-full'>
        <Slider {...settings}>
          <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-05.png'}
            width={350}
            height={350}
            alt='Mikayla Lacey'
            onClick={artistWeb}
            />
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-06.png'}
            width={350}
            height={350}
            alt='Neil Maguire'
            onClick={artistWeb2}
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-04.png'}
            width={350}
            height={350}
            alt='Paula Mclean'
            onClick={artistWeb3}
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-03.png'}
            width={350}
            height={350}
            alt='Jet Coghlan'
            onClick={artistWeb4}
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-02.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            onClick={artistWeb5}
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-17.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            onClick={artistWeb6}
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-07.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            onClick={artistWeb7}
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-08.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            onClick={artistWeb8}
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-09.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-10.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-11.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-12.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-13.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-14.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-15.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            />          
            </div>
            <div className='w-1/2 h-1/2'>
            <Image
            className='cursor-pointer'
            src={'/artistbranch-16.png'}
            width={350}
            height={350}
            alt='yellow arrow'
            />          
            </div>
          </Slider>
        </div>


      <h1 className='text-center text-lg md:text-5xl mt-36'>Meet the team!</h1>
       
      <div className='lg:flex my-10 pb-56 justify-center '>
      <div className='relative md:text-sm sm:flex-col sm:mb-56 mt-[-1%]'>
      <Image src="/Kimia_GPP.png" alt="" height={600} width={400} className='mb-2 ml-4 md:mt-20'/>
      <p className='absolute w-full text-center ml-6 text-l md:text-l pr-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      
      <div className='relative md:text-sm sm:mb-72 pt-10 lg:mt-[-8%]'>
      <Image src="/Danny_GP.png" alt="" height={600} width={400} className='pt-3 md:mt-32 '/>
      <p className='absolute w-full text-center ml-6 text-l pr-10 md:mb-36'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      
      <div className='relative md:text-sm sm:mb-20 lg:mt-[-9%] md:mt-[-10%]'>
      <Image src="/Dana_GP.png" alt="" height={600} width={400} className='ml-4 md:mt-48 md:mb-1' />
      <p className='absolute w-full text-center ml-6 text-l pr-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      </div>
      </main>
      </section>
      <footer className='bg-frenchGrey' >
        <Foot3 />
      </footer>
    </>
  );
} 

export default AboutUs