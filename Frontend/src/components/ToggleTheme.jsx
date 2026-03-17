import React, { useEffect } from 'react'
import { useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

function ToggleTheme() {
  const [ theme, setTheme ] = useState('light-theme')
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }
    else {      setTheme('light-theme')
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  let icon;
  if (theme === 'light-theme'){
    icon = <FiSun className="text-xl mt-2 md:text-2xl" strokeWidth={3} />
  } else {
    icon = <FiMoon className="text-xl mt-2 md:text-2xl" strokeWidth={3} />

  }
  return (
    <>
    <div>
      <button className="hover:text-gray-300" aria-label="Toggle Theme" onClick={toggleTheme}>
        {icon}
      </button>
    </div>
    </>
  )
}

export default ToggleTheme
