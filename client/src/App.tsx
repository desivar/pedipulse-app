import React, { useState, useEffect } from 'react';
import { Task, Sticker, AppData } from './types'; // This now works!
import './App.css';

const App: React.FC = () => {
  // Initialize with 'null' but tell TS it will be 'AppData'
  const [data, setData] = useState<AppData | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [shiftsCompleted, setShiftsCompleted] = useState<number>(0);
  const [isKidMode, setIsKidMode] = useState<boolean>(false);

  const stickers: Sticker[] = [
    { icon: "🌈", goal: 1, label: "First Day" },
    { icon: "🧸", goal: 3, label: "Patient Hero" },
    { icon: "🍦", goal: 5, label: "Week Done!" }
  ];

  useEffect(() => {
    // Fetching the welcome data from our Node server
    fetch('http://localhost:5000/api/welcome')
      .then((res) => res.json())
      .then((json: AppData) => setData(json))
      .catch((err) => console.error("Server connection error:", err));
  }, []);

  return (
    <div className={`app-container ${isKidMode ? 'kid-view' : ''}`}>
      <header className="nurse-header">
        <h1>PediPulse 🩺</h1>
        <button onClick={() => setIsKidMode(!isKidMode)}>
          {isKidMode ? "Nurse Mode" : "Kid Mode 🎨"}
        </button>
      </header>

      <main className="welcome-card">
        {/* We use data? because it starts as null */}
        <h2>{data?.message || "Connecting..."}</h2>
        <p className="quote">{data?.quote}</p>
      </main>

      <section className="sticker-book">
        <div className="sticker-grid">
          {stickers.map((s, i) => (
            <div key={i} className={`sticker ${shiftsCompleted >= s.goal ? 'unlocked' : 'locked'}`}>
              <span className="sticker-icon">{s.icon}</span>
            </div>
          ))}
        </div>
        <button className="shift-btn" onClick={() => setShiftsCompleted(c => c + 1)}>
          Finish Shift
        </button>
      </section>
    </div>
  );
};

export default App;