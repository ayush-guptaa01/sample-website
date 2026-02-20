import { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'logo' | 'icons' | 'tagline' | 'exit'>('logo');

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase('icons'), 900),
            setTimeout(() => setPhase('tagline'), 2400),
            setTimeout(() => setPhase('exit'), 4200),
            setTimeout(() => onComplete(), 5100),
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

            {/* Five pillar icons arranged in a pentagon */}
            <div className={`splash__pillars ${phase === 'icons' || phase === 'tagline' || phase === 'exit' ? 'splash__pillars--visible' : ''}`}>
                {/* Top — Technical (90° = top) */}
                <div className="splash__pillar splash__pillar--tech" title="Technical">
                    <div className="splash__pillar-icon">💻</div>
                    <div className="splash__pillar-label">Technical</div>
                </div>
                {/* Top-right — Cultural (18° offset from top) */}
                <div className="splash__pillar splash__pillar--cultural" title="Cultural">
                    <div className="splash__pillar-icon">🎭</div>
                    <div className="splash__pillar-label">Cultural</div>
                </div>
                {/* Bottom-right — Sports */}
                <div className="splash__pillar splash__pillar--sports" title="Sports">
                    <div className="splash__pillar-icon">⚽</div>
                    <div className="splash__pillar-label">Sports</div>
                </div>
                {/* Bottom-left — Welfare */}
                <div className="splash__pillar splash__pillar--welfare" title="Welfare">
                    <div className="splash__pillar-icon">🤝</div>
                    <div className="splash__pillar-label">Welfare</div>
                </div>
                {/* Top-left — Academics */}
                <div className="splash__pillar splash__pillar--academics" title="Academics">
                    <div className="splash__pillar-icon">📚</div>
                    <div className="splash__pillar-label">Academics</div>
                </div>
            </div>

            {/* Connecting lines from logo to all 5 pillars */}
            {/* Pentagon points at r=170, centre=200 — angles: -90, -18, 54, 126, 198 deg */}
            <svg className={`splash__lines ${phase === 'icons' || phase === 'tagline' || phase === 'exit' ? 'splash__lines--visible' : ''}`} viewBox="0 0 400 400">
                {/* Technical — top */}
                <line x1="200" y1="200" x2="200" y2="30" className="splash__line" />
                {/* Cultural — upper-right */}
                <line x1="200" y1="200" x2="362" y2="112" className="splash__line" />
                {/* Sports — lower-right */}
                <line x1="200" y1="200" x2="300" y2="352" className="splash__line" />
                {/* Welfare — lower-left */}
                <line x1="200" y1="200" x2="100" y2="352" className="splash__line" />
                {/* Academics — upper-left */}
                <line x1="200" y1="200" x2="38" y2="112" className="splash__line" />
            </svg>

            {/* Title & Tagline */}
            <div className={`splash__text ${phase === 'tagline' || phase === 'exit' ? 'splash__text--visible' : ''}`}>
                <h1 className="splash__title">Activity Centre</h1>
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
