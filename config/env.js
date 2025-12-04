import { config } from "dotenv";

// Load environment-specific file
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

// Safely export PORT with fallback
export const PORT = process.env.PORT || 3000;
