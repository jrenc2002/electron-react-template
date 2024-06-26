// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeView from '@/view/HomeView';
import SetView from '@/view/SetView';
import StudyView from '@/view/StudyView';
import { DockDemo } from "@/components/DockDemo";

const App = (): React.ReactElement => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl">My App</h1>
        </header>
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="about" element={<SetView />} />
            <Route path="contact" element={<StudyView />} />
          </Routes>
        </main>
          <DockDemo />
      </div>
    </Router>
  );
};

export default App;
