import clsx from "clsx";
import React from "react";
import { ViewGridIcon } from "@heroicons/react/outline";
import SearchLocation from "../SearchLocation";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";

const menu = [
  { label: "Investor Relations", url: "#" },
  { label: "Add Restaurant" },
  { label: "Log In", url: "#" },
  { label: "Sign Up", url: "#" },
];

function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const user = null;

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
    }
  };
  return (
    <div className="relative flex h-[420px] flex-col">
      <div className="relative h-[420px] w-full overflow-hidden">
        <img
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          className="absolute z-0 h-[420px] w-full scale-110 object-cover"
          alt=""
        />
      </div>

      <div className="absolute z-10 w-full">
        <div className="mx-auto w-[1100px]">
          <nav className="flex h-[72px] w-full justify-between py-4">
            <div className="h-full">
              <a
                className="flex h-full cursor-pointer items-center space-x-1"
                href="#"
                rel="noopener noreferrer"
              >
                <ViewGridIcon className="m-0 h-4 w-4 p-0 text-white" />
                <span className="text-base font-semibold text-white">
                  Get the App
                </span>
              </a>
            </div>
            <ul className="flex list-none">
              {menu.map((item, index) => (
                <li
                  className={clsx("ml-5 cursor-pointer p-2")}
                  key={`menu-${index}`}
                >
                  <a
                    className=" 
                text-lg
                text-white
                "
                    href={item?.url ? item.url : ""}
                    onClick={item?.onClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className={clsx("ml-5 cursor-pointer p-2 text-white")} onClick={login}>
                Test
              </li>
            </ul>
          </nav>

          <div className="mx-auto mt-8 h-full w-[766px]">
            <div className="text-center text-6xl font-bold uppercase italic text-white">
              zomato
            </div>
            <div className="mt-6 text-center text-4xl text-white">
              Discover the best food & drinks in{" "}
              <span className="text-4xl font-semibold tracking-wider">
                Delhi NCR
              </span>
            </div>
            <SearchLocation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
