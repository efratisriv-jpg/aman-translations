
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

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [targetSection, setTargetSection] = useState<string | null>(null);

  // Simple scroll-to-top on view change if no section is targeted
  useEffect(() => {
    if (!targetSection) {
      window.scrollTo(0, 0);
    }
  }, [currentView, targetSection]);

  const navigate = (view: View, section?: string) => {
    setTargetSection(section || null);
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <HomeView onNavigate={navigate} />;
      case View.ABOUT: return <AboutView setView={(v) => navigate(v)} />;
      case View.SERVICES: return <ServicesView targetSection={targetSection} clearTarget={() => setTargetSection(null)} setView={(v) => navigate(v)} />;
      case View.CLIENTS: return <ClientsView setView={(v) => navigate(v)} />;
      case View.CONTACT: return <ContactView setView={(v) => navigate(v)} />;
      case View.DASHBOARD: return <DashboardView onNavigate={(v) => navigate(v)} />;
      case View.CHAT: return <ChatView />;
      case View.STUDIO: return <StudioView />;
      case View.LIVE: return <LiveView />;
      default: return <HomeView onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full">
        <TopBar />
        <div className="sticky-nav">
          <Navbar currentView={currentView} onNavigate={navigate} />
        </div>
      </header>

      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer setView={(v) => navigate(v)} />
    </div>
  );
};

export default App;
