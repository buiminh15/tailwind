import React from "react";

function Layout({ children }) {
  return (
    <div className="mx-auto w-[1100px] h-full">
      {children}
    </div>
  );
}

export default Layout;
