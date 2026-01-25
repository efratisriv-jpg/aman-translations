import React, { useState, useEffect } from 'react';
import { View } from './types';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ServicesView from './views/ServicesView';
import ClientsView from './views/ClientsView';
import ContactView from './views/ContactView';
import DashboardView from './views/DashboardView';
import ChatView from './views/ChatView';
import StudioView from './views/StudioView';
import LiveView from './views/LiveView';
import PrivacyView from './views/PrivacyView';
import ImprintView from './views/ImprintView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayView, setDisplayView] = useState<View>(View.HOME);

  // Handle global scroll behavior
  useEffect(() => {
    // Only scroll to top if we are navigating to a view without a specific sub-section.
    // We remove targetSection from dependencies to prevent snapping back to top 
    // when a view clears its internal scroll target.
    if (!targetSection) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [displayView]);

  const navigate = (view: View, section?: string) => {
    // Even if view is same, we allow navigation if a section is provided (for in-page jumps)
    if (view === currentView && !section) return;

    setTargetSection(section || null);
    setIsTransitioning(true);
    
    // Allow the loading transition effect to start
    setTimeout(() => {
      setCurrentView(view);
      setDisplayView(view);
      
      // End transition after content has swapped
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  const renderView = () => {
    switch (displayView) {
      case View.HOME: return <HomeView onNavigate={navigate} />;
      case View.ABOUT: return <AboutView setView={(v) => navigate(v)} />;
      case View.SERVICES: return <ServicesView targetSection={targetSection} clearTarget={() => setTargetSection(null)} setView={(v) => navigate(v)} />;
      case View.CLIENTS: return <ClientsView setView={(v) => navigate(v)} />;
      case View.CONTACT: return <ContactView setView={(v) => navigate(v)} />;
      case View.DASHBOARD: return <DashboardView onNavigate={navigate} />;
      case View.CHAT: return <ChatView />;
      case View.STUDIO: return <StudioView />;
      case View.LIVE: return <LiveView />;
      case View.PRIVACY: return <PrivacyView setView={(v) => navigate(v)} />;
      case View.IMPRINT: return <ImprintView setView={(v) => navigate(v)} />;
      default: return <HomeView onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Modern Top Loading Bar */}
      <div 
        className={`fixed top-0 left-0 h-[3px] bg-[#00A3E0] z-[9999] transition-all duration-500 ease-out shadow-[0_0_10px_#00A3E0] ${
          isTransitioning ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />

      <header className="w-full relative z-50">
        <TopBar />
        <div className="sticky-nav">
          <Navbar currentView={currentView} onNavigate={navigate} />
        </div>
      </header>

      <main 
        className={`flex-grow transition-all duration-300 ease-in-out ${
          isTransitioning ? 'opacity-40 scale-[0.99] blur-[2px]' : 'opacity-100 scale-100 blur-0'
        }`}
      >
        {renderView()}
      </main>

      <Footer setView={(v) => navigate(v)} />

      {/* Modern Shutter Overlay */}
      <div 
        className={`fixed inset-0 bg-white pointer-events-none z-[40] transition-opacity duration-300 ${
          isTransitioning ? 'opacity-30' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default App;