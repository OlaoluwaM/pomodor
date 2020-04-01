import React, { useEffect } from 'react'
import { Switch } from './components/Switch'
import { useSelector } from 'react-redux'
import {
  startSetShowTimerInTitle,
  startSetShowNotifications,
  startSetDarkMode,
} from '../../../data/settings/actions'

const Switches = () => {
  const { showTimerInTitle, showNotifications, darkMode } = useSelector(
    (state) => state.settings
  )

  useEffect(() => {
    if (!showTimerInTitle) {
      document.title = 'Pomodor'
    }
  }, [showTimerInTitle])

  return (
    <div>
      <Switch
        name="Timer in title"
        action={startSetShowTimerInTitle}
        checked={showTimerInTitle}
      />
      <Switch
        name="Notifications"
        action={startSetShowNotifications}
        checked={showNotifications}
      />
      <Switch name="Dark mode" action={startSetDarkMode} checked={darkMode} />
    </div>
  )
}

export { Switches }
