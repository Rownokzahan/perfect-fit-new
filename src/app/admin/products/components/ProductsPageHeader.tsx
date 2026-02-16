import Button from "@/components/ui/Button";

const ProductsPageHeader = () => {
  return (
    <div className="mb-8 flex items-start justify-between">
      <h3 className="text-3xl font-semibold">Products</h3>

      <Button href={"/admin/products/add"}>Add Product</Button>
    </div>
  );
};

export default ProductsPageHeader;
