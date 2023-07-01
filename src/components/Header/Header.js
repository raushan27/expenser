import "./Header.css";

function Header() {
  return (
    <div>
      <div className="my-header">
        <img
          style={{ height: "65px", margin: "10px" }}
          className=""
          src={require("../../images/logo.png")}
          alt="App Logo"
        />
        <img
          style={{ height: "65px", margin: "10px" }}
          className=""
          src={require("../../images/logo-name.png")}
          alt="App Name"
        />
        <a href="https://github.com/raushan27/expenser">
          <img
            style={{ height: "55px", margin: "10px" }}
            src={require("../../images/github.gif")}
            alt="git-logo"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
