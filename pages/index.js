
export default function Home() {
  return (
    <>
      <style>
        {`body {
  overflow-x: hidden;
  font-family: Sans-Serif;
  margin: 0;
}

.menu-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #000000;
  color: #cdcdcd;
  padding: 20px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  box-sizing: border-box;
}

.menu-logo {
  line-height: 0;
  margin: 0 20px;
}

.menu-logo img {
  max-height: 40px;
  max-width: 100px;
  flex-shrink: 0;
}

.menu-container a {
  text-decoration: none;
  color: #000000;
  transition: color 0.3s ease;
}

.menu-container a:hover {
  color: #00C6A7;
}

.menu-container input {
  display: block;
  width: 35px;
  height: 25px;
  margin: 0;
  position: absolute;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
}

/* Burger menu */
.menu-container span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

.menu-container span:first-child {
  transform-origin: 0% 0%;
}

.menu-container span:nth-child(3) {
  transform-origin: 0% 100%;
}

.menu-container input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(3px,-1px);
  background: #000000;
}

.menu-container input:checked ~ span:nth-child(4) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

.menu-container input:checked ~ span:nth-child(3) {
  transform: rotate(-45deg) translate(-5px,11px);
}

.menu ul {
  list-style: none;
}

.menu li {
  padding: 10px 0;
  font-size: 22px;
}

/* mobile styles */
@media only screen and (max-width: 767px) { 
  .menu-container {
    flex-direction: column;
    align-items: flex-end;
  }
  
  .menu-logo {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .menu-logo img {
    max-height: 30px;
  }

  .menu {
    position: absolute;
    box-sizing: border-box;
    width: 300px;
    right: -300px;
    top: 0;
    margin: -20px;
    padding: 75px 50px 50px;
    background: #cdcdcd;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translateX(0%);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

  .menu-container input:checked ~ .menu {
    transform: translateX(-100%);
  }
}

/* desktop styles */
@media only screen and (min-width: 768px) { 
  .menu-container {
    width: 100%;
  }

  .menu-container a {
    color: #cdcdcd;
  }

  .menu-container input {
    display: none;
  }

  /* Burger menu */
  .menu-container span {
    display: none;
  }

  .menu {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .menu ul {
    display: flex;
    padding: 0;
  }

  .menu li {
    padding: 0 20px;
  }
}`}
      </style>
      <meta name="google-site-verification" content="Vv1QCyqEuLW2jB0y5Ry2H8Ub-NDJGm4DU4mUw-rU890" />
      <nav className="menu-container">
        <input type="checkbox" aria-label="Toggle menu" />
        <span></span>
        <span></span>
        <span></span>
        <a href="https://tritrisim.com" className="menu-logo">
          <img src="https://storage.ko-fi.com/cdn/useruploads/3c143159-e5b1-4937-be4d-a50a85fc00f3_66d56e99-00a0-45a5-851e-fd25252abcab.png" alt="Logo"/>
        </a>
        <div className="menu">
          <ul>
            <li>
              <a href="https://tritrisim.com">Home</a>
            </li>
            <li>
              <a href="https://github.com/TriTriTheCuber/TFX/raw/refs/heads/main/TriTriSim%20Installer.exe" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://ko-fi.com/tritrithecuber">Donate</a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
        <h1>🚀 TriTriSim Installer</h1>
        <p>Hello World! Funciona demais 😎</p>
      </div>
    </>
  );
}