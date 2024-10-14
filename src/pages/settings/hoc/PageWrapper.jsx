const PageWrapper = ({ children }) => {
  return (
    <div className="sm:px-8 md:px-16 px-6 sm:py-8 md:py-16 py-10 max-w-[840px] mx-auto relative w-full h-full bg-yellow-50 min-h-full text-start">
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default PageWrapper;
