import mongoose from "mongoose";
import { isFile } from "./file";

interface ValidResult {
  valid: true;
}

interface InvalidResult {
  valid: false;
  message: string;
}

type ValidationResult = ValidResult | InvalidResult;

export const validateId = (id: unknown, name = "Id"): ValidationResult => {
  if (!id) {
    return { valid: false, message: `${name} is required` };
  }

  if (typeof id !== "string") {
    return { valid: false, message: `${name} must be a string` };
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { valid: false, message: `${name} must be a valid Mongo ID` };
  }

  return { valid: true };
};

export const validateNonEmptyString = (
  value: unknown,
  name: string,
): ValidationResult => {
  if (!value) {
    return { valid: false, message: `${name} is required` };
  }

  if (typeof value !== "string") {
    return { valid: false, message: `${name} must be a string` };
  }

  if (!value.trim())
    return { valid: false, message: `${name} cannot be empty` };

  return { valid: true };
};

export const validatePositiveNumber = (
  value: unknown,
  name: string,
): ValidationResult => {
  if (!value) {
    return { valid: false, message: `${name} is required` };
  }

  if (typeof value !== "number") {
    return { valid: false, message: `${name} must be a number` };
  }

  if (isNaN(value) || value <= 0) {
    return { valid: false, message: `${name} must be greater than 0` };
  }

  return { valid: true };
};

// Only allows a File object (required for creation)
export const validateFile = (
  value: unknown,
  name = "Image",
): ValidationResult => {
  if (isFile(value)) {
    return { valid: true };
  }

  return { valid: false, message: `${name} must be a valid file` };
};

export const validateImageOrUrl = (
  value: unknown,
  name = "Image",
): ValidationResult => {
  if (typeof value === "string" || isFile(value)) {
    return { valid: true };
  }

  return {
    valid: false,
    message: `${name} must be a valid file or URL string`,
  };
};
