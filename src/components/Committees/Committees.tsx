import './Committees.css';
import { organizationData } from '../../data/organizationData';
import type { Committee, Club, Lead } from '../../data/organizationData';

const LeadCard: React.FC<{ lead: Lead; role: string; type: 'committee' | 'club' }> = ({ lead, role, type }) => {
    return (
        <div className={`lead-card lead-card--${type} reveal`}>
            <div className="lead-photo">
                <span className="committees__card-alt">
                    {lead.photoPlaceholder || 'Photo'}
                </span>
            </div>
            <div className="lead-info">
                <span className="lead-role">{role}</span>
                <h4 className="lead-name">{lead.name}</h4>
                <p className="lead-desc">{lead.description}</p>
            </div>
        </div>
    );
};

const ClubCard: React.FC<{ club: Club }> = ({ club }) => {
    return (
        <div className="club-card reveal">
            <div className="club-logo-placeholder">
                {club.logoPlaceholder}
            </div>
            <h3 className="club-name">{club.name}</h3>
            <p className="club-desc">{club.description}</p>
            <div className="club-leads">
                <LeadCard lead={club.secretary} role="Secretary" type="club" />
                <LeadCard lead={club.jointSecretary} role="Joint Secretary" type="club" />
            </div>
        </div>
    );
};

export const CommitteeSection: React.FC<{ committee: Committee }> = ({ committee }) => {
    return (
        <div className="committee-section" id={committee.id} style={{ '--accent': committee.color } as React.CSSProperties}>
            <div className="committee-header reveal">
                <span className="committee-icon">{committee.icon}</span>
                <h2 className="committee-title">{committee.name}</h2>
            </div>

            <LeadCard lead={committee.secretary} role="Secretary" type="committee" />

            {committee.clubs.length > 0 && (
                <div className="clubs-grid">
                    {committee.clubs.map((club) => (
                        <ClubCard key={club.name} club={club} />
                    ))}
                </div>
            )}
        </div>
    );
};

const Committees: React.FC = () => {
    return (
        <section className="committees">
            <div className="container committees__container">
                <div className="section-header reveal">
                    <h2>Governance Hierarchy</h2>
                    <p>
                        A collaborative structure of committees and student-run clubs
                    </p>
                    <div className="section-divider"></div>
                </div>

                {organizationData.map((committee) => (
                    <CommitteeSection key={committee.id} committee={committee} />
                ))}
            </div>
        </section>
    );
};

export default Committees;
