import React, { useEffect } from 'react';

const PageTransitions = ({ activePage, children }) => {
    const [currentPage, setCurrentPage] = React.useState(activePage);
    const [isTransitioning, setIsTransitioning] = React.useState(false);

    useEffect(() => {
        if (currentPage !== activePage) {
            // setCurrentPage(activePage);
            setIsTransitioning(true);
            const timer = setTimeout(() => {
                setCurrentPage(activePage);
                setIsTransitioning(false);
            }, 300); // 300 to match the transition time
            return () => clearTimeout(timer);
        }
    }, [activePage]);

    return (
        <div className='w-full h-full overflow-hidden relative bg-cover bg-no-repeat transform-3d'
            style={{ backgroundImage: 'url(images/vivid-blurred-colorful-background.jpg)' }}>
            <div className={`absolute w-full h-full transition-transform duration-300
                    ${isTransitioning ? '-translate-x-full' : 'translate-x-0'}
                    `}>
                {
                    // ${isTransitioning ? '-translate-x-full' : 'translate-x-0'}
                    children[currentPage]
                }
            </div>
        </div>
    )
}

export default PageTransitions;