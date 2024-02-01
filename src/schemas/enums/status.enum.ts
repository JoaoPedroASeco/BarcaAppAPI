import { z } from "zod";

export const STATUS = z.enum(["PENDING", "APPROVED", "REPROVED"]);
