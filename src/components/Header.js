import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne activeTheme"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  )
}

export default Header