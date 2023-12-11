import { socialMedia } from "../constants"


const Contact = () => {
  return (
    <div className="padding-y text-md text-slate-50/90 font-poppins  ">
      <div className="grid grid-cols-2 gap-x-20 justify-center items-center padding-x pt-20">
        <span className="before:block before:absolute before:bottom-0 before:w-[140px] before:h-2.5 before:bg-rose-red relative inline-block col-span-2 mb-10">
          <span className="relative text-4xl font-bold shadow-lg text-white">Ġet în Ťouch.</span>
        </span>

        <p className="italic col-span-1">
        Ready for a digital adventure or have a unique concept in mind? Let's bring it to life! Whether it's crafting compelling videos, building innovative websites, designing stunning graphics, or sculpting 3D wonders, I'm here to turn your ideas into a captivating reality. Send me an email or contact me via instant message!
        </p>

        <div className="col-span-1">
          <div className="flex flex-col justify-start items-center">
            <p className="special-font-logo text-secondary text-8xl -rotate-6 mb-16">Shafi.</p>

            <p className="font-medium">
              &#123;&nbsp;
              <a href="mailto: shafiwalsher@gmail.com" target="_blank" className="underline decoration-wavy decoration-rose-red">shafiwalsher@gmail.com</a>
              &nbsp;&#125;
            </p>

            <div className="mt-5 flex gap-x-6">
            {socialMedia.map((item) => (
                <a key={item.alt} href={item.href} className="cursor-pointer" target="_blank">
                  <img 
                    key={item.alt} 
                    src={item.src} 
                    alt={item.alt} 
                    width={40} 
                    height="auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact