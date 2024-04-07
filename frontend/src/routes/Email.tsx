import { RecoilRoot } from "recoil";
import EmailComp from "../components/EmailComp";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Email = () => {
  return (
    <RecoilRoot>
      <div>
        <NavBar />
        <EmailComp />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default Email;