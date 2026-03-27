import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main>
        <Outlet /> 
      </main>
      <footer className="footer">
        © 2026 SPA app
      </footer>
    </div>
  );
};

export default Layout;