import { RecoilRoot } from "recoil";
import ProfileComp from "../components/ProfileComp";
import ProfileNavBar from "../components/ProfileNavBar"

const Profile = () => {


  return (
    <RecoilRoot>
      <div>
        <ProfileNavBar back={false} />
        <div className="flex items-center flex-col mt-6 p-6 sm:p-0">
          <ProfileComp />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default Profile;