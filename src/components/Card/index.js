import React from "react";

function Card() {
  return (
    <div className="p-6 space-x-4 mx-auto max-w-sm rounded-lg flex items-center bg-white shadow-2xl">
      <div>
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
          alt="logo"
        />
      </div>
      <div className="">
        <div className="text-2xl text-blue-900 font-semibold">Chitchat</div>
        <p className="text-xl text-slate-500">Lorem ipsum dolor sit.</p>
      </div>
    </div>
  );
}

export default Card;
