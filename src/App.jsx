import { useState, useEffect } from 'react';
import Controls from './components/Controls';
import Navbar from './components/Navbar';
import Home from './components/Home';
import IPhone from './components/IPhone';
import Macbook from './components/Macbook';
import Watch from './components/Watch';
import IMac from './components/IMac';
import PageTransitions from './components/PageTransitions';

function App() {
  const [isFrameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const currentIsLargeScreen = window.innerWidth >= 1024;
      setIsLargeScreen(currentIsLargeScreen);

      if (!currentIsLargeScreen) {
        setFrameZoom(true); // Always zoomed in on smaller screens
      } else {
        setFrameZoom(false);
      }
    }

    // Important: Call handleResize immediately to set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    // Cleanup function: remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize); 
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const toggleZoom = () => {
    if (isLargeScreen) {
      setFrameZoom(!isFrameZoom);
    }
  }

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  }

  const resetHome = () => {
    setActivePage(0);
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <>
      <div className='w-full h-screen grid place-items-center'>
        <div className={`${isFrameZoom ? 'min-w-[97vw] min-h-[97vh]' : 'min-w-[70vw] min-h-[85vh]'} 
                      w-[70vw] h-[85vh] max-w-[97vw] max-h-[97vh] border border-gray-300 rounded-2xl 
                      resize overflow-auto transition-all duration-100 flex relative`}>
          <Navbar 
            activePage={activePage} handleNavClick={handleNavClick} 
            isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} 
          />
          <Controls isFrameZoom={isFrameZoom} toggleZoom={toggleZoom} 
                    resetHome={resetHome} activePage={activePage} 
          />
          <div className='flex-grow'>
            <PageTransitions activePage={activePage} >
              <Home onNavigation={handleNavClick} />
              <IPhone />
              <Macbook />
              <Watch />
              <IMac />
            </PageTransitions>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
