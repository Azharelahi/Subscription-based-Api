import { aj } from "../config/arcjet.js";

export const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 2 });

    if (decision.conclusion === "DENY") {
      switch (decision.reason.type) {
        case "RATE_LIMIT":
          return res
            .status(429)
            .json({ success: false, message: "Too many requests - Rate limit exceeded" });

        case "BOT":
          return res
            .status(403)
            .json({ success: false, message: "Bot detected" });

        default:
          return res
            .status(403)
            .json({ success: false, message: "Access denied" });
      }
    }

    next();
  } catch (err) {
    console.error("Error in Arcjet middleware:", err);
    next(err);
  }
};
