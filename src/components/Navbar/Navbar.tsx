import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/', isAnchor: true, targetId: 'home' },
  { label: 'About', href: '/#about', isAnchor: true, targetId: 'about' },
  {
    label: 'Committees',
    href: '/committees',
    external: true,
    dropdown: [
      { label: 'Technical Committee', href: '#/committees/technical' },
      { label: 'Cultural Committee', href: '#/committees/cultural' },
      { label: 'Sports Committee', href: '#/committees/sports' },
      { label: 'Welfare Committee', href: '#/committees/welfare' },
      { label: 'Academic Committee', href: '#/committees/academic' },
    ]
  },
  { label: 'Contact', href: '/#contact', isAnchor: true, targetId: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname === '/' || location.pathname === '/sample-website') {
        const sections = ['home', 'about', 'contact'];
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleLinkClick = (link: any) => {
    setIsOpen(false);
    setDropdownOpen(false);

    if (link.isAnchor && (location.pathname === '/' || location.pathname === '/sample-website')) {
      const el = document.getElementById(link.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" onClick={() => setIsOpen(false)}>
          <div className="navbar__logo-icon">SAC</div>
          <span className="navbar__logo-text">Student Activity Centre</span>
        </Link>

        {/* Desktop links */}
        <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => {
            const hasDropdown = !!link.dropdown;

            return (
              <li
                key={link.label}
                className={`navbar__item ${hasDropdown ? 'navbar__item--has-dropdown' : ''}`}
                onMouseEnter={() => hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => hasDropdown && setDropdownOpen(false)}
              >
                {hasDropdown ? (
                  <div className="navbar__dropdown-wrapper">
                    <Link
                      to={link.href}
                      className="navbar__link navbar__link--dropdown-trigger"
                      onClick={(e) => {
                        if (window.innerWidth <= 1024) {
                          e.preventDefault();
                          setDropdownOpen(!dropdownOpen);
                        } else {
                          handleLinkClick(link);
                        }
                      }}
                    >
                      {link.label} <span className="dropdown-arrow">▼</span>
                    </Link>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          className={`navbar__dropdown ${dropdownOpen ? 'navbar__dropdown--open' : ''}`}
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 5, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {link.dropdown?.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="navbar__dropdown-link"
                                onClick={() => {
                                  setIsOpen(false);
                                  setDropdownOpen(false);
                                }}
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`navbar__link ${activeSection === link.targetId ? 'navbar__link--active' : ''}`}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <button
          className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
