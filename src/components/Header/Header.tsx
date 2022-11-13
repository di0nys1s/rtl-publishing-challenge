import "./Header.css";

const Header = () => {
  return (
    <nav className="c-header">
      <div className="c-header__logo">RTL</div>

      <div className="c-header__links">
        <img
          className="c-header__profile-image"
          src="images/user.png"
          alt="profile"
        />
      </div>

      <div className="c-header__hamburger">
        <img src="images/hamburger.svg" alt="hamburger menu" />
      </div>
    </nav>
  );
};

export { Header };
