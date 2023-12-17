import Image from 'next/image';
import { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill  } from "react-icons/bs";
import Link from "next/link";

export default function Carousel ({ slides }) {

    let [current, setCurrent] = useState(0);
    
    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };
    
    let nextSlide = () => {
        if (current === slides.length - 2) setCurrent(0);
        else setCurrent(current + 2);
    };

    return (
        
        <div className='overflow-hidden relative'>
        <div className={`flex transition ease-out duration-40`}
        style={{transform: `translateX(-${current * 200}%)`}} 
        >
            {slides.map((s) => {
                return <Image key={s} src={s} alt={"jj"} width={600} height={400} className='my-20'/>
            })}
        </div>

        <div className='absolute top-0 h-full w-full justify-between items-end flex text-white px-20 text-5xl cursor-pointer'>
            <button onClick={previousSlide}>
                <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide}>
                <BsFillArrowRightCircleFill />
            </button>
        </div>

        {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          );
        })}
      </div> */}
      </div>
    
    );
}