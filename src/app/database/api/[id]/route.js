import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { mongodbconnection } from "../../config";
import { Students } from "../../model/Students";

export async function GET(req, res) {
  let payload = await res.params;
  let resId = await payload.id;
  await mongoose.connect(mongodbconnection);
  let result = await Students.findById({ _id: resId });
  return NextResponse.json(result);
}

export async function PUT(req, res) {
  await mongoose.connect(mongodbconnection);
  let payload = await res.params;
  let resId = await payload.id;
  let data = await req.json();
  let result = await Students.findByIdAndUpdate({ _id: resId }, data);
  return NextResponse.json(data);
}

export async function DELETE(req, res) {
  await mongoose.connect(mongodbconnection);
  let payload = await res.params;
  let resId = await payload.id;
  let result = await Students.findByIdAndDelete({ _id: resId });
  return NextResponse.json(result);
}
