import clsx from "clsx";

export const floatingInputClass = clsx(
  "w-full px-4 py-3 rounded border-1 focus:border-dark outline-0 ring-0",
  "bg-transparent placeholder:text-transparent duration-300 peer"
);

export const floatingLabelClass = clsx(
  "absolute z-10 px-1 bg-inherit duration-300",

  // When the input is focused: move label up and shrink text
  "peer-focus:-top-[10px] peer-focus:left-[6px] peer-focus:text-sm peer-focus:text-dark",

  // When the input is empty (placeholder is shown): place label where placeholder should be
  "peer-placeholder-shown:top-[13px] peer-placeholder-shown:left-[13px]",
  "peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-light",

  // Default label position (when input has value): label stay up and shrink text
  "-top-[10px] left-[6px] text-sm text-dark"
);
