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

