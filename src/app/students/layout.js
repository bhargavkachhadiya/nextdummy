"use client";
import { useRouter } from "next/navigation";
import React from "react";

const layout = ({ children }) => {
  const route = useRouter();
  return (
    <div>
      <button
        style={{ margin: 10, padding: 10 }}
        onClick={() => route.push("/students")}
      >
        Student List
      </button>
      <button
        style={{ margin: 10, padding: 10 }}
        onClick={() => route.push("/students/addstudent")}
      >
        Add Student
      </button>
      {children}
    </div>
  );
};

export default layout;
