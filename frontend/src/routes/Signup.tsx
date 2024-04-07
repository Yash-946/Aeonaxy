import { RecoilRoot } from "recoil";
import SignUpComp from "../components/SignupComp";

const SingUp = () => {
  return (
    <RecoilRoot>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div className="hidden lg:block">
          <img
            className="h-screen"
            src="/image2.jpeg"
            alt="Dibble logo"
          />
        </div>
        <div className="xl:col-span-2">
          <SignUpComp />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default SingUp;