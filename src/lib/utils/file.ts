export function isImageFile(file: unknown): boolean {
  return file instanceof Blob;
}
