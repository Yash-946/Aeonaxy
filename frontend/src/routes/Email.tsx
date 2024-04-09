import { RecoilRoot } from "recoil";
import EmailComp from "../components/EmailComp";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

const Email = () => {
  const { state } = useLocation()
  // console.log(state.email,state.imageURL);
  
  return (
    <RecoilRoot>
      <div>
        <NavBar imageURL={state.imageURL} />
        <div className="h-screen lg:h-0 flex flex-col justify-between">
          <EmailComp email={state.email} />
          <Footer />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default Email;