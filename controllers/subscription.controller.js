import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({ success: true, data: subscription });
  } catch (err) {

    next(err);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
try {
  
if (req.user._id.toString()!== req.params.id){
  const error  = new Error("Unauthorized");
  error.statusCode = 401;
  throw error
}
const subscription = await Subscription.find({user:req.params.id})
console.log("Fetched subscriptions:", subscription);
res.status(200).json({success:true,subscription:subscription})
}catch(kharabi){
next(kharabi)
}



}

