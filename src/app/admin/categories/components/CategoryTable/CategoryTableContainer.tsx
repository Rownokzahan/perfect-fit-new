interface CategoryTableContainerProps {
  children: React.ReactNode;
}

const CategoryTableContainer = ({ children }: CategoryTableContainerProps) => {
  return (
    <div className="max-h-full overflow-x-auto rounded border">
      <table className="min-w-full h-full bg-light-light text-sm relative z-0">
        <thead className="rounded-t shadow-[0px_1px_0px_0px_rgba(209,213,220,1)] bg-gray-100 sticky z-10 top-0 text-left text-xs font-semibold uppercase tracking-wider text-dark/65">
          <tr>
            <th className="px-4 py-3">Image</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y">{children}</tbody>
      </table>
    </div>
  );
};

export default CategoryTableContainer;
