import React from 'react'
import { useSelector } from 'react-redux'

export default function ThemeProvider({children}) {
    const { theme } = useSelector(state => state.theme)
  return (
    <div className={theme}>
        <div className=' bg-white text-gray-700 dark:bg-[rgb(6,22,69)] min-h-screen'>
            {children}
        </div>
    </div>
  )
}
