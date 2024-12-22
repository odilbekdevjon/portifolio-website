import React from 'react';
import { FaDownload } from "react-icons/fa6";

// components
import { ButtonPrimary } from './Button';
// images
import person from "../assets/person.jpg";


const Hero = () => {

  return (
    <section id='home' className='pt-28 lg:pt-36' >
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div className='flex flex-col'>
                <div className="flex flex-col gap-3">

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400 '>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'>
                            </span>
                        </span>
                        Available for work 
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[20ch] mt-5 mb-8 lg:mb-10">
                        I am Frontend developer. I can create modern website for your business
                    </h2>   

                    <div className="flex items-center gap-3 ">
                        <a href="https://www.canva.com/design/DAGUYXMDNI0/EdUGQEqCt2-W-hVtvAYxQg/edit?utm_content=DAGUYXMDNI0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank' >
                            <ButtonPrimary label='Dowload CV' icon={<FaDownload />} />
                        </a>
                    </div>

                </div>
            </div>

            <div className="">
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[165px] overflow-hidden'>
                    <img className='rounded-md w-full h-auto' src={person} width={550} height={200} alt="person" />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero
