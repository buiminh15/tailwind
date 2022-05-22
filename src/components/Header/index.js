import clsx from "clsx";
import React from "react";

const menu = [
  { label: "Investor Relations", url: "#" },
  { label: "Add Restaurant", url: "#" },
  { label: "Log In", url: "#" },
  { label: "Sign Up", url: "#" },
];

function Header() {
  return (
    <div className="flex h-[420px] flex-col bg-gray-800">
      <nav className="flex h-[72px] w-full justify-between py-4">
        <div className="">
          <a
            className="cursor-pointer space-x-2"
            href="#"
            rel="noopener noreferrer"
          >
            <span className="text-base font-semibold text-white">
              Get the app
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
                href={item.url}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto h-full w-[766px] bg-slate-600">
        <div className="text-center text-6xl font-bold uppercase italic text-white">
          zomato
        </div>
        <div className="text-center text-3xl text-white mt-8">
          Discover the best food & drinks in <span className="text-4xl">Delhi NCR</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
