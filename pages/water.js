import { useEffect, useState } from "react";
import Head from "next/head";


export default function ScrollFrames() {

  const [scrollHeight, setScrollHeight] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const totalFrames = 48;
  const speedFactor = 1;
  const fadeDistance = 100;

  useEffect(() => {
    const handleResize = () => setScrollHeight(window.innerHeight * 2); // diminui para 2x
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = scrollHeight - window.innerHeight;
      let scrollFraction = Math.min(scrollTop / maxScroll, 1);

      scrollFraction *= speedFactor;

      const index = Math.min(
        totalFrames - 1,
        Math.floor(scrollFraction * totalFrames)
      );
      setFrameIndex(index);

      if (scrollTop > maxScroll - fadeDistance) {
        const fadeOutProgress = (scrollTop - (maxScroll - fadeDistance)) / fadeDistance;
        setOpacity(1 - fadeOutProgress);
      } else {
        setOpacity(1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollHeight]);

  const getImageSrc = (index) =>
    `/water/${String(index + 1).padStart(3, "0")}.png`;

  return (
    <>
          <script>
        {`function ismobile() {
          return /Android|iPhone|iPad/i.test(navigator.userAgent);}
          console.log("Is mobile: " + ismobile());
          if (ismobile()) {
            window.location.replace("http://m.tritrisim.com");
          }`}
      </script>
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

html {
  scroll-behavior: smooth;
}

}`}
      </style>
      <div style={{ height: scrollHeight + "px" }}></div>
        <img
        src={getImageSrc(frameIndex)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          pointerEvents: "none",
          opacity: opacity,
          transition: "opacity 0.3s ease-out",
          zIndex: 10,
        }}
        alt="scroll animation frame"
        draggable={false}
      />

              <Head>
        <title>TriTriSim TFX – Emergency Effects for MSFS</title>
        <meta
            name="description"
            content="Download fire, crash, and spark effects for Microsoft Flight Simulator. Free for MSFS2020 & 2024. Join our Discord!"
          />

        <link rel="icon" type="image/x-icon" href="/tfx.png" />

        {/* Open Graph tags for Discord embeds */}
        <meta
          property="og:title"
          content="TriTriSim TFX – Emergency Effects for MSFS"
        />
        <meta
          property="og:description"
          content="Bring your simulator to life with fire, sparks and crash animations. Free for MSFS 2020 and 2024!"
        />
        <meta
          property="og:image"
          content="https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png"
        />
        <meta property="og:url" content="https://tritrisim.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/x-icon" href="/tfx.png" />

        {/* Optional for Twitter card too */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TriTriSim TFX – Emergency Effects for MSFS"
        />
        <meta
          name="twitter:description"
          content="Bring your simulator to life with fire, sparks and crash animations. Free for MSFS 2020 and 2024!"
        />
        <meta
          name="twitter:image"
          content="https://installer.cdn.tritrisim.com/Images/FenixA319Fire.png"
        />
      </Head>

      <div
        style={{
          position: "sticky",
          top: 0,
          background: "#fff",
          padding: "2rem",
          zIndex: 1,
          marginTop: "-100vh", // “puxa” o conteúdo pra cima, grudando na animação
        }}
      >
        <h1>Conteúdo normal da página</h1>
        <p>Esse conteúdo já aparece logo depois da animação, sem aquele espaço gigante.</p>
        <p>Pode colocar o que quiser aqui.</p>
      </div>
    </>
  );
}
