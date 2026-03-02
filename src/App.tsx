import { useState, useEffect } from 'react';
import { initializeStore, getCurrentUser, setCurrentUser } from './store';
import { User } from './types';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import StudyPage from './pages/StudyPage';
import ReportPage from './pages/ReportPage';
import AdminPanel from './pages/AdminPanel';
import PaymentPage from './pages/PaymentPage';
import WaitingPage from './pages/WaitingPage';

export type Page = 'landing' | 'auth' | 'dashboard' | 'study' | 'report' | 'admin' | 'payment' | 'waiting' | 'demo';

export default function App() {
  const [page, setPage] = useState<Page>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [activeStudyId, setActiveStudyId] = useState<string>('');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    initializeStore();
    const saved = getCurrentUser();
    if (saved) {
      setUser(saved);
      if (saved.role === 'admin') setPage('admin');
      else if (saved.status === 'waiting_approval') setPage('waiting');
      else if (saved.status === 'approved') setPage('dashboard');
      else setPage('dashboard');
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    setCurrentUser(u);
    if (u.role === 'admin') setPage('admin');
    else if (u.status === 'waiting_approval') setPage('waiting');
    else setPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentUser(null);
    setPage('landing');
  };

  const navigate = (p: Page, studyId?: string) => {
    setPage(p);
    if (studyId) setActiveStudyId(studyId);
  };

  const refreshUser = () => {
    const u = getCurrentUser();
    if (u) setUser(u);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {page === 'landing' && (
        <LandingPage
          onNavigate={(p) => { setAuthMode(p === 'auth' ? 'register' : 'login'); navigate(p); }}
          onDemo={() => navigate('demo')}
        />
      )}
      {(page === 'auth') && (
        <AuthPage
          mode={authMode}
          setMode={setAuthMode}
          onLogin={handleLogin}
          onBack={() => navigate('landing')}
        />
      )}
      {page === 'dashboard' && user && (
        <Dashboard
          user={user}
          onLogout={handleLogout}
          onNavigate={navigate}
          onNewStudy={(id) => navigate('study', id)}
          onViewReport={(id) => navigate('report', id)}
        />
      )}
      {(page === 'study' || page === 'demo') && (
        <StudyPage
          user={user}
          studyId={activeStudyId}
          isDemo={page === 'demo'}
          onBack={() => user ? navigate('dashboard') : navigate('landing')}
          onComplete={(id) => navigate('report', id)}
        />
      )}
      {page === 'report' && (
        <ReportPage
          studyId={activeStudyId}
          onBack={() => navigate('dashboard')}
        />
      )}
      {page === 'admin' && user && (
        <AdminPanel
          user={user}
          onLogout={handleLogout}
        />
      )}
      {page === 'payment' && user && (
        <PaymentPage
          user={user}
          onComplete={() => { refreshUser(); navigate('waiting'); }}
          onBack={() => navigate('dashboard')}
        />
      )}
      {page === 'waiting' && (
        <WaitingPage
          onCheck={() => {
            refreshUser();
            const u = getCurrentUser();
            if (u && u.status === 'approved') navigate('dashboard');
          }}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
