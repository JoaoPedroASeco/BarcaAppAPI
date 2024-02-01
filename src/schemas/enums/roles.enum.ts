import { z } from "zod";

export const ROLES = z.enum(["USER", "ADMIN", "PARTNER"]);
