import './Clubs.css';
import { organizationData } from '../../data/organizationData';

const Clubs: React.FC = () => {
    // Flatten all clubs from all committees
    const allClubs = organizationData.flatMap(committee =>
        committee.clubs.map(club => ({ ...club, committeeName: committee.name }))
    );

    return (
        <section id="clubs" className="clubs">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our Specialized Clubs</h2>
                    <p>Student-run organizations driving innovation and creativity across all committees</p>
                    <div className="section-divider"></div>
                </div>

                <div className="clubs__grid">
                    {allClubs.map((club, i) => (
                        <div
                            className={`clubs__card reveal reveal-delay-${(i % 4) + 1}`}
                            key={club.name}
                        >
                            <div className="clubs__card-badge">{club.committeeName}</div>
                            <h3 className="clubs__card-name">{club.name}</h3>
                            <p className="clubs__card-desc">{club.description}</p>
                            <div className="clubs__card-leads-info">
                                <span>Sec: {club.secretary.name}</span>
                                <span> | </span>
                                <span>Jt Sec: {club.jointSecretary.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clubs;
