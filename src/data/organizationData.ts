export interface Lead {
    name: string;
    description: string;
    photoPlaceholder: string;
}

export interface Club {
    name: string;
    description: string;
    logoPlaceholder: string;
    secretary: Lead;
    jointSecretary: Lead;
}

export interface Committee {
    id: string;
    name: string;
    icon: string;
    color: string;
    secretary: Lead;
    clubs: Club[];
}

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const organizationData: Committee[] = [
    {
        id: 'technical',
        name: 'Technical Committee',
        icon: '💻',
        color: '#0ea5e9',
        secretary: {
            name: 'TBD - Committee Secretary',
            description: LOREM,
            photoPlaceholder: 'Photo of Tech Sec'
        },
        clubs: [
            { name: 'DROID', logoPlaceholder: 'DROID Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'DCODR', logoPlaceholder: 'DCODR Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'VECTOR', logoPlaceholder: 'VECTOR Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'ARGO', logoPlaceholder: 'ARGO Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'STOCKOPS', logoPlaceholder: 'STOCKOPS Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'CICADA', logoPlaceholder: 'CICADA Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
        ]
    },
    {
        id: 'cultural',
        name: 'Cultural Committee',
        icon: '🎭',
        color: '#f59e0b',
        secretary: {
            name: 'TBD - Committee Secretary',
            description: LOREM,
            photoPlaceholder: 'Photo of Cultural Sec'
        },
        clubs: [
            { name: 'VEHEMENCE', logoPlaceholder: 'VEHEMENCE Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'BEATS', logoPlaceholder: 'BEATS Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'GENESIS', logoPlaceholder: 'GENESIS Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'ELOQUENCE', logoPlaceholder: 'ELOQUENCE Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'CAPTURE', logoPlaceholder: 'CAPTURE Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
        ]
    },
    {
        id: 'sports',
        name: 'Sports Committee',
        icon: '⚽',
        color: '#10b981',
        secretary: {
            name: 'TBD - Committee Secretary',
            description: LOREM,
            photoPlaceholder: 'Photo of Sports Sec'
        },
        clubs: [
            { name: 'BASKETBALL', logoPlaceholder: 'BASKETBALL Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'TT & LAWN TENNIS', logoPlaceholder: 'TT & LAWN TENNIS Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'BADMINTON', logoPlaceholder: 'BADMINTON Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'VOLLEYBALL', logoPlaceholder: 'VOLLEYBALL Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'INDOOR CLUB', logoPlaceholder: 'INDOOR CLUB Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'CRICKET CLUB', logoPlaceholder: 'CRICKET CLUB Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
            { name: 'FOOTBALL CLUBS', logoPlaceholder: 'FOOTBALL CLUBS Logo', description: LOREM, secretary: { name: 'Sec', description: LOREM, photoPlaceholder: '' }, jointSecretary: { name: 'Jt Sec', description: LOREM, photoPlaceholder: '' } },
        ]
    },
    {
        id: 'welfare',
        name: 'Welfare Committee',
        icon: '🤝',
        color: '#8b5cf6',
        secretary: {
            name: 'TBD - Committee Secretary',
            description: LOREM,
            photoPlaceholder: 'Photo of Welfare Sec'
        },
        clubs: []
    },
    {
        id: 'academic',
        name: 'Academic Committee',
        icon: '📚',
        color: '#f43f5e',
        secretary: {
            name: 'TBD - Committee Secretary',
            description: LOREM,
            photoPlaceholder: 'Photo of Academic Sec'
        },
        clubs: []
    }
];
