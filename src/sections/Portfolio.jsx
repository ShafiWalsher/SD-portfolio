import ProjectCard from "../components/ProjectCard"
import { recentWork } from "../constants"

const Portfolio = () => {
  return (
    <div className="relative overflow-scroll h-screen text-md font-poppins  ">
      
      <p className="bg-section-word  z-20">
          PORTFOLIO
      </p>
      
      <div className="grid grid-cols-2 gap-x-20 justify-center items-center padding-x pt-20">
        <span className="setion-title-underline col-span-2 mb-10">
          <span className="relative section-title">Portfolio.</span>
        </span>


        <div className="mt-10 col-span-2 flex flex-wrap justify-between gap-y-8">
          {recentWork.map((project, index) => (
            <ProjectCard key={project.title} {...project} isMiddleColumn={(index + 1) % 3 === 2}/>
          ))}
        </div>
        <a href="" className="font-semibold col-span-2 mt-4 ms-auto">{'Explore all >>'}</a>

      </div>
    </div>
  )
}

export default Portfolio