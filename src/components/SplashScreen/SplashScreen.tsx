import { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'logo' | 'icons' | 'tagline' | 'exit'>('logo');

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase('icons'), 800),
            setTimeout(() => setPhase('tagline'), 2000),
            setTimeout(() => setPhase('exit'), 3400),
            setTimeout(() => onComplete(), 4200),
        ];
        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <div className={`splash ${phase === 'exit' ? 'splash--exit' : ''}`}>
            {/* Animated background grid */}
            <div className="splash__grid"></div>

            {/* Orbiting rings */}
            <div className="splash__rings">
                <div className="splash__ring splash__ring--1"></div>
                <div className="splash__ring splash__ring--2"></div>
                <div className="splash__ring splash__ring--3"></div>
            </div>

            {/* Central logo */}
            <div className={`splash__logo ${phase !== 'logo' ? 'splash__logo--shrink' : ''}`}>
                <div className="splash__logo-shape">
                    <span className="splash__logo-text">SAC</span>
                </div>
                <div className="splash__logo-pulse"></div>
            </div>

            {/* Three pillar icons that orbit out */}
            <div className={`splash__pillars ${phase === 'icons' || phase === 'tagline' || phase === 'exit' ? 'splash__pillars--visible' : ''}`}>
                <div className="splash__pillar splash__pillar--tech" title="Technical">
                    <div className="splash__pillar-icon">💻</div>
                    <div className="splash__pillar-label">Technical</div>
                </div>
                <div className="splash__pillar splash__pillar--cultural" title="Cultural">
                    <div className="splash__pillar-icon">🎭</div>
                    <div className="splash__pillar-label">Cultural</div>
                </div>
                <div className="splash__pillar splash__pillar--sports" title="Sports">
                    <div className="splash__pillar-icon">⚽</div>
                    <div className="splash__pillar-label">Sports</div>
                </div>
            </div>

            {/* Connecting lines from logo to pillars */}
            <svg className={`splash__lines ${phase === 'icons' || phase === 'tagline' || phase === 'exit' ? 'splash__lines--visible' : ''}`} viewBox="0 0 400 400">
                <line x1="200" y1="200" x2="200" y2="60" className="splash__line" />
                <line x1="200" y1="200" x2="80" y2="310" className="splash__line" />
                <line x1="200" y1="200" x2="320" y2="310" className="splash__line" />
            </svg>

            {/* Title & Tagline */}
            <div className={`splash__text ${phase === 'tagline' || phase === 'exit' ? 'splash__text--visible' : ''}`}>
                <h1 className="splash__title">Welfare Centre</h1>
                <p className="splash__tagline">IIITV — International Campus Diu</p>
                <div className="splash__divider"></div>
                <p className="splash__motto">Empowering Excellence</p>
            </div>

            {/* Floating particles */}
            <div className="splash__particles">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="splash__particle"
                        style={{
                            '--x': `${Math.random() * 100}%`,
                            '--y': `${Math.random() * 100}%`,
                            '--delay': `${Math.random() * 2}s`,
                            '--size': `${Math.random() * 4 + 2}px`,
                            '--duration': `${Math.random() * 3 + 2}s`,
                        } as React.CSSProperties}
                    />
                ))}
            </div>
        </div>
    );
};

export default SplashScreen;
