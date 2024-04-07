import { RecoilRoot } from "recoil";
import ProfileNavBar from "../components/ProfileNavBar";
import ReasonComp from "../components/ReasonComp";


const Reason = () => {

  return (
    <RecoilRoot>
      <div>
        <ProfileNavBar back={true} />
        <ReasonComp />
      </div>
    </RecoilRoot>
  );
}

export default Reason;