import { useParams, Navigate } from 'react-router-dom';
import { organizationData } from '../data/organizationData';
import { CommitteeSection } from '../components/Committees/Committees';

const CommitteeDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const committee = organizationData.find(c => c.id === id);

    if (!committee) {
        return <Navigate to="/committees" replace />;
    }

    return (
        <div className="page-content" style={{ paddingTop: '80px' }}>
            <div className="container">
                <CommitteeSection committee={committee} />
            </div>
        </div>
    );
};

export default CommitteeDetailPage;
