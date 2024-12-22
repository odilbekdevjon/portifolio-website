import React from 'react'
import ProjectCard from './ProjectCard';

// images
import Img1 from "../assets/photo_2024-12-22_08-05-34.jpg";
import Img2 from "../assets/photo_2024-12-22_08-05-40.jpg";
import Img3 from "../assets/photo_2024-12-22_08-08-55.jpg";
import Img4 from "../assets/photo_2024-12-22_08-09-00.jpg";

const works = [
    {
        imgSrc:Img1,
        title:'Savdo 5 jiek website',
        tags:['API', 'MVC', 'Development'],
        projectLink:'https://savdo5jiek.uz/'
    },
    {
        imgSrc:Img2,
        title:'Full stack website',
        tags:['API', 'MVC', 'Development'],
        projectLink:'https://najottalim.uz/'
    },
    {
        imgSrc:Img3,
        title:'Library platform form books',
        tags:['API', 'MVC', 'Development'],
        projectLink:'https://jarkurgon-takm.uz/'
    },
    {
        imgSrc:Img4,
        title:'Full stack app',
        tags:['API', 'MVC', 'Development'],
        projectLink:''
    },
    {
        imgSrc:Img3,
        title:'Full stack app',
        tags:['API', 'MVC', 'Development'],
        projectLink:''
    },
    {
        imgSrc:Img4,
        title:'Full stack app',
        tags:['API', 'MVC', 'Development'],
        projectLink:''
    },
]

const Work = () => {
  return (
    <section
     id='work'
     className='section'
    >
        <div className="container">
            <h2 className='headline-2 mb-5'>
                My portifolio highlest
            </h2>

            <div className="gap-x-4 gap-y-5 grid grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))]">
                {
                    works?.map(({imgSrc, title, tags, projectLink}, key) => {
                        return(
                            <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            />
                        )
                    })
                }
            </div>
        </div>
        
    </section>
  )
}

export default Work
