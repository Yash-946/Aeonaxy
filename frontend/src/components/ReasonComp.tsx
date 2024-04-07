import { MouseEventHandler, useState } from "react";
import { cn } from "../lib/util";
import Card from "./ReasonCard";
import { useRecoilValue } from "recoil";
import { SignUpDribble } from "../store/atom";
import { useNavigate } from "react-router-dom";

const ReasonComp = () => {
  const route = useNavigate();
  const signup = useRecoilValue(SignUpDribble)
  console.log(signup);
  
  const [reason1, setReason1] = useState<boolean>(false);
  const [reason2, setReason2] = useState<boolean>(false);
  const [reason3, setReason3] = useState<boolean>(false);

  const handleButtonClickReason1 = () => {
    setReason1(!reason1);
  };
  const handleButtonClickReason2 = () => {
    setReason2(!reason2);
  };
  const handleButtonClickReason3 = () => {
    setReason3(!reason3);
  };

  const handleFinishbutton: MouseEventHandler<HTMLButtonElement> = (event) => {
    route("/email");
  };

  return (
    <div className="flex items-center flex-col mt-3 md:mt-6 p-6 sm:p-0">

      <div>
        <p className="text-2xl md:text-4xl font-extrabold">What brings you to Dribble?</p>
      </div>

      <div className="text-sm md:text-base mt-3 text-gray-500 font-medium text-center">
        Select the options that best describe you. Don't worry, you can explore other options later.
      </div>

      <div className="mt-12 md:mt-32 flex flex-col space-y-2 md:space-y-0 md:space-x-5 md:flex-row p-2 ">
        <div role="button" onClick={handleButtonClickReason1}>
          <Card heading="I'm a designer looking to share my work" img="/R1R.png" checked={reason1} />
        </div>
        <div role="button" onClick={handleButtonClickReason2}>
          <Card heading="I'm looking to hire a designer" img="/R2R.png" checked={reason2} />
        </div>
        <div role="button" onClick={handleButtonClickReason3}>
          <Card heading="I'm looking for designer inspiration" img="/R3R.png" checked={reason3} />
        </div>
      </div>

      {(reason1 || reason2 || reason3) && <div className="mt-8 text-sm md:mt-16 md:text-base font-bold">
        Anything else? You can select mutliple
      </div>}

      <button
        type="button"
        className={cn("mt-[75px] mb-6 md:mt-28 md:mb-10 w-[200px] text-white bg-[#f6b9d0] font-medium rounded-lg text-sm px-5 py-2.5 me-2",
          (reason1 || reason2 || reason3) && "bg-[#ea4b8a] cursor-pointer mt-6 md:mt-6 md:mb-2"
        )}
        onClick={handleFinishbutton}
        disabled={!reason1 && !reason2 && !reason3}
      >
        Finish
      </button>

      {(reason1 || reason2 || reason3) && <div className="w-1/3 flex justify-center md:mb-4">
        <div className="text-gray-400 font-bold text-sm">
          <p>or Press Return</p>
        </div>
      </div>}

    </div>
  );
}

export default ReasonComp;