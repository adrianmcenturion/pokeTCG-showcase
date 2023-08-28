import { energySymbols } from "@/constants"
import Image from "next/image"
import Marquee from "react-fast-marquee"

const MarqueeComponent = () => {
  return (
    <Marquee className="w-full h-12 lg:h-16 bg-black" autoFill>
        <div className=" flex gap-10 pl-10 lg:gap-20 lg:pl-20">
            {energySymbols.map(energy => (
                <div key={energy.src} className="relative w-6 h-6 lg:w-8 lg:h-8">
                    <Image src={energy.src} alt={energy.alt} fill className="object-contain" sizes="(max-width: 375px) 5vw, (max-width: 1200px) 5vw"/>
                </div>
            ))}
        </div>
    </Marquee>
  )
}
export default MarqueeComponent