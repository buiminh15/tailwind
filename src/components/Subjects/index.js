import React from "react";

export const Subject = ({ img, name, keySubject }) => (
  <a
    key={keySubject}
    href="https://www.zomato.com/"
    className="flex-1 overflow-hidden rounded-xl bg-white shadow duration-300 hover:scale-105 hover:transition-all"
  >
    <img
      className="h-52 w-full object-cover"
      src="https://images.unsplash.com/photo-1653277380027-834d21cf9cb7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"
      alt="test"
    />
    <div className="mt-3 mb-4 text-center capitalize">{name}</div>
  </a>
);

function Subjects() {
  return (
    <div className="mt-10 flex space-x-4">
      {Array(4)
        .fill(1)
        .map((i, index) => (
          <Subject name="test" key={`subject-item-${index}`} />
        ))}
    </div>
  );
}

export default Subjects;
