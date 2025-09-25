import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required!"],
    minLength: [3, "First name must contain at least 3 characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required!"],
    minLength: [3, "Last name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required!"],
    minLength: [11, "Phone number must contain exactly 11 digits!"],
    maxLength: [11, "Phone number must contain exactly 11 digits!"],
  },
  nic: {
    type: String,
    required: [true, "NIC is required!"],
    minLength: [13, "NIC must contain exactly 13 digits!"],
    maxLength: [13, "NIC must contain exactly 13 digits!"],
  },
  dob: {
    type: Date,
    required: [true, "Date of birth is required!"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required!"],
    enum: ["Male", "Female"],
  },
  appointment_date: {
    type: Date,
    required: [true, "Appointment date is required!"],
  },
  department: {
    type: String,
    required: [true, "Department name is required!"],
  },
  doctor: {
    firstName: {
      type: String,
      required: [true, "Doctor's first name is required!"],
    },
    lastName: {
      type: String,
      required: [true, "Doctor's last name is required!"],
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: [true, "Address is required!"],
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Doctor ID is required!"],
    ref: "User",
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Patient ID is required!"],
    ref: "User",
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);