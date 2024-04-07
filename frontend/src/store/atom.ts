import { DefaultValue, atom, selector } from "recoil";

export const SignUpDribble = atom({
  key: "SignUpDribble",
  default: {
    name: "",
    username: "",
    email: "",
    password: ""
  }
})

export const SignUpDribbleSelector = selector({
  key: "SignUpDribbleSelector",
  get: ({get}) => {
      const data = get(SignUpDribble)
      return {data}
  },
  set: ({set}, value) => {
    if (value instanceof DefaultValue) {
      set(SignUpDribble, value);
      return;
    }
    set(SignUpDribble, value.data);
  },
})
