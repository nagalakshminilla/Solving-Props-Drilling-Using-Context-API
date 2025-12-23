import { AppContext } from "../context/AppContext";
import Component2 from "./Component2";

function Component1() {
  const values = {
    a: "Aprna",
    b: "Bhanu",
    c: "Chandra",
    d: "Divya",
    e: "Eshwari",
    f: "Fathima",
  };

  return (
    <AppContext.Provider value={values}>
      <Component2 />
    </AppContext.Provider>
  );
}

export default Component1;
