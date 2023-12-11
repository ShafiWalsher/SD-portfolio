import React from 'react'

const ProjectCard = ({imgURL, title, technology, isMiddleColumn}) => {
  return (
    <div className={`z-50 cursor-pointer relative group ${isMiddleColumn ? 'translate-y-[-40px]' : ''}`}>
      <img 
        src={imgURL} 
        alt={title} 
        className="rounded-xl w-[410px] -lg:w-[380px] h-auto group-hover:opacity-80 transition-opacity " />

      <div className="opacity-0 group-hover:opacity-100 duration-200  ease-in-out absolute inset-x-0 bottom-0 flex flex-col justify-start items-start text-xl bg-slate-900/50 h-40 px-2 py-4">
        
        <h1 className="text-secondary font-bold line-clamp-1">{title}</h1>

        <div className="my-3 font-normal text-sm italic flex">        
        {technology.map((tech) => (
            <p key={tech.name} className="tech-stack">
              {tech.name}
            </p>
        ))}
        </div>

        <div className="text-sm font-medium ms-auto mt-auto mx-4">
            <button className="me-5 projectCard-button ">{'GitHub </>'}</button>
            <button className="projectCard-button ">Live</button>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard