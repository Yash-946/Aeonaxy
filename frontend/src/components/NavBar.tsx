import { Search } from "lucide-react";
import { cn } from "../lib/util";

const NavBar = () => {
  return (
    <div className="flex justify-between px-4 py-4 border-b">
      <div className="flex items-center justify-evenly">
        <a href="#" className="flex items-center">
          <img src="/Blacklogo.svg" className="h-4" alt="dribble Logo" />
        </a>
        <Option heading="Inspiration" />
        <Option heading="Find Work" />
        <Option heading="Learn Design" />
        <Option heading="Go Pro" />
        <Option heading="Hire Designers" />
      </div>
      <div className="flex items-center justify-evenly">
        <div className="w-32 h-9 bg-gray-200 rounded-md flex justify-start items-center p-2 select-none cursor-text">
          <Search color="#c2aeae" strokeWidth={2.25} size={18}/>
          <p className="ml-2 text-gray-400 font-semibold text-sm">Search</p>
        </div>
        <div className="ml-3 cursor-pointer">
          <img className="h-8 w-8" src="/briefcase.jpg" alt="" />
        </div>
        <div className="ml-3 cursor-pointer">
          <img className="w-8 h-8 rounded-full" src="/b.jpg" alt="Rounded avatar" />
        </div>
        <button
          type="button"
          className={cn(
            "text-white bg-[#ea4b8a] font-medium rounded-lg text-sm px-3 py-2 ml-3",
          )}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

interface OptionProps {
  heading: string
}
function Option({ heading }: OptionProps) {
  return (
    <a className="text-gray-500 font-bold ml-4 text-sm cursor-pointer select-none" href="#">
      {heading}
    </a>
  )
}

export default NavBar;