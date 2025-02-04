import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  phone: Number,
});
export const Students =
  mongoose.models.students || mongoose.model("students", studentSchema);
