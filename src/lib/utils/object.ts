import { Types } from "mongoose";

type ObjectIdToString<T> = T extends Types.ObjectId
  ? string
  : T extends object
    ? { [K in keyof T]: ObjectIdToString<T[K]> }
    : T;

export function toPlainObject<T>(data: T): ObjectIdToString<T> {
  return JSON.parse(JSON.stringify(data));
}
