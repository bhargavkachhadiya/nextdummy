import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { mongodbconnection } from "../config";
import { Students } from "../model/Students";

export async function GET() {
  await mongoose.connect(mongodbconnection);
  let result = await Students.find();
  // let data = await result.json();
  return NextResponse.json(result);
}

export async function POST(req, res) {
  let payload = await req.json();
  await mongoose.connect(mongodbconnection);
  let student = new Students(payload);
  let result = await student.save();
  return NextResponse.json(result);
}
