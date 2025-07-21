import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="index-style.css" />
      </Head>
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