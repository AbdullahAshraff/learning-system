const Section = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div className="sm:border-l-2 sm:ml-3 sm:border-gray-400 ">
        <div className="ml-2 sm:ml-4 mt-4 sm:mt-10">{children}</div>
      </div>
    </section>
  );
};

export default Section;
