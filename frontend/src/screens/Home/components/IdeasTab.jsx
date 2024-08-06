import React from "react";
import dateFormat from "dateformat";

const IdeasTab = ({ content, username, createdAt }) => {
  return (
    <article className="mt-1 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className=" p-2 rounded-[10px] bg-white  sm:p-6">
        <small>{dateFormat(createdAt, "mmmm dS, yyyy, h:MM TT")}</small>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            {content}
          </h3>
        </a>

        <div className="mt-4 flex flex-wrap gap-1">
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            Created by {username}
          </span>
        </div>
      </div>
    </article>
  );
};

export default IdeasTab;
