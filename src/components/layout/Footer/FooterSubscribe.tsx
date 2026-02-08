const FooterSubscribe = () => {
  return (
    <div className="space-y-3">
      <h3 className="font-medium text-light">Subscribe Us</h3>

      <form className="flex flex-wrap items-center text-sm">
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2 bg-transparent border border-light border-e-0 focus:outline-none"
        />
        <button
          type="submit"
          className="p-2 border border-light bg-light text-dark hover:border-primary hover:bg-primary hover:text-light font-semibold duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default FooterSubscribe;
