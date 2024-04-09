import { Search } from "lucide-react";
import { cn } from "../lib/util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler, useState } from "react";

interface NavBArProps {
  imageURL: string
}

const NavBar = ({ imageURL }: NavBArProps) => {

  const [navbar, Setnavbar] = useState(false)
  const hanldeOnclick:MouseEventHandler<HTMLDivElement> = () => {
    Setnavbar(!navbar)
  }

  return (
    <>
      <div className="flex justify-between px-2 py-2 lg:px-4 lg:py-4 border-b">
        <div className="flex items-center justify-evenly gap-2">
          <div className="" onClick={hanldeOnclick}><FontAwesomeIcon icon={faBars} className="lg:hidden"  /></div>
          
          <a href="" className="flex items-center">
            <img src="/Blacklogo.svg" className="h-4" alt="dribble Logo" />
          </a>
          <Option heading="Inspiration" />
          <Option heading="Find Work" />
          <Option heading="Learn Design" />
          <Option heading="Go Pro" />
          <Option heading="Hire Designers" />
        </div>

        <div className="flex items-center justify-evenly gap-2">
          <div className="lg:w-32 lg:h-9 bg-gray-200 rounded-md flex justify-start items-center p-1 lg:p-2 select-none cursor-text">
            <Search color="#c2aeae" strokeWidth={2.25} size={18} />
            <p className="lg:ml-2 text-gray-400 font-semibold text-sm hidden lg:block ">Search</p>
          </div>
          <div className="lg:ml-3 cursor-pointer">
            <img className="h-8 w-8" src="/briefcase.jpg" alt="" />
          </div>
          <div className="lg:ml-3 cursor-pointer">
            <img className=" w-6 h-6 lg:w-8 lg:h-8 rounded-full" src={imageURL} alt="Rounded avatar" />
          </div>
          <button
            type="button"
            className={cn(
              "text-white bg-[#ea4b8a] font-medium rounded-lg  text-[10px] lg:text-sm px-2 py-1 lg:px-3 lg:py-2 lg:ml-3",
            )}
          >
            Upload
          </button>
        </div>
      </div>

      <div className={cn(
        " px-4 py-4 hidden border-b-2",
        navbar && "block flex flex-col gap-2"
        
        )}>
          <Option2 heading="Inspiration" />
          <Option2 heading="Find Work" />
          <Option2 heading="Learn Design" />
          <Option2 heading="Go Pro" />
          <Option2 heading="Hire Designers" />
      </div>
    </>
  );
}

interface OptionProps {
  heading: string
}
function Option({ heading }: OptionProps) {
  return (
    <a className="text-gray-500 font-bold ml-4 text-sm cursor-pointer select-none hidden lg:block" href="">
      {heading}
    </a>
  )
}
function Option2({ heading }: OptionProps) {
  return (
    <a className="text-gray-500 font-bold ml-4 text-sm cursor-pointer select-none" href="">
      {heading}
    </a>
  )
}

export default NavBar;