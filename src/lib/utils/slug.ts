import mongoose from "mongoose";
import slugify from "slugify";

interface GenerateSlugOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Model: mongoose.Model<any>;
  name: string;
  excludeId?: string;
}

export const generateUniqueSlug = async ({
  Model,
  name,
  excludeId,
}: GenerateSlugOptions) => {
  const baseSlug = slugify(name, { lower: true, strict: true });
  let slug = baseSlug;
  let counter = 1;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filter: any = { slug };
  if (excludeId) {
    filter._id = { $ne: excludeId };
  }

  while (await Model.exists(filter)) {
    slug = `${baseSlug}-${counter++}`;
    filter.slug = slug;
  }

  return slug;
};
