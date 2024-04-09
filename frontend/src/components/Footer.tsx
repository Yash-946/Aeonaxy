import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDribbble, faFacebookSquare, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#fafafa] flex flex-col p-6 lg:p-12">
      <div className="mt-3 lg:mt-5 flex justify-evenly border-b lg:pb-14 pb-7">
        <div className="w-[130px] lg:w-[260px] p-1 lg:p-2">
          <div>
            <img className="w-14 h-5 lg:w-28 lg:h-10" src="/DF.png" alt="" />
          </div>
          <div className="mt-4 text-left text-sm hidden lg:block">
            Dribble is the world's leading community for creatives to share grow, and get hired
          </div>
          <div className="mt-4 flex justify-start text-xs lg:text-lg gap-2 lg:gap-4">
            <FontAwesomeIcon icon={faDribbble} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>

        <div className="p-2">
          <Heading heading="For designers" />
          <Subheading subheading="Go pro!" />
          <Subheading subheading="Explore design work" />
          <Subheading subheading="Design blog" />
          <Subheading subheading="Overtime podcast" />
          <Subheading subheading="Playoffs" />
          <Subheading subheading="Weekly Warm-Up" />
          <Subheading subheading="Refer a friend" />
          <Subheading subheading="Code of conduct" />
        </div>
        <div className="p-2">
          <Heading heading="Hire designers" />
          <Subheading subheading="Post a job opening" />
          <Subheading subheading="Post a freelance project" />
          <Subheading subheading="Search for designers" />
          <div className="mt-5">
            <Heading heading="Brands" />
          </div>
          <Subheading subheading="Advertise with us" />
        </div>
        <div className="p-2">
          <Heading heading="Company" />
          <Subheading subheading="About" />
          <Subheading subheading="Careers" />
          <Subheading subheading="Support" />
          <Subheading subheading="Media kit" />
          <Subheading subheading="Testimonials" />
          <Subheading subheading="API" />
          <Subheading subheading="Terms of services" />
          <Subheading subheading="Privacy policy" />
          <Subheading subheading="Cookie policy" />

        </div>
        <div className="hidden sm:block p-2">
          <Heading heading="Directories" />
          <Subheading subheading="Design jobs" />
          <Subheading subheading="Designers for hire" />
          <Subheading subheading="Freelance designers for hire" />
          <Subheading subheading="Tags" />
          <Subheading subheading="Places" />
          <div className="mt-5">
            <Heading heading="Design assets" />
          </div>
          <Subheading subheading="Dribble Marketplace" />
          <Subheading subheading="Creative Market" />
          <Subheading subheading="Fontspring" />
          <Subheading subheading="Font Squirrel" />
        </div>
        <div className="p-2 hidden lg:block">
          <Heading heading="Design Resources" />
          <Subheading subheading="Freelancing" />
          <Subheading subheading="Design Hiring" />
          <Subheading subheading="Design Portfolio" />
          <Subheading subheading="Design Education" />
          <Subheading subheading="Creative Process" />
          <Subheading subheading="Design Industry trends" />
        </div>
      </div>

      <div className="mt-10 lg:mt-14 flex justify-between">
        <div className=" flex items-center">
          <div className="mr-1">
            <Copyright size={15} color="gray" />
          </div>
          <span className="text-xs lg:text-sm text-gray-400">2024 Dribble. All rights reserved</span>

        </div>
        <div className="flex items-center">
          <span className="font-semibold lg:font-bold text-xs lg:text-sm">20,501,853</span>
          <p className="ml-1 text-gray-400 text-xs lg:text-sm">shots dribbled</p>
          <FontAwesomeIcon icon={faDribbble} className="ml-2 text-lg lg:text-xl text-red-700" />
        </div>
      </div>
    </div>
  );
}

interface headingprops {
  heading: string
}
interface subheadingprops {
  subheading: string
}
function Heading({ heading }: headingprops) {
  return (
    <div className="lg:font-bold lg:text-sm text-xs font-semibold">
      {heading}
    </div>
  )
}
function Subheading({ subheading }: subheadingprops) {
  return (
    <div className="font-semibold mt-3 text-xs hidden lg:block">
      {subheading}
    </div>
  )
}

export default Footer;