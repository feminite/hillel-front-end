import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="header">
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/about">Про мене</Link>
        <Link to="/contacts">Контакти</Link>
      </nav>
      <button className="btn-theme" onClick={toggleTheme}>
        {isDark ? '☀️ Світла' : '🌙 Темна'}
      </button>
    </header>
  );
};

export default Header;