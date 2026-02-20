import './Team.css';
import { organizationData } from '../../data/organizationData';

const Team: React.FC = () => {
    // Collect all committee secretaries
    const committeeSecs = organizationData.map(c => ({
        name: c.secretary.name,
        role: `${c.name} Secretary`,
        emoji: c.icon
    }));

    // Collect all club secretaries and joint secretaries
    const clubLeads = organizationData.flatMap(c =>
        c.clubs.flatMap(club => [
            { name: club.secretary.name, role: `${club.name} Secretary`, emoji: '📋' },
            { name: club.jointSecretary.name, role: `${club.name} Joint Secretary`, emoji: '🤝' }
        ])
    );

    const allTeam = [...committeeSecs, ...clubLeads];

    return (
        <section id="team" className="team">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our Leadership Team</h2>
                    <p>The dedicated students leading our committees and clubs</p>
                    <div className="section-divider"></div>
                </div>

                <div className="team__grid">
                    {allTeam.map((member, i) => (
                        <div
                            className={`team__card reveal reveal-delay-${(i % 4) + 1}`}
                            key={`${member.name}-${member.role}`}
                        >
                            <div className="team__card-avatar">
                                <span className="team__card-avatar-alt">
                                    Photo of {member.name}
                                </span>
                                <div className="team__card-avatar-emoji">{member.emoji}</div>
                            </div>
                            <h3 className="team__card-name">{member.name}</h3>
                            <p className="team__card-role">{member.role}</p>
                            <div className="team__card-socials">
                                <a href="#" className="team__social-link" aria-label="LinkedIn">in</a>
                                <a href="#" className="team__social-link" aria-label="Email">✉</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
