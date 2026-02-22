interface WishlistContainerProps {
  children: React.ReactNode;
}

const WishlistContainer = ({ children }: WishlistContainerProps) => {
  return (
    <div className="ui-container mt-8 mb-12">
      <h3 className="mb-6 text-center text-2xl font-semibold">Wishlist</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6">
        {children}
      </div>
    </div>
  );
};

export default WishlistContainer;
