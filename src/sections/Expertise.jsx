import ExpertiseCard from "../components/ExpertiseCard"
import { expertise } from "../constants"

const Expertise = () => {
  return (
    <div className="relative h-screen text-md font-poppins  ">
      <p className="bg-section-word  z-20">
          EXPERTISE
      </p>
      <div className="grid grid-cols-2 gap-x-20 justify-center items-center padding-x pt-20">
        <span className="setion-title-underline col-span-2 mb-10">
          <span className="relative section-title">Expertise.</span>
        </span>

        <div className="col-span-2">
          {expertise.map((exp) => (
            <div key={exp.name} className="mb-3 last:mb-0">
              <ExpertiseCard key={exp.name} {...exp} />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Expertise