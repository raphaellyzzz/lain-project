import { Link } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="wired-container">
      <div className="scanlines"></div>
      <div className="crt-overlay"></div>

      <nav style={{ padding: '1rem', borderBottom: '1px solid var(--verde-terminal-hacker)' }}>
        <h2 style={{ color: 'var(--verde-terminal-hacker)', margin: 0 }}>WIRED PROTOCOL v.1</h2>
        <div style={{ marginTop: '10px' }}>
            <Link to="/" style={{ marginRight: '15px', color: 'var(--cinza-claro)' }}>/HOME</Link>
            <Link to="/sobre" style={{ color: 'var(--cinza-claro)' }}>/SOBRE</Link>
        </div>
      </nav>

      <main className="content-wrapper">
        {children}
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '1.2rem', opacity: 0.5 }}>
        Running on Navi 2.0
      </footer>
    </div>
  );
};

export default MainLayout;