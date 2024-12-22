import React from 'react';

// images
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact' className='section'>
      <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="">
                    <h2 className='headline-2 mb-5 '>Contact me for collaboration</h2>
                    <p className='mb-5 text-zinc-400 lg:max-w-[35ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptate, quisquam provident ratione corrupti sed veniam voluptatem. Perferendis recusandae laborum, et fugit consequuntur voluptatum quod incidunt sit. Nisi, laboriosam earum.</p>
                    <div className="flex gap-5 mb-5">
                        <a href="https://t.me/odilbekdev" target='_blank'><FaTelegram size={25} /></a>
                        <a href="" target='_blank'><FaSquareInstagram size={25} /></a>
                        <a href="" target='_blank'> <FaFacebook size={25} /></a>
                        <a href="https://www.linkedin.com/feed/" target='_blank'> <FaLinkedin size={25} /></a>
                    </div>
                </div>

                <form action="" method='POST' className="">
                    <div className="flex gap-5 mb-5 md:grid md:items-center md:grid-cols-2">
                        <div className="">
                            <label htmlFor="name" className='label'>Name</label>
                            <input className='text-field p-3 rounded-lg bg-transparent border-2 border-solid outline-none mt-2'  type="text" name='name' id='name' autoComplete='name' placeholder='name' required />
                        </div>
                        <div className="">
                            <label htmlFor="email" className='label'>Email</label>
                            <input className='text-field p-3 rounded-lg bg-transparent border-2 border-solid outline-none mt-2'  type="text" name='email' id='email' autoComplete='email' placeholder='email' required />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="message" className='label'>Message</label>
                        <textarea className='text-field w-full h-36 p-3 rounded-lg bg-transparent border-2 border-solid outline-none mt-2 mb-3 resize-none'  type="text" name='message' id='message' autoComplete='message' placeholder='message' required />
                    </div>
                    <button type='submit' className='btn btn-primary md:block md:w-full sm:h-auto'>Submit</button>
                </form>
            </div>
      </div>
    </section>
  )
}

export default Contact
