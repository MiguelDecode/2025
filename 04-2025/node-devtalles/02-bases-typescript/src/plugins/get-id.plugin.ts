import crypto from "node:crypto";

export const getId = () => crypto.randomUUID();
