export const isFile = (file: unknown): file is File => {
  return file instanceof File;
};
