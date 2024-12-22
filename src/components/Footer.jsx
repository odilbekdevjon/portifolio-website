import React from 'react';

const sitemap = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
    { label: "Contact", link: "#contact", },
]

const Footer = () => {
  return ( 
    <footer className='section'>
    <hr />
      <div className="container">

        <div className="lg:grid lg:grid-cols-2 mt-5">
            <div className="mb-10">
                <h2 className='headline-1 mb-8 lg:max-w-[15ch]'>Lets work togather with today</h2>
                <button className='btn btn-primary'>Start project</button>
            </div>

            <div className='mb-10'>
                <p>Sitemap </p>
                <ul>
                    {
                        sitemap.map(({label, link}, key) => (
                            <li key={key}>
                                <a href={link} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                                >
                                    {label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </div>
      </div>
    </footer>
  )
}

export default Footer
