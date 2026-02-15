import './Footer.css';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Committees', href: '#committees' },
    { label: 'Clubs', href: '#clubs' },
    { label: 'Events', href: '#events' },
    { label: 'Team', href: '#team' },
];

const resources = [
    { label: 'Student Activity Centre Constitution', href: '#' },
    { label: 'Academic Calendar', href: '#' },
    { label: 'Moodle', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Placements', href: '#' },
];

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer__glow"></div>
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <div className="footer__logo-icon">SAC</div>
                            <span className="footer__logo-text">Student Activity Centre</span>
                        </div>
                        <p className="footer__brand-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="footer__socials">
                            {['Instagram', 'Twitter', 'LinkedIn', 'YouTube'].map((s) => (
                                <a href="#" className="footer__social-btn" key={s} aria-label={s}>
                                    {s.charAt(0)}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Quick Links</h4>
                        <ul className="footer__links-list">
                            {quickLinks.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} className="footer__link">{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Resources</h4>
                        <ul className="footer__links-list">
                            {resources.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} className="footer__link">{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__links-group">
                        <h4 className="footer__links-title">Contact Us</h4>
                        <div className="footer__contact-info">
                            <p>📍 IIIT Vadodara — ICD, Diu</p>
                            <p>📧 studentactivitycentre@iiitvadodara.ac.in</p>
                            <p>📞 +91-XXXXX XXXXX</p>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {new Date().getFullYear()} Student Activity Centre, IIITV-ICD. All rights reserved.</p>
                    <p className="footer__credits">
                        Designed &amp; Developed with 💜
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
