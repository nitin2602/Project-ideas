import React, { useState } from "react";
import Header from "./../Home/components/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
const AddNewScreen = () => {
  const [content, setcontent] = useState();
  const [username, setusername] = useState();

  const navigate = useNavigate();

  const ideaSubmit = async () => {
    const data = {
      content: content,
      username: username,
    };

    try {
      const response = await axios.post("https://project-ideas-alpha.vercel.app/user", data);
      toast.success("Idea saved successfully!", {
        onClose: () => navigate("/"),
      });
      console.log("User created:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className=" h-screen scroll-smooth">
      <Header />
      <div className=" flex flex-col">
        <div className=" flex flex-col gap-3">
          <h1 className=" font-semibold  mt-5 text-2xl mb-1">
            Write your Idea here 👇🏼
          </h1>
          <textarea
            className="textarea textarea-bordered border-primary"
            placeholder="Ideaaaaa......"
            onChange={(e) => {
              setcontent(e.target.value);
            }}
          ></textarea>
        </div>
        <div className=" flex flex-col gap-3">
          <h1 className=" font-semibold  mt-5">Your Username 😀</h1>
          <input
            type="text"
            placeholder="Hello Mister/misses ..."
            className="input input-bordered w-full max-w-xs border-primary"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            ideaSubmit();
          }}
          type="submit"
          disabled={!(content && username)}
          className="btn btn-primary w-full mt-5"
        >
          Submit
        </button>
      </div>

      <div className=" w-full flex justify-center items-center mt-2">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-error text-white"
        >
          <IoArrowBackSharp />
          Back
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddNewScreen;
