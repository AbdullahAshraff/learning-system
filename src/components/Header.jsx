const Header = () => {
  const navItems = ['Home', 'About', 'Contact'];

  return (
    <>
      <ul>
        {navItems.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Header;
