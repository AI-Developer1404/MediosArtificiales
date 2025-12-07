
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import CourseLanding from './pages/CourseLanding';
import Login from './pages/Login';
import PortalDashboard from './pages/PortalDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <LanguageProvider>
                <HashRouter>
                    <ScrollToTop />
                    <div className="font-sans bg-[#0a0f1d] min-h-screen text-white flex flex-col">
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                {/* Public Routes */}
                                <Route path="/" element={<Home />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/cursus-ai-muziek" element={<CourseLanding />} />
                                <Route path="/login" element={<Login />} />

                                {/* Private Routes */}
                                <Route 
                                    path="/portal" 
                                    element={
                                        <ProtectedRoute>
                                            <PortalDashboard />
                                        </ProtectedRoute>
                                    } 
                                />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </HashRouter>
            </LanguageProvider>
        </AuthProvider>
    );
};

export default App;
