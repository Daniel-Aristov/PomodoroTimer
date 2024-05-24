import Timer from '../Timer/Timer'
import Settings from '../Settings/Settings'
import SettingsContext from '../Settings/SettingsContext'
import { useState } from 'react'
import './App.module.scss'

export default function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const a = 0

  return (
    <>
      <main>
        <SettingsContext.Provider value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}>
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    </>
  )
}
