import logo from "../../images/logoVector.svg";

function Header() {
  return (
      <header className="header">
        <div className="header__logo">
          <img className="header__logo-icon" src={logo} alt="Around the US" />
        </div>
      </header>
  );
}
export default Header;
