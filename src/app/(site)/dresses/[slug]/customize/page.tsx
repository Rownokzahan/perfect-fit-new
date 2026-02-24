import DressDetails from "./DressDetails";
import DressCustomization from "./DressCustomization";
import NoDressFound from "./NoDressFound";
import { getProductBySlug } from "@/actions/products/queries/getProductBySlug";
import { getWishlistedProductIds } from "@/actions/wishlist/queries/getWishlistedProductIds";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  // If product not found, fallback title
  if (!product) {
    return {
      title: "Product not found – Customize",
    };
  }

  return {
    title: `Customize – ${product.name}`,
  };
}

const DressCustomizePage = async ({ params }: Params) => {
  const slug = (await params).slug;
  const [product, wishlistIds] = await Promise.all([
    getProductBySlug(slug),
    getWishlistedProductIds(),
  ]);

  if (!product) {
    return <NoDressFound />;
  }

  return (
    <div className="ui-container mt-6 lg:mt-12 mb-12 grid lg:grid-cols-[40%_1fr] gap-8 lg:gap-16">
      <DressDetails
        dress={product}
        isWishlisted={wishlistIds.includes(product._id)}
      />
      <DressCustomization dress={product} />
    </div>
  );
};

export default DressCustomizePage;
