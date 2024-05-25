import ReactSlider from 'react-slider'
import SettingsContext from './SettingsContext'
import { useContext } from 'react'
import BackButton from '../../ui/Buttons/BackButton'

import styles from './Settings.module.scss'

export default function Settings() {
  const SettingsInfo = useContext(SettingsContext)
  return (
    <div className={styles.settingsWrapper}>
      <p>Время работы: {SettingsInfo.workMinutes}:00</p>
      <ReactSlider
        className={`${styles.slider} ${styles.sliderRed}`}
        thumbClassName={`${styles.thumb} ${styles.thumbRed}`}
        trackClassName={'track'}
        value={SettingsInfo.workMinutes}
        onChange={(newValue) => SettingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <p>Время отдыха: {SettingsInfo.breakMinutes}:00</p>
      <ReactSlider
        className={`${styles.slider} ${styles.sliderGreen}`}
        thumbClassName={`${styles.thumb} ${styles.thumbGreen}`}
        trackClassName={'track'}
        value={SettingsInfo.breakMinutes}
        onChange={(newValue) => SettingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <BackButton onClick={() => SettingsInfo.setShowSettings(false)} />
      </div>
    </div>
  )
}
