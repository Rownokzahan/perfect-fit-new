import { getProducts } from "@/actions/products/queries/getProducts";
import ProductsPageHeader from "./components/ProductsPageHeader";
import ProductTableContainer from "./components/ProductTable/ProductTableContainer";
import AdminProductTableRow from "./components/ProductTable/ProductTableRow";

export const metadata = {
  title: "Manage Product - Admin",
};

const AdminProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <ProductsPageHeader />

      <div className="h-[calc(100%-194px)] sm:h-[calc(100%-140px)] overflow-y-auto">
        <ProductTableContainer>
          {products.map((product) => (
            <AdminProductTableRow
              key={product._id}
              product={product}
            />
          ))}
        </ProductTableContainer>
      </div>
    </>
  );
};

export default AdminProductsPage;
