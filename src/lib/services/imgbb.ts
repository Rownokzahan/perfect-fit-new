export const uploadToImgBB = async (
  file: File,
  name: string,
): Promise<string> => {
  const buffer = Buffer.from(await file.arrayBuffer());
  const base64Image = buffer.toString("base64");

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY!}`,
    {
      method: "POST",
      body: new URLSearchParams({
        image: base64Image,
        name: name,
      }),
    },
  );

  const data = await response.json();

  if (!data.success) {
    console.error("ImgBB error:", data);
    throw new Error("Failed to upload image to ImgBB");
  }

  return data?.data?.url as string;
};
