import CategoryTableContainer from "./CategoryTableContainer";
import CategoryTableRowSkeleton from "./CategoryTableRow/CategoryTableRowSkeleton";

const CategoryTableSkeleton = () => {
  return (
    <CategoryTableContainer>
      {[...Array(4)].map((_, idx) => (
        <CategoryTableRowSkeleton key={idx} />
      ))}
    </CategoryTableContainer>
  );
};

export default CategoryTableSkeleton;
