"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdEditDocument } from "react-icons/md";
import DeleteProduct from "../component/DeleteProduct";

// async function getData() {
//   let data = await fetch("http://localhost:3000/database/api/");
//   let result = await data.json();
//   return result;
// }

const page = () => {
  // let student = await getData();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function getData() {
      let data = await fetch("http://localhost:3000/database/api/", {
        cache: "no-cache",
      });
      let result = await data.json();
      return setStudent(result);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>Students List</h1>
      {student.map((item) => (
        <div key={item._id}>
          <p>{item.name}</p>
          <Link href={`/students/${item._id}`}>
            <p>{item._id}</p>
          </Link>
          <Link href={`/students/${item._id}`}>
            <MdEditDocument />
          </Link>
          <DeleteProduct id={item._id}></DeleteProduct>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default page;
