import React from "react";
import { FcIdea } from "react-icons/fc";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" text-center">
      <div
        className=" flex flex-col justify-between gap-3 items-center p-5 border rounded-xl  shadow-xl lg:flex-row
      "
      >
        <div className=" flex gap-2">
          <h2 className=" font-bold text-lg  ">Idea Generator!</h2>
          <FcIdea className=" text-2xl" />
        </div>
        <Link to="/new">
          <button className=" font-bold btn btn-primary">
            Add new idea
            <CiCirclePlus className=" font-bold text-2xl text-white " />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
