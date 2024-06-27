// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeView from '@/view/HomeView';
import {SetView} from '@/view/SetView';
import StudyView from '@/view/StudyView';
import { DockDemo } from "@/components/DockDemo";
import { GridBg } from "@/components/magicui/GirdBg";
import { useTranslation } from 'react-i18next';
import './i18n'; // 引入 i18n 配置文件

const App = (): React.ReactElement => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4 text-center h-[10vh] max-h-[4rem]">

          <nav>

            <button onClick={() => changeLanguage('en')} className="m-2">English</button>
            <button onClick={() => changeLanguage('cn')} className="m-2">中文</button>
          </nav>
        </header>
        <main className="flex-grow h-[90vh]">
          <GridBg>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="study" element={<StudyView />} />
              <Route path="set" element={<SetView />} />
            </Routes>
          </GridBg>
        </main>
        <DockDemo />
      </div>
    </Router>
  );
};

export default App;
