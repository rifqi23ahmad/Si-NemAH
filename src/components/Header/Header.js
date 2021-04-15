import "./Header.css";

const Header = () => {
  return (
    <>
      <span
        onClick={() => window.scroll(0, 0)}
        style={{ paddingTop: "70px", fontSize:"25px", backgroundColor:"white", color:'black' }}
        className="header"
      >
        Find Your Favorite Movie Here!
      </span>
      <div onClick={() => window.scroll(0, 0)} style={{backgroundColor:"black"}} className="header">
        Si-NemAH
      </div>
    </>
  );
};

export default Header;
