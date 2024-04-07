import { ChevronLeft } from "lucide-react";

interface ProfileNavBarProps {
  back: boolean;
}

const ProfileNavBar = ({ back }: ProfileNavBarProps) => {
  return (
    <div className="flex justify-start px-10 py-8">
      <a href="#" className="flex items-center">
        <img src="/DF.png" className="h-8" alt="dribble Logo" />
      </a>
      {back && <div role="button" onClick={() => history.back()} className="w-10 h-10 bg-gray-200 rounded-md ml-8 flex items-center justify-center cursor-pointer">
        <ChevronLeft />
      </div>}
    </div>
  );
}

export default ProfileNavBar;