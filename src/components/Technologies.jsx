import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl font-bold  "> Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
            </div>
            <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <TbBrandNextjs className="text-7xl text-black-400"></TbBrandNextjs>
            </div>
            <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <SiMongodb className="text-7xl text-green-400"></SiMongodb>
            </div>
            <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <FaNodeJs className="text-7xl text-green-600"></FaNodeJs>
            </div>
            <div className="rounded-2xl border-4 border-neutral-300 p-4">
                <SiExpress className="text-7xl text-green-600"></SiExpress>
            </div><div className="rounded-2xl border-4 border-neutral-300 p-4">
                <RiTailwindCssFill className="text-7xl text-blue-400"></RiTailwindCssFill>
            </div>
            
            
        </div>
        </div>

    
  )
}

export default Technologies