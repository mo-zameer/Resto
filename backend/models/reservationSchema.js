import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [1, "First name must be of atleast 1 Character."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [1, "Last name must be of atleast 1 Character."],
    maxLength: [30, "Last name cannot exceed 30 Characters."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Provide a valid email"], //if true email is validated else the message
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must atleast contain 10 Digits."],
    maxLength: [11, "Phone number can only contain 11 Digits."],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema); //Reservation is the model name