import { useState } from "react"



const ExpertiseCard = ({imgURL, name, desc}) => {

    const [isHovered, setIsHovered] = useState(false);
    


    return (
        <div className="z-50 rounded-2xl bg-gray-600/10 border border-dutch-white/10" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            
            {!isHovered && 
            <div className="flex">
                <img src={imgURL} alt={name} 
                className="w-auto h-[80px] rounded-2xl aspect-video"/>
                <div className="mx-6 flex flex-1 flex-col justify-center items-start">
                    <h2 className="text-2xl text-white/40 font-bold">{name}</h2>
                </div>
            </div>}


            {isHovered && 
            <div className="flex ">
                <img src={imgURL} alt={name} 
                className="w-auto h-[140px] rounded-2xl aspect-video"/>
                <div className="mx-6 flex flex-1 flex-col justify-center items-start">
                    <h2 className="text-xl text-secondary font-bold">{name}</h2>
                    <p className="pt-2">{desc}</p>
                    <p className="ms-auto mt-3">{">>>"}</p>
                </div>
            </div>}
        </div>
    )
}

export default ExpertiseCard