import { ReactNode } from "react"
import Sidebar from "./Sidebar"
import MobileHeader from "./MobileHeader"


function MainLayout({children}: {children: ReactNode}) {
  return (
    <div className='bg-white dark:bg-milgreen h-screen w-screen overflow-x-hidden overflow-y-auto relative flex flex-col md:flex-row'>
        <div className='w-[16rem] hidden md:block'>
            <Sidebar/>
        </div>
        <div className="block md:hidden w-full">
          <MobileHeader/>
        </div>
        <div className='w-full overflow-y-auto overflow-x-hidden'>
            {children}
        </div>
    </div>
  )
}

export default MainLayout