import React from 'react'

const AboutItems = [
    {
        label:'Project done',
        number:5,
    },
    {
        label:'Years of experience',
        number:3,
    },
]

const About = () => {
  return (
    <section
    id='about'
    className='section'
    >
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl w-full">
            About Me
                Hello! I'm a passionate front-end developer with 3 years of experience crafting interactive and user-friendly websites. I specialize in creating responsive designs that adapt beautifully across all devices.

                I enjoy turning complex problems into simple, elegant solutions. Whether it's building sleek interfaces or optimizing performance, I strive to make the web a better place—one project at a time.

                Currently, I'm working at Record IT, where I've contributed to several client projects and am now involved in developing a large-scale platform for training centers.

                When I'm not coding, you can find me exploring new technologies or participating in web development events.

                Let’s build something amazing together!
            </p>

            <div className="flex flex-wrap items-center gap-6 md:gap-7">
                {
                    AboutItems.map(({label, number}, key) => {
                        return(
                            <div key={key} className="items-center md:mb-2">
                                <div className=" text-2xl font-semibold md:mb-2 ">
                                    <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                    <span className='text-sky-400  font-semibold'>+</span>
                                </div>
                                <p>{label}</p>
                            </div>
                        )
                    })
                }

                <span className='ml-auto md:w-[40px] h-[40px]'>Logo</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
