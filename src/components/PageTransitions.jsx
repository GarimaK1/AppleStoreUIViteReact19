import React, { useEffect } from 'react';

const PageTransitions = ({ activePage, children }) => {
    const [currentPage, setCurrentPage] = React.useState(activePage);
    const [isTransitioning, setIsTransitioning] = React.useState(false);

    useEffect(() => {
        if (currentPage !== activePage) {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentPage(activePage);
                setIsTransitioning(false);
            }, 500); // 500 to match the transition time
        }
    }, [activePage, currentPage]);
    
    return (
        <div className='w-full h-full overflow-hidden relative bg-cover bg-no-repeat'
            style={{ backgroundImage: 'url(images/vivid-blurred-colorful-background.jpg)' }}>
            <div className='absolute w-full h-full transition transform-500'>
                {children}
            </div>
        </div>
    )
}

export default PageTransitions;