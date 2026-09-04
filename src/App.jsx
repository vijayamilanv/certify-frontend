import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';
import StartupCheck from './components/StartupCheck';

// Lazy-loaded route components (only downloaded when user visits that page)
const CertifyStudio = lazy(() => import('./CertifyStudio'));
const VerificationPage = lazy(() => import('./pages/Verification'));
const Onboarding = lazy(() => import('./pages/Onboarding'));

// Quiz routes — loaded on demand
const QuizHub = lazy(() => import('./pages/quiz/QuizHub'));
const CreateQuiz = lazy(() => import('./pages/quiz/CreateQuiz'));
const TakeQuiz = lazy(() => import('./pages/quiz/TakeQuiz'));
const Leaderboard = lazy(() => import('./pages/quiz/Leaderboard'));
const History = lazy(() => import('./pages/quiz/History'));
const Analytics = lazy(() => import('./pages/quiz/Analytics'));
const StudentResults = lazy(() => import('./pages/quiz/StudentResults'));



function App() {
  const navigate = (path) => {
    window.location.href = path.startsWith('/') ? path : `/${path}`;
  };

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <StartupCheck>
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Main CertifyPro Routes */}
            <Route path="/" element={<CertifyStudio />} />
            <Route path="/how-it-works" element={<Onboarding onNavigate={navigate} />} />
            <Route path="/verify" element={<VerificationPage onBack={() => navigate('/')} />} />

            {/* Quiz System Routes */}
            <Route path="/quiz" element={<QuizHub />} />
            <Route path="/quiz/create" element={<CreateQuiz />} />
            <Route path="/quiz/results" element={<StudentResults />} />
            <Route path="/quiz/results/:quizId" element={<StudentResults />} />
            <Route path="/quiz/take/:quizId" element={<TakeQuiz />} />
            <Route path="/quiz/leaderboard/:quizId" element={<Leaderboard />} />
            <Route path="/quiz/history" element={<History />} />
            <Route path="/quiz/analytics/:id" element={<Analytics />} />
          </Routes>
        </Suspense>
      </StartupCheck>
    </BrowserRouter>
  );
}

export default App;
