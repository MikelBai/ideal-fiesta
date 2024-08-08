import { type Config } from "drizzle-kit";

import { env } from "ideal-fiesta-import/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["ideal-fiesta_*"],
} satisfies Config;
