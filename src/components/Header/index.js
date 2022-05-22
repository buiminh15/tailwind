import clsx from "clsx";
import React, { useState } from "react";

const menu = ["Home", "About", "Contact"];

function Header() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex h-[48px] items-center justify-between bg-slate-50">
      <div className="">
        <a
          className="cursor-pointer space-x-2"
          href="#"
          rel="noopener noreferrer"
        >
          <img
            className="inline-block h-10 w-10 rounded-md object-cover"
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
            alt="logo"
          />
          <span className="font-bold text-emerald-700">COMPANY</span>
        </a>
      </div>
      <nav className="">
        <ul className="flex list-none">
          {menu.map((item, index) => (
            <li className={clsx("ml-4 cursor-pointer")} key={`menu-${index}`}>
              <a
                className="relative 
                font-medium 
                after:absolute 
                after:left-0 
                after:bottom-[-6px] 
                after:h-0 
                after:w-full 
                after:transition 
                after:duration-300
                after:ease-in
                after:content-['']
                hover:after:h-[1px]
                hover:after:w-full hover:after:bg-emerald-700
                "
                style={
                  activeTab === index ? { color: "red" } : { color: "blue" }
                }
                onClick={() => setActiveTab(index)}
                href="#"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
