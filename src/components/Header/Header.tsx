import { HeaderLogoType, HeaderProps } from "./Header.interfaces";

import "./Header.css";

const Header = ({
  background,
  children,
  childrenMiddle,
  linkComponent = "a",
  logo,
}: HeaderProps) => {
  const Link = linkComponent;

  const { href = "/", imageSrc } = logo ?? ({} as HeaderLogoType);

  return (
    <header className="c-header" data-testid="qa-header" style={{ background }}>
      <div className="c-header__container">
        <div className="c-header__start">
          <Link
            className="c-header__link c-header__icon-link"
            href={href}
            title="Home"
          >
            {imageSrc && (
              <img alt="Site logo" className="c-header__image" src={imageSrc} />
            )}
          </Link>
        </div>
        {childrenMiddle ? (
          <div data-testid="qa-children-middle" className="c-header__middle">
            {childrenMiddle}
          </div>
        ) : null}
        <div className="c-header__end">{children}</div>
      </div>
    </header>
  );
};

export { Header };
