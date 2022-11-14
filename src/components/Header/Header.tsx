import "./Header.css";

const Header = () => {
  return (
    <nav className="c-header">
      <div className="c-header__logo" />

      <div className="c-header__hamburger">
        <img src="images/hamburger.svg" alt="hamburger menu" />
      </div>
    </nav>
  );
};

export { Header };
