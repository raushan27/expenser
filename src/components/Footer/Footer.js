import "./Footer.css";

function Header() {
  return (
    <div>
      <div className="my-footer">
        <div className="developer-name">
          <p style={{ fontSize: "smaller" }}>
            Made By <strong>Raushan Vadshah</strong>
          </p>
          <img
            src={require("../../images/itachi.gif")}
            alt="itachi-gif"
            style={{ height: "20px", margin: "5px" }}
          />
        </div>
        <div>
          <a href="https://linkedin.com/in/raushan-vadshah">
            <img
              style={{ height: "22px", margin: "10px" }}
              src={require("../../images/linkedin.png")}
              alt="linkedin-logo"
            ></img>
          </a>

          <img
            style={{ height: "23px", margin: "10px" }}
            className=""
            src={require("../../images/logo-name.png")}
            alt="App Name"
          />
          <a href="https://github.com/raushan27/expenser">
            <img
              style={{ height: "22px", margin: "10px" }}
              src={require("../../images/github.gif")}
              alt="git-logo"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
