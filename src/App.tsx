import MainLayout from '@/layoout/MainLayout'
import Unstack from '@/pages/unstack'
import { createContext, useState } from 'react'


export const AppContext = createContext<{isDarkMode: boolean, setIsDarkMode: (val: boolean) => void}>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <MainLayout>
        <Unstack/>
      </MainLayout>
    </AppContext.Provider>
  )
}

export default App
