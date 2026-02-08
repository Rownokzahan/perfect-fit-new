import Button from "@/components/ui/Button";

const NotFoundPage = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="ui-container text-center">
        <h2 className="mb-3 text-5xl font-bold text-primary">404</h2>
        <h3 className="text-xl font-semibold">Page Not Found</h3>
        <p className="mt-2 mb-4 text-dark-light text-sm">
          Sorry, the page you are looking for does not exist.
        </p>

        <Button href="/" className="max-w-60 mx-auto">Go Back Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;