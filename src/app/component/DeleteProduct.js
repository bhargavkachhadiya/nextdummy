"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { MdDelete } from "react-icons/md";

const DeleteProduct = (props) => {
  const route = useRouter();
  const deleteRecord = async () => {
    let payload = await props.id;
    let data = await fetch("http://localhost:3000/database/api/" + payload, {
      method: "DELETE",
    });
    data = await data.json();
    return alert("Product Deleted Successfully"), route.push("/students");
  };

  return (
    <div>
      <button onClick={deleteRecord}>
        <MdDelete />
      </button>
      <Link href="/students" onClick={deleteRecord}>
        <MdDelete />
      </Link>
    </div>
  );
};

export default DeleteProduct;
