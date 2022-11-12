import "./Footer.css";

const Footer = () => {
  return (
    <footer className="c-footer">
      <div className="c-footer__left">
        <p className="c-footer__links">
          <a href="/">Home</a>
          <a href="/">Blog</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </p>
      </div>

      <div className="c-footer__right">
        <span>RTL &copy; 2022</span>
      </div>
    </footer>
  );
};

export { Footer };
