import { ProfilePicture } from '../assets/images';
import { skillsShowcase } from "../constants"

const About = () => {
  return (
    <div className="relative h-screen text-md font-poppins  ">
        <p className="bg-section-word z-20">
          ABOUT
        </p>
      
      <div className="grid grid-cols-2 gap-x-20 justify-center items-center padding-x pt-20">
        <span className="setion-title-underline col-span-2 mb-10">
          <span className="relative section-title">about me.</span>
        </span>
    
        {/* Profile Picture */}
        <div className="col-span-1">
          <img src={ProfilePicture} alt="sd-profile-pic" className="w-auto h-50"/>
        </div>  
        {/* Profile Picture End */}

        {/* About Info */}
        <div className="col-span-1">
          <p>I’m <span className="font-redressed text-3xl text-dutch-white">Shafi</span> <span className="special-font italic">&</span> Building brands has been a part of my DNA since the age of 16 when I started my own snowboard apparel company. Now with a closet full of sample t-shirts, I’ve grown into a designer who prioritizes empathy and entrepreneurship in every creative opportunity I face.</p>

          <h2 className="font-bold text-2xl mt-20 mb-6 text-slate-50/50">&#123;&nbsp; . . . What I Know &nbsp;&#125;</h2>

          <div className="flex gap-x-4 justify-start items-start">
            {skillsShowcase.map((section) => (
              <div key={section.type} className="skill-section"> 
                
                <h3 key={section.type} className="flex section-sub-title"> 
                  <img src={section.icon} className='me-2'/>
                  {section.type}
                </h3>

                <ul>
                  {section.skills.map((skill) => (
                    <li key={skill.name} className="leading-7 italic">
                      {'> ' + skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* About Info End */}


      </div>
    </div>
  )
}

export default About