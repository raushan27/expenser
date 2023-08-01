import "./Header.css";

function Header() {
  return (
    <div>
      <div className="my-header">
        <img
          className="logo"
          src={require("../../images/logo.png")}
          alt="App Logo"
        />
        <img
          className="logo-name"
          src={require("../../images/logo-name.png")}
          alt="App Name"
        />
        <a href="https://github.com/raushan27/expenser">
          <img
            className="github"
            src={require("../../images/github.gif")}
            alt="git-logo"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
