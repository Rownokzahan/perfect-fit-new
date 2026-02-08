const UnauthorizedPage = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="ui-container text-center">
        <div className="mb-3 text-5xl font-bold text-primary">403</div>

        <h1 className="text-xl font-semibold">Access Denied</h1>
        <p className="mt-2 text-dark-light text-sm">You do not have permission to view this page.</p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
