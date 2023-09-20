import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../App";

const Cards = () => {
  const {posts , setPosts} =useContext(AppContext)
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const LastIndex = currentPage * recordsPerPage;
  const FirstIndex = LastIndex - recordsPerPage;
  const records = posts.slice(FirstIndex, LastIndex);
  const npages = Math.ceil(posts.length / recordsPerPage);
  const number = [...Array(npages + 1).keys()].slice(1);
  const date = new Date();

  async function handleDelete(id) {
    const result = posts.filter((i) => i.id !== id);
    setPosts(result);
  }

  function PrePage() {
    if (currentPage !== FirstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== LastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="p-8">
      {records.map((item, i) => {
        return (
          <div
            key={i}
            className=" w-[700px] shadow-lg bg-slate-400 border rounded-lg m-2 p-2"
          >
            {item.id} :
            <div className=" text-lg">{item.title}</div>
            {/* <div className="w-[700px] text-xs"> {item.body}</div> */}
            <div className=" text-center font-mono font-bold text-gray-600">
              {date.toUTCString()}
            </div>
            <button
              className=" float-right bg-red-900 rounded-full pl-2 pr-2  cursor-pointer shadow-xl text-white"
              onClick={() => handleDelete(item.id)}
            >
              X
            </button>
          </div>
        );
      })}
      <nav>
        <ul className="flex p-2 m-2">
          <li>
            <a
              className="m-2 rounded-lg bg-slate-800 font-mono text-white p-1"
              onClick={PrePage}
              href="#"
            >
              {" "}
              Previous
            </a>
          </li>
          {number.map((n, i) => {
            <li key={i}>
              <a
                className=" bg-slate-800 font-mono text-white p-1"
                onChange={changeCPage}
                href="#"
              >
                {n}
              </a>
            </li>;
          })}
          <li>
            <a
              className=" rounded-lg bg-slate-800 font-mono text-white p-1"
              onClick={nextPage}
              href="#"
            >
              {" "}
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Cards;
