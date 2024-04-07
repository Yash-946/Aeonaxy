import { Camera, ChevronRight } from "lucide-react";
import React, { MouseEventHandler, useRef, useState } from "react";
import { cn } from "../lib/util";
import { useNavigate } from "react-router-dom";

const ProfileComp = () => {
  const route = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const [location, setLocation] = useState<string>("");

  const handleImageClick = () => {
    inputRef.current?.click();
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file || null);
  };

  const locationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const x = e.target.value;
    setLocation(x);
  }

  const handleNextbutton: MouseEventHandler<HTMLButtonElement> = (event) => {
    route("/reason");
  };

  return (
    <div className="">
      <div className="text-2xl sm:text-4xl font-bold">
        Welcome! Let's create your profile
      </div>
      <div className="mt-4 text-gray-500 sm:font-medium">
        Let Others get to know you better! You can do better later
      </div>
      <div className="mt-10 text-xl sm:text-2xl font-bold">
        Add an avatar
      </div>

      <div className="mt-4 flex">
        <div className=" flex items-center justify-center" role="button" onClick={handleImageClick}>
          <div className="w-32 h-32 sm:w-44 sm:h-44 border-dashed border-gray-300 border-2 rounded-full flex items-center justify-center">
            <input
              type="file"
              accept=".png, .jpeg, .jpg"
              className="hidden"
              ref={inputRef}
              onChange={handleImageChange}
            />
            {!image && <Camera color="grey" />}
            {image && <img className="w-32 h-32 sm:w-44 sm:h-44 rounded-full" src={URL.createObjectURL(image)} />}
          </div>
        </div>
        <div className="ml-10 h-32 flex flex-col justify-center items-start">
          <button
            type="button"
            className="py-2.5 px-5  text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
            onClick={handleImageClick}
          >
            Choose image
          </button>
          <div className="flex mt-4 font-semibold text-gray-400">
            <ChevronRight />
            <p> Or chosse one of our defaults</p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-xl sm:text-2xl font-bold">
        Add your location
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Enter a location"
          className="mt-5 w-full text-sm sm:text-lg border-b-2 pb-2
        outline-none font-semibold"
          onChange={locationChange}
        />

      </div>
      <button
        type="button"
        className={cn(
          "mt-12 mb-2 w-1/3 text-white bg-[#f6b9d0] font-medium rounded-lg text-sm px-5 py-2.5 me-2",
          image && location && "bg-[#ea4b8a] cursor-pointer"
        )}
        disabled={!image || !location}
        onClick={handleNextbutton}
      >
        Next
      </button>
      {image && location && <div className="w-1/3 flex justify-center mb-14">
        <div className="text-gray-400 font-bold text-sm">
          <p>or Press Return</p>
        </div>
      </div>}
    </div>
  );
}

export default ProfileComp;