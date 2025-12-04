import mongoose from "mongoose";
import { User } from "./user.model";
const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Subscription name is required"],
    minLength: 5,
    maxLength: 50,
  },
  price: {
    type: Number,
    required: [true, "price for subscriptiion is required"],
    min: [0, "Price must be greater than 0"],
  },
  currency: {
    type: String,
    required: [true, "currency is must to specify"],
    enum: ["PKR", "USD", "AUD", "CAD"],

    default: "PKR",
  },
  frequency: {
    type: String,
    enum: ["daily", "weekly", "fortnightly", "monthly"],
  },
  category: {
    type: String,
    enum: ["sport", "entertainment", "news"],
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["jazzcash", "easypaisa", "habibMetro"],
    default: "habibMetro",
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "cancelled", "expired"],
    default: "active",
  },
  startDate: {
    type: Date,
    required: [true, "Date must be given"],
    validate: {
      validator: (value) => value <= new Date(),
      message: "startDate can be today OR any date in the past",
    },
  },
  renewalDate: {
    type: Date,
    validate: {
      validator: function (value) {
        return value > this.startDate;
      },
      message: "renewal date must not behind the start date",
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
    index: true,
  },
});
subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      fortnightly: 15,
      monthly: 30,
    };
    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriods[this.frequency]
    );
  }
  if (this.renewalDate < new Date()) {
    this.status = "expired";
  }
  next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;
