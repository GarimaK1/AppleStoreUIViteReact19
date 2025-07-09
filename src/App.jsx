import { useState } from 'react';
import Controls from './components/Controls';
import Navbar from './components/Navbar';
import Home from './components/Home';
import IPhone from './components/IPhone';
import Macbook from './components/Macbook';

function App() {
  const [isFrameZoom, setFrameZoom] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const toggleZoom = () => {
    setFrameZoom(!isFrameZoom);
  }

  const handleNavClick= (pageIndex) => {
    setCurrentPage(pageIndex);
  }

  return (
    <>
      <div className='w-full h-screen grid place-items-center'>
        <div className={`${
          isFrameZoom ? 'min-w-[97vw] min-h-[97vh]' : 'min-w-[70vw] min-h-[85vh]'
        } w-[70vw] h-[85vh] max-w-[97vw] max-h-[97vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100 flex`}>
          <Navbar currentPage={currentPage} handleNavClick={handleNavClick}/>
          <Controls isFrameZoom={isFrameZoom} toggleZoom={toggleZoom} />
          <div className='flex-grow'>
            {/* <Home /> */}
            {/* <IPhone /> */}
            <Macbook />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
