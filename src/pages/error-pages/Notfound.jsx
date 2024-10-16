const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404 Not Found</h1>
        <p className="mt-4 text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="mt-2">Please check the URL and try again.</p>
      </div>
    </div>
  );
};

export default NotFound;
