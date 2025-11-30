export interface ServiceTier {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    description: string;
    features: string[];
    image: string;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    client: string;
    image: string;
    tags: string[];
}

export type PageRoute = 'home' | 'services' | 'projects' | 'about' | 'contact';

export type Language = 'en' | 'es';