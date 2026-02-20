import { useState, useEffect } from 'react';
import './Committees.css';
import useTilt from '../../hooks/useTilt';

interface Member {
    name: string;
    role: string;
    emoji: string;
}

interface Club {
    name: string;
    emoji: string;
    description: string;
}

interface CommitteeData {
    id: string;
    icon: string;
    title: string;
    description: string;
    color: string;
    highlights: string[];
    clubs: Club[];
    team: Member[];
}

const committees: CommitteeData[] = [
    {
        id: 'technical',
        icon: '💻',
        title: 'Technical Committee',
        description:
            'The brain of SAC, driving innovation and technological excellence through specialized clubs and hackathons.',
        color: '#38bdf8',
        highlights: ['Horizon Tech Fest', 'Hackathons', 'Workshops', 'Tech Talks'],
        clubs: [
            { name: 'DCODR — Coding Club', emoji: '👨‍💻', description: 'Master the art of algorithms and software development.' },
            { name: 'VECTOR — Design Club', emoji: '🎨', description: 'Crafting stunning visual experiences and UI/UX magic.' },
            { name: 'DROID — Robotics Club', emoji: '🤖', description: 'Building the future with sensors, circuits, and code.' },
            { name: 'ARGO — Gaming Club', emoji: '🎮', description: 'Competitive gaming and game development community.' },
            { name: 'STOCKOPS — Finance Club', emoji: '📈', description: 'Navigating the worlds of trading and financial literacy.' },
        ],
        team: [
            { name: 'Alex Johnson', role: 'General Secretary — Technical', emoji: '💻' },
            { name: 'John Doe', role: 'President', emoji: '👔' },
            { name: 'Jane Smith', role: 'Vice President', emoji: '🎯' },
            { name: 'Emily Davis', role: 'Treasurer', emoji: '💰' },
        ],
    },
    {
        id: 'cultural',
        icon: '🎭',
        title: 'Cultural Committee',
        description:
            'The soul of SAC, celebrating creativity, arts, and diversity through vibrant festivals and clubs.',
        color: '#fbbf24',
        highlights: ['Cultural Fest', 'Art Exhibition', 'Music Night', 'Dance Events'],
        clubs: [
            { name: 'Music Club', emoji: '🎵', description: 'Finding harmony through instruments and voices.' },
            { name: 'Dance Club', emoji: '💃', description: 'Expressing rhythm and stories through movement.' },
            { name: 'Drama Club', emoji: '🎭', description: 'Bringing stories to life on the center stage.' },
            { name: 'Photography Club', emoji: '📸', description: 'Capturing moments that tell a thousand words.' },
            { name: 'Literature Club', emoji: '📚', description: 'The home of poets, writers, and book enthusiasts.' },
        ],
        team: [
            { name: 'Sarah Williams', role: 'General Secretary — Cultural', emoji: '🎭' },
            { name: 'John Doe', role: 'President', emoji: '👔' },
            { name: 'Jane Smith', role: 'Vice President', emoji: '🎯' },
            { name: 'Anna Taylor', role: 'PR & Media Head', emoji: '📢' },
        ],
    },
    {
        id: 'sports',
        icon: '⚽',
        title: 'Sports Committee',
        description:
            'The pulse of SAC, promoting fitness, teamwork, and competitive spirit through athletic excellence.',
        color: '#34d399',
        highlights: ['Olympus Sports Fest', 'Inter-College', 'Fitness Drives', 'Tournaments'],
        clubs: [], // Can be populated if needed
        team: [
            { name: 'Mike Brown', role: 'General Secretary — Sports', emoji: '⚽' },
            { name: 'John Doe', role: 'President', emoji: '👔' },
            { name: 'Jane Smith', role: 'Vice President', emoji: '🎯' },
            { name: 'Chris Wilson', role: 'Joint Secretary', emoji: '📋' },
        ],
    },
];

const CommitteeCard: React.FC<{ data: CommitteeData; index: number; onOpen: (data: CommitteeData) => void }> = ({ data, index, onOpen }) => {
    const tilt = useTilt(10);

    return (
        <div
            className={`committees__card reveal reveal-delay-${index + 1}`}
            style={{ '--card-accent': data.color } as React.CSSProperties}
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
        >
            <div className="tilt-glow committees__card-glow"></div>
            <div className="committees__card-icon">{data.icon}</div>
            <h3 className="committees__card-title">{data.title}</h3>
            <p className="committees__card-desc">{data.description}</p>
            <div className="committees__card-highlights">
                {data.highlights.map((h, hi) => (
                    <span
                        className="committees__tag"
                        key={h}
                        style={{ animationDelay: `${hi * 0.08}s` }}
                    >
                        {h}
                    </span>
                ))}
            </div>
            <button className="committees__card-btn" onClick={() => onOpen(data)}>
                Explore Committees →
            </button>
        </div>
    );
};

const CommitteeDetail: React.FC<{ data: CommitteeData; onClose: () => void }> = ({ data, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="committees__detail-overlay" onClick={onClose}>
            <div className="committees__detail-content" onClick={(e) => e.stopPropagation()}>
                <button className="committees__detail-close" onClick={onClose}>×</button>

                <div className="committees__detail-header">
                    <div className="committees__detail-icon">{data.icon}</div>
                    <div>
                        <h2 className="committees__detail-title" style={{ color: data.color }}>{data.title}</h2>
                        <p className="committees__detail-subtitle">{data.description}</p>
                    </div>
                </div>

                <div className="committees__detail-grid">
                    <div className="committees__detail-section">
                        <h3>Our Clubs</h3>
                        {data.clubs.length > 0 ? (
                            <div className="committees__detail-list">
                                {data.clubs.map(club => (
                                    <div key={club.name} className="committees__detail-item">
                                        <span className="committees__detail-item-emoji">{club.emoji}</span>
                                        <div>
                                            <h4>{club.name}</h4>
                                            <p>{club.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="committees__detail-empty">More clubs coming soon!</p>
                        )}
                    </div>

                    <div className="committees__detail-section">
                        <h3>The Team</h3>
                        <div className="committees__detail-list">
                            {data.team.map(member => (
                                <div key={member.name} className="committees__detail-item">
                                    <span className="committees__detail-item-emoji">{member.emoji}</span>
                                    <div>
                                        <h4>{member.name}</h4>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Committees: React.FC = () => {
    const [selectedCommittee, setSelectedCommittee] = useState<CommitteeData | null>(null);

    return (
        <section id="committees" className="committees">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our Committees</h2>
                    <p>
                        Three pillars driving student excellence across technical, cultural
                        and sports domains
                    </p>
                    <div className="section-divider"></div>
                </div>

                <div className="committees__grid">
                    {committees.map((c, i) => (
                        <CommitteeCard data={c} index={i} key={c.title} onOpen={setSelectedCommittee} />
                    ))}
                </div>
            </div>

            {selectedCommittee && (
                <CommitteeDetail data={selectedCommittee} onClose={() => setSelectedCommittee(null)} />
            )}
        </section>
    );
};

export default Committees;
