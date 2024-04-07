
import { cn } from "../lib/util";
import { Check } from "lucide-react";

interface Cardprops {
  heading: string
  img: string
  checked: boolean
}

const Card = ({ heading, img, checked }: Cardprops) => {

  return (
    <div
      // onClick={handleButtonClick}
      className={cn(
        "w-[240px] h-[240px] border-solid border-gray-200 border-2 rounded-xl flex justify-center items-center flex-col cursor-pointer select-none",
        checked && "border-solid border-[#ea4b8a] border-2"
      )}
    >
      <div className="">
        <img
          src={img}
          alt=""
          className={cn(
            "w-48 h-28",
            checked && ""
          )} />
      </div>

      <div className="w-48 mt-2 font-extrabold text-base">
        <p className="text-center">{heading}</p>
      </div>

      {checked && <div className="text-xs mb-2 mt-2 p-1 hidden md:block">
        <p className="text-center font-medium ">With over 7 million shots from a vast community ofdesigners, Dribble is the leading source for design inspiration.</p>
      </div>}

      <button
        type="button"
        role="button"
        className={cn(
          " mt-2 ",
          checked && "md:mb-20"
        )}
      // onClick={handleButtonClick}
      >
        <div
          className={cn(
            "h-5 w-5 border-solid border-gray-200 border-[1.5px] rounded-full flex justify-center items-center",
            checked && "bg-[#ea4b8a] border-none"
          )}
        >
          {checked && <Check size="15px" color="white" />}
        </div>
      </button>
    </div>
  );
}

export default Card;