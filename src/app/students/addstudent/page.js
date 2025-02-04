"use client";
// import { Students } from "@/app/database/model/Students";
// import mongoose from "mongoose";
import React, { useEffect, useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    let data = await fetch("http://localhost:3000/database/api", {
      method: "POST",
      body: JSON.stringify({ name, email, gender, phone }),
    });
    data = await data.json();
    console.log(data);
  };

  const handleReset = () => {
    setName("");
    setGender("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h1>Add New Student</h1>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginTop: 10, marginLeft: 10, marginBottom: 10, padding: 10 }}
      />
      <input
        type="text"
        placeholder="Enter Student's Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={{ marginTop: 10, marginLeft: 10, marginBottom: 10, padding: 10 }}
      />
      <input
        type="text"
        placeholder="Enter Student's Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginTop: 10, marginLeft: 10, marginBottom: 10, padding: 10 }}
      />
      <input
        type="text"
        placeholder="Enter Student's Phone No."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ marginTop: 10, marginLeft: 10, marginBottom: 10, padding: 10 }}
      />
      <button style={{ margin: 10, padding: 10 }} onClick={handleSubmit}>
        Submit
      </button>
      <button style={{ margin: 10, padding: 10 }} onClick={handleReset}>
        Reset
      </button>
      <p style={{ marginLeft: 10 }}>Name : {name}</p>
      <p style={{ marginLeft: 10 }}>Gender : {gender}</p>
      <p style={{ marginLeft: 10 }}>Email : {email}</p>
      <p style={{ marginLeft: 10 }}>Phone : {phone}</p>
    </div>
  );
};

export default page;
