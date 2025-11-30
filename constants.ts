import { ServiceTier, Project, Language } from './types';

const SERVICE_TIERS_DATA = {
    en: [
        {
            id: 'ai-ads',
            title: "AI Commercials",
            subtitle: "For Companies",
            icon: 'cpu',
            description: "High-conversion video ads generated 100% by Artificial Intelligence. Reduce production costs by 70% while increasing engagement.",
            features: ["Script to Video", "Hyper-realistic Avatars", "Multilingual Dubbing", "A/B Testing Variations"],
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 'ai-visuals',
            title: "AI Visual Material",
            subtitle: "Brand Assets",
            icon: 'camera',
            description: "Stunning visual assets for social media, websites, and presentations. We create worlds that don't exist yet.",
            features: ["3D Product Visualization", "Abstract Backgrounds", "Social Media Loops", "Style Transfer"],
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 'music-videos',
            title: "Original Music Videos",
            subtitle: "Artist Production",
            icon: 'music',
            description: "Cinematic videoclips combining traditional filmmaking with bleeding-edge AI VFX. The perfect visual companion for your sound.",
            features: ["Storyboarding", "4K Filming", "AI VFX Integration", "Color Grading"],
            image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800"
        }
    ],
    es: [
        {
            id: 'ai-ads',
            title: "Anuncios IA",
            subtitle: "Para Empresas",
            icon: 'cpu',
            description: "Anuncios de video de alta conversión generados 100% por Inteligencia Artificial. Reduce costes de producción un 70% aumentando el engagement.",
            features: ["Guion a Video", "Avatares Hiperrealistas", "Doblaje Multilingüe", "Variaciones A/B Testing"],
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 'ai-visuals',
            title: "Material Visual IA",
            subtitle: "Activos de Marca",
            icon: 'camera',
            description: "Activos visuales impactantes para redes sociales, webs y presentaciones. Creamos mundos que aún no existen.",
            features: ["Visualización de Producto 3D", "Fondos Abstractos", "Loops para Redes", "Transferencia de Estilo"],
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 'music-videos',
            title: "Videos Musicales",
            subtitle: "Producción Artística",
            icon: 'music',
            description: "Videoclips cinematográficos combinando cine tradicional con VFX de IA de vanguardia. El compañero visual perfecto para tu sonido.",
            features: ["Storyboarding", "Filmación 4K", "Integración VFX IA", "Etalonaje"],
            image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800"
        }
    ]
};

const PROJECTS_DATA = {
    en: [
        { id: 1, title: "DON PATRICIO", category: "Music Video", client: "Don Patricio", image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800", tags: ["Direction", "Edit"] },
        { id: 2, title: "NEURAL FASHION", category: "AI Visuals", client: "Vogue Italia", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", tags: ["GenAI", "Stable Diffusion"] },
        { id: 3, title: "TOMILLO Y EL GUIS", category: "Music Video", client: "Indie Label", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", tags: ["Production", "VFX"] },
        { id: 4, title: "CYBERPUNK CITY", category: "AI Ads", client: "Tech Corp", image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97d848?auto=format&fit=crop&q=80&w=800", tags: ["Unreal Engine", "AI"] },
        { id: 5, title: "VIDA DE RICO", category: "Music Video", client: "Camilo", image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80&w=800", tags: ["Color", "Edit"] },
        { id: 6, title: "SYNTHETIC DREAMS", category: "AI Visuals", client: "Internal", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", tags: ["Experimental", "AI"] },
        { id: 7, title: "ROMPE", category: "Music Video", client: "Daddy Yankee", image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800", tags: ["Cover", "Dance"] },
        { id: 8, title: "GRAVITATIONAL", category: "AI Ads", client: "SpaceX Start", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800", tags: ["Sora", "Runway"] }
    ],
    es: [
        { id: 1, title: "DON PATRICIO", category: "Video Musical", client: "Don Patricio", image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800", tags: ["Dirección", "Edición"] },
        { id: 2, title: "NEURAL FASHION", category: "Visuales IA", client: "Vogue Italia", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", tags: ["GenAI", "Stable Diffusion"] },
        { id: 3, title: "TOMILLO Y EL GUIS", category: "Video Musical", client: "Indie Label", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", tags: ["Producción", "VFX"] },
        { id: 4, title: "CYBERPUNK CITY", category: "Anuncios IA", client: "Tech Corp", image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97d848?auto=format&fit=crop&q=80&w=800", tags: ["Unreal Engine", "IA"] },
        { id: 5, title: "VIDA DE RICO", category: "Video Musical", client: "Camilo", image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80&w=800", tags: ["Color", "Edición"] },
        { id: 6, title: "SYNTHETIC DREAMS", category: "Visuales IA", client: "Internal", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", tags: ["Experimental", "IA"] },
        { id: 7, title: "ROMPE", category: "Video Musical", client: "Daddy Yankee", image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800", tags: ["Cover", "Danza"] },
        { id: 8, title: "GRAVITATIONAL", category: "Anuncios IA", client: "SpaceX Start", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800", tags: ["Sora", "Runway"] }
    ]
};

export const UI_TEXT = {
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact'
        },
        hero: {
            badge: "Next Gen Production",
            title1: "INTELLIGENT",
            title2: "VISUALS",
            subtitle: "We fuse generative AI with cinematic storytelling to create ads, visuals, and music videos that pop.",
            ctaPrimary: "View Work",
            ctaSecondary: "Our Services"
        },
        homeIntro: {
            badgeTitle: "Faster Production",
            title: "The Future of Advertising is Artificial.",
            description: "Stop spending thousands on traditional sets and actors. We use advanced generative models to create hyper-realistic ads and visual materials tailored for your brand. Plus, we keep the soul alive with our own original music video productions.",
            items: ['AI Video Ads', 'Visual Assets', 'Music Videos', 'GenAI Consulting']
        },
        services: {
            title: "Our Capabilities",
            subtitle: "What we do",
            startProject: "Start Project",
            processTitle: "How It Works",
            processSubtitle: "From concept to final render in record time.",
            steps: [
                { step: "01", title: "Briefing", desc: "We analyze your brand goals and target audience." },
                { step: "02", title: "Prompting", desc: "Our prompt engineers generate base assets and scenes." },
                { step: "03", title: "Synthesis", desc: "AI video generation using state-of-the-art models." },
                { step: "04", title: "Refining", desc: "Human editing, color grading, and sound design." }
            ]
        },
        projects: {
            title: "Featured Work",
            subtitle: "Portfolio",
            filters: ['All', 'AI Ads', 'AI Visuals', 'Music Video']
        },
        about: {
            title: "We Make It Pop",
            subtitle: "About Us",
            p1: "We are a production house sitting at the intersection of",
            p1highlight1: "Art",
            p1highlight2: "Algorithm",
            p2: "While others fear AI, we embrace it as the ultimate camera lens. We combine traditional filmmaking techniques with generative models to produce content that was impossible just yesterday.",
            visionTitle: "The Vision",
            visionDesc: "To democratize high-end video production for companies of all sizes using technology.",
            musicTitle: "The Music",
            musicDesc: "Our roots are in rhythm. We produce music videos that understand the beat, not just overlay it.",
            speedTitle: "The Speed",
            speedDesc: "Traditional production takes weeks. We take days. Efficiency is our aesthetic."
        },
        contact: {
            title: "Let's Create",
            subtitle: "Contact",
            desc: "Ready to transform your visual identity? Whether it's an AI ad campaign or a music video, we are ready to listen.",
            email: "Email us",
            visit: "Visit us",
            formName: "Name",
            formCompany: "Company",
            formInterest: "Interest",
            formMessage: "Message",
            formSend: "Send Request",
            interestOptions: ["Select an interest", "AI Commercials", "Music Video Production", "Visual Assets", "Other"]
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            services: 'Servicios',
            projects: 'Proyectos',
            about: 'Nosotros',
            contact: 'Contacto'
        },
        hero: {
            badge: "Producción Nueva Generación",
            title1: "VISUALES",
            title2: "INTELIGENTES",
            subtitle: "Fusionamos IA generativa con narrativa cinematográfica para crear anuncios, visuales y videos musicales que destacan.",
            ctaPrimary: "Ver Trabajos",
            ctaSecondary: "Servicios"
        },
        homeIntro: {
            badgeTitle: "Producción Rápida",
            title: "El Futuro de la Publicidad es Artificial.",
            description: "Deja de gastar miles en sets tradicionales y actores. Usamos modelos generativos avanzados para crear anuncios hiperrealistas y materiales visuales adaptados a tu marca.",
            items: ['Anuncios Video IA', 'Activos Visuales', 'Videos Musicales', 'Consultoría GenAI']
        },
        services: {
            title: "Nuestras Capacidades",
            subtitle: "Qué hacemos",
            startProject: "Iniciar Proyecto",
            processTitle: "Cómo Funciona",
            processSubtitle: "Del concepto al render final en tiempo récord.",
            steps: [
                { step: "01", title: "Briefing", desc: "Analizamos tus objetivos de marca y audiencia." },
                { step: "02", title: "Prompting", desc: "Nuestros ingenieros generan activos base y escenas." },
                { step: "03", title: "Síntesis", desc: "Generación de video IA usando modelos punteros." },
                { step: "04", title: "Refinamiento", desc: "Edición humana, etalonaje y diseño sonoro." }
            ]
        },
        projects: {
            title: "Trabajos Destacados",
            subtitle: "Portafolio",
            filters: ['Todos', 'Anuncios IA', 'Visuales IA', 'Video Musical']
        },
        about: {
            title: "Creamos Impacto",
            subtitle: "Sobre Nosotros",
            p1: "Somos una productora situada en la intersección del",
            p1highlight1: "Arte",
            p1highlight2: "Algoritmo",
            p2: "Mientras otros temen a la IA, nosotros la abrazamos como la lente definitiva. Combinamos técnicas de cine tradicional con modelos generativos para producir contenido imposible ayer.",
            visionTitle: "La Visión",
            visionDesc: "Democratizar la producción de video de alta gama usando tecnología.",
            musicTitle: "La Música",
            musicDesc: "Nuestras raíces están en el ritmo. Producimos videos que entienden el beat.",
            speedTitle: "La Velocidad",
            speedDesc: "La producción tradicional tarda semanas. Nosotros días. La eficiencia es nuestra estética."
        },
        contact: {
            title: "Creemos Juntos",
            subtitle: "Contacto",
            desc: "¿Listo para transformar tu identidad visual? Ya sea una campaña IA o un videoclip, estamos listos para escuchar.",
            email: "Envíanos un email",
            visit: "Visítanos",
            formName: "Nombre",
            formCompany: "Empresa",
            formInterest: "Interés",
            formMessage: "Mensaje",
            formSend: "Enviar Solicitud",
            interestOptions: ["Selecciona un interés", "Anuncios IA", "Producción Video Musical", "Activos Visuales", "Otro"]
        }
    }
};

export const getServiceTiers = (lang: Language): ServiceTier[] => {
    return SERVICE_TIERS_DATA[lang];
};

export const getProjects = (lang: Language): Project[] => {
    return PROJECTS_DATA[lang];
};

export const SERVICE_TIERS = SERVICE_TIERS_DATA.en; // Fallback/Default if needed directly
export const PROJECTS = PROJECTS_DATA.en; // Fallback

export const AWARDS: string[] = [
    "TFM Festival", "FIVO", "Good Rock", "ICF Awards", "Semana de Cine", "Diverso Cinema", "AIFF", "Atlanta Film Fest"
];