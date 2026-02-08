import getLatestProducts from "@/actions/products/queries/getLatestProducts";
import ProductCard from "@/components/cards/ProductCard";

const NewArrivalProducts = async () => {
  const products = await getLatestProducts();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default NewArrivalProducts;
