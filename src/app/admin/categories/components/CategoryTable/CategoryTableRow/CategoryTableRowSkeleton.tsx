const CategoryTableRowSkeleton = () => {
  return (
    <tr className="animate-pulse hover:bg-gray-50">
      <td className="px-4 py-3">
        <div className="h-16 w-16 rounded-md bg-gray-200" />
      </td>
      <td className="px-4 py-3">
        <div className="h-4 w-24 rounded bg-gray-200" />
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 w-6 rounded bg-gray-200" />
          <div className="h-6 w-6 rounded bg-gray-200" />
        </div>
      </td>
    </tr>
  );
};

export default CategoryTableRowSkeleton;