import './Header.css';

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Si-NemAH
    </span>
  );
};

export default Header;
