import mongoose from "mongoose";
const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Subscription name is required"],
    minLength: 5,
    maxLength: 50,
  },
  price: { type: Number, required: [true, "price for subscriptiion is required"] },
});
