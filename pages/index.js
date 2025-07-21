import Head from 'next/head';

export default function Home() {
  return (
    <>
      <style>
        {`body {
  overflow-x: hidden;
  font-family: Sans-Serif;
  margin: 0;
  {* background-image: url('https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png');
}*/}

  

.menu-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  background: #000000;
  color: #cdcdcd;
  padding:20px;
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
  
  body {
    margin: 0;
    padding: 0;
  }

/* body {
  margin: 0;
  padding: 0;
  background-image: url('https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;
  z-index: 0;
}

 body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
} */


}`}
      </style>

      <Head>
        <title>TriTriSim Website</title>
        <link rel="icon" type="image/x-icon" href="public/tfx.ico" />

        {/* Open Graph tags for Discord embeds */}
        <meta property="og:title" content="TriTriSim TFX – Emergency Effects for MSFS" />
        <meta property="og:description" content="Bring your simulator to life with fire, sparks and crash animations. Free for MSFS 2020 and 2024!" />
        <meta property="og:image" content="https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png" />
        <meta property="og:url" content="https://tritrisim.com" />
        <meta property="og:type" content="website" />

        {/* Optional for Twitter card too */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TriTriSim TFX – Emergency Effects for MSFS" />
        <meta name="twitter:description" content="Bring your simulator to life with fire, sparks and crash animations. Free for MSFS 2020 and 2024!" />
        <meta name="twitter:image" content="https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png" />
      </Head>

      <nav className="menu-container">
        <input type="checkbox" aria-label="Toggle menu" />
        <span></span>
        <span></span>
        <span></span>
        <a href="https://tritrisim.com" className="menu-logo">
          <img
            src="https://storage.ko-fi.com/cdn/useruploads/3c143159-e5b1-4937-be4d-a50a85fc00f3_66d56e99-00a0-45a5-851e-fd25252abcab.png"
            alt="Logo"
          />
        </a>
        <div className="menu">
          <ul>
            <li>
              <a href="https://tritrisim.com">Home</a>
            </li>
            <li>
              <a
                href="https://github.com/TriTriTheCuber/TFX/raw/refs/heads/main/TriTriSim%20Installer.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
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

      <section
        style={{
          backgroundImage:
            "url('https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        <a
          href="https://github.com/TriTriTheCuber/TFX/raw/refs/heads/main/TriTriSim%20Installer.exe"
          style={{
            fontSize: "2rem",
            padding: "15px 30px",
            borderRadius: "12px",
            maxWidth: "300px",
            width: "80%",
            textAlign: "center",
            backgroundColor: "transparent",
            border: "2px solid white",
            color: "white",
            textDecoration: "none",
            cursor: "pointer",
            zIndex: 1,
            position: "relative",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </section>

      <div
        style={{
          padding: "5rem", // trocado de margin pra padding
          fontFamily:
            "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        }}
      >
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            padding: "2rem",
          }}
        >
          <div className="texts" style={{ fontSize: "100%" }}>
            <h2
              style={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontWeight: "800",
                marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                color: "rgb(17 24 39)",
              }}
            >
              What is TriTriSim TFX?
            </h2>
            <p
              style={{
                fontFamily:
                  "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "rgb(107 114 128)",
              }}
            >
              TFX Is an addon for <b>Microsoft Flight Simulator</b>, focusing
              mainly on emergency effects that aren’t visible in the normal
              game. This includes fires, sparks, and even crash animations. TFX
              supports both <b>MSFS 2020 and 2024</b>, and includes support for
              a wide range of aircraft.
            </p>
          </div>

          <div className="image" style={{ marginLeft: "2rem" }}>
            <img
              src="https://installer.cdn.tritrisim.com/Images/777-3fire.png"
              width="600rem"
              style={{
                borderRadius: "10px",
              }}
            ></img>
          </div>
        </div>
        <br />
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            padding: "2rem",
          }}
        >
          <div className="image" style={{ marginRight: "2rem" }}>
            <img
              src="https://installer.cdn.tritrisim.com/Images/b777ffire.png"
              width="600rem"
              style={{
                borderRadius: "10px",
              }}
            ></img>
          </div>

          <div className="texts" style={{ fontSize: "100%" }}>
            <h2
              style={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontWeight: "800",
                marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                color: "rgb(17 24 39)",
              }}
            >
              What is included in TFX?
            </h2>
            <p
              style={{
                fontFamily:
                  "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "rgb(107 114 128)",
              }}
            >
              TFX includes a wide range of effects, including{" "}
              <b>fires, sparks, and crash animations</b>. It also includes
              support for <b>both native and custom aircrafts</b> that are
              compatible with the <b>MSFS2020</b> and <b>MSFS2024</b>. TFX is
              constantly being updated with new effects and aircrafts.
            </p>
          </div>
        </div>
        <br />
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            padding: "2rem",
          }}
        >
          <div className="texts" style={{ fontSize: "100%" }}>
            <h2
              style={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontWeight: "800",
                marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                color: "rgb(17 24 39)",
              }}
            >
              What is the price of TFX?
            </h2>
            <p
              style={{
                fontFamily:
                  "Open Sans, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Arial, Noto Sans, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                color: "rgb(107 114 128)",
              }}
            >
              TFX is <b>completely free</b> — yep, you read that right! No
              subscriptions, no paywalls, and no hidden fees. We believe in
              making <b>high-quality, immersive content accessible to everyone in
              the flight sim community.</b> That said, if you enjoy the addon and
              wanna support the project, <b>donations are always welcome through
              our Ko-fi page.</b> Every bit helps us keep the fire effects
              (literally) coming!
            </p>
          </div>

          <div className="image" style={{ marginLeft: "2rem" }}>
            <img
              src="https://installer.cdn.tritrisim.com/Images/737fire.png"
              width="600rem"
              style={{
                borderRadius: "10px",
              }}
            ></img>
          </div>
        </div>
      </div>

      <footer
        style={{
          backgroundColor: "#000000",
          color: "#cdcdcd",
          textAlign: "center",
          padding: "1rem",
          fontSize: "0.9rem",
          marginTop: "2rem",
        }}
      >
      © TriTriSim 2025. All rights reserved.
      </footer>

    </>
  );
}
