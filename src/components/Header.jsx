import "./Header.scss";

const Header = ({ activeSection, scrollToSection, openLoginModal }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Savory</h1>
        </div>

        <nav className="nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={activeSection === item.id ? "active" : ""}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="login-btn" onClick={openLoginModal}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
