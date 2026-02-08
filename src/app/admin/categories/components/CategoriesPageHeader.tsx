import Button from "@/components/ui/Button";

const CategoriesPageHeader = () => {
  return (
    <div className="mb-6 flex items-start justify-between gap-3">
      <h3 className="text-2xl sm:text-3xl font-semibold">Categories</h3>

      <Button href={"/admin/categories/add"} className="text-nowrap">
        Add Category
      </Button>
    </div>
  );
};

export default CategoriesPageHeader;
