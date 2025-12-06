import { createRequire } from "module";
import dayjs from "dayjs";
const require = createRequire(import.meta.url);
const remindes = [7, 5, 3, 1];
import { server } from "@upstash/workflow/express";
import Subscription from "../models/subscription.model.js";

export const sendReminders = server(async (context) => {
  const { subscriptionId } = context.requestPayload;

  const subscription = await fetchSubscription(context, subscriptionId);

  if (!subscription || subscription.status != "active") {
    return;
  }

  const renewalDate = dayjs(subscription.renewalDate);

  if (renewalDate.isBefore(dayjs())) {
    console.log("Renewal date has passed");
    return;
  }

  for (const daysbefore of remindes) {
    const reminderDate = renewalDate.subtract(daysbefore, "day");

    if (reminderDate.isAfter(dayjs())) {
   
      await sleepUntilReminder(context, `${daysbefore}-days-before`, reminderDate);
    }

    await triggerReminder(context, `Reminder ${daysbefore}-days-before`);
  }
});

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("get subscription", () => {
    return Subscription.findById(subscriptionId).populate("user", "email name");
  });
};

const sleepUntilReminder = async (context, label, date) => {
  console.log(`sleep until ${label} reminder at ${date}`);
  await context.sleepUntil(label, date.toDate());
};

const triggerReminder = async (context, label) => {
  return await context.run(label, () => {
    console.log(`triggering ${label} reminder`);
    // send email, sms, etc
  });
};

