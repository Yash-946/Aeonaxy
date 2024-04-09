import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "../lib/util";
import { useNavigate } from "react-router-dom";
import { ValidEmail, ValidPassword } from "../validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BACKEND_URL } from "../../config";

const SignUpComp = () => {
  const [signup, setSignup] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  })
  const route = useNavigate();
  const isMobile = useMediaQuery("(max-width: 420px)");

  const [errorText, SetErrorText] = useState("");
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    if (id === "email") {
      const s = ValidEmail.safeParse({ email: value });
      if (!s.success) {
        setError(!s.success)
        SetErrorText("Please enter valid email")
      }
      else {
        setError(!s.success)
        SetErrorText("")
      }
    }
    if (id === "password") {
      const s = ValidPassword.safeParse({ password: value });
      if (!s.success) {
        setError(!s.success)
        SetErrorText("Please enter valid password")
      }
      else {
        setError(!s.success)
        SetErrorText("")
      }
    }
    if(id==="email"){
      sessionStorage.setItem(id, value)
    }
    setSignup({ ...signup, [id]: value });
  }

  const handleCreateAccountbutton: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()
    if (signup.name === "" || signup.username === "" || signup.email === "" || signup.password === "") {
      setError(!error)
      SetErrorText("Inputs Are Empty")
    }
    else {
      const response = await axios.post(`${BACKEND_URL}/user/signup`, signup)
      const StatusCode = response.status;

      if (StatusCode === 202) {
        if (response.data.error.target[0] === "username") {
          setUsernameError(!usernameError)
          setError(!error)
          SetErrorText("Username already taken")
          // console.log(`username`);
        }
        else if (response.data.error.target[0] === "email") {
          setError(!error)
          SetErrorText("Email is already taken")
          // console.log(`email`);
        }
      }
      else if (StatusCode === 200) {
        const id = response.data.post.id
        sessionStorage.setItem("id", id);
        route("/profile");
      }
    }
  }

  const handleOnChange = () => {
    setChecked(!checked)
  };

  return (
    <div className="h-screen flex  flex-col">
      <div className="flex justify-end sm:mb-20 p-6 font-semibold">Already a member? <a href="#" className="ml-1 text-blue-500 cursor-pointer">Sign In</a></div>

      <div className="flex justify-center mb-10 sm:mb-32 p-6 md:p-2">
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold">
            Sign up to Dribble
          </div>

          <div className="text-red-500 mt-6 h-5">
            {error && `• ${errorText}`}
          </div>

          <div className={cn("mt-4 sm:mt-8")}>
            <div className="flex justify-between	">
              <LabelledInput label="Name" placeholder="Enter Your Name" onChange={handle} />

              <div className="ml-4 flex items-center">
                <div>
                  <div className="flex items-start">
                    {usernameError && <div className="pt-3 mr-1"> <FontAwesomeIcon icon={faTriangleExclamation} color="red" /></div>}
                    <label className="block mb-1 text-sm text-black font-extrabold pt-4">Username</label>
                  </div>

                  <input onChange={handle} type="text" id="username" className="bg-gray-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" placeholder="Username" required />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <LabelledInput label="Email" placeholder="abc@xyz.com" onChange={handle} />
            </div>

            <div className="mt-4">
              <LabelledInput label="Password" type={"Password"} placeholder="6+ characters" onChange={handle} />
            </div>

            <div className="flex items-start mt-4">
              <div>
                <input type="checkbox" className="w-4 h-4 " checked={checked} onChange={handleOnChange} />
              </div>
              <div className={cn(
                "ml-3 text-xs",
                isMobile && "hidden"
              )}
              >
                <div className="font-medium text-gray-600">Creating an account means you're okay with our <a className="font-medium text-blue-500" href="#">Terms of <br /> Service, Privacy Policy</a>, and our deafult <a className="font-medium text-blue-500" href="#">Notification <br />Settings</a>.</div>

              </div>
              {isMobile && <div className="ml-3 text-xs ">
                <label className="font-medium text-gray-600">Creating an account means you're okay with our <a className="font-medium text-blue-500" href="#">Terms of  Service, Privacy Policy</a>, and our deafult <a className="font-medium text-blue-500" href="#">Notification Settings</a>.</label>
              </div>}
            </div>

            <button onClick={handleCreateAccountbutton} type="button" className={cn(
              "mt-8 w-1/2	 text-white bg-[#ea4b8a] font-medium rounded-lg text-xs sm:text-sm sm:px-5 py-2.5 me-2 mb-2",
            )} disabled={!checked}>
              Create Account
            </button>

            <div className="mt-4 text-[10px]">
              <p>This site is protected by reCAPTCHA and the Google <br /><a href="#" className="font-medium text-blue-500">Privacy Policy</a> and <a href="#" className="font-medium text-blue-500">Terms of Services</a> apply.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string,
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return <div>
    <div className="flex items-start">
      <label className="block mb-1 text-sm text-black font-extrabold pt-4">{label}</label>
    </div>

    <input onChange={onChange} type={type || "text"} id={label.toLowerCase()} className="bg-gray-100 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none" placeholder={placeholder} required />
  </div>
}

export default SignUpComp;