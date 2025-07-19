import React, { useEffect } from 'react';

const PageTransitions = ({ activePage, children }) => {
    const [currentPage, setCurrentPage] = React.useState(activePage);
    const [isTransitioning, setIsTransitioning] = React.useState(false);

    useEffect(() => {
        console.log(`Current Page: ${currentPage}, Active Page: ${activePage}`);
        if (currentPage !== activePage) {
            // setCurrentPage(activePage);
            setIsTransitioning(true);
            const timer = setTimeout(() => {
                setCurrentPage(activePage);
                setIsTransitioning(false);
                console.log(`Current Page: ${currentPage}, Active Page: ${activePage}`);
            }, 300); // 300 to match the transition time
            return () => {
                console.log('cleanup timer');
                return clearTimeout(timer);
            };
        }
    }, [activePage, currentPage]);

    return (
        <div className='w-full h-full overflow-hidden relative bg-cover bg-no-repeat transform-3d'
            style={{ backgroundImage: 'url(images/vivid-blurred-colorful-background.jpg)' }}>
            <div className={`absolute w-full h-full transition-transform duration-300
                    ${isTransitioning ? '-translate-x-full' : 'translate-x-0'}
                    `}>
                {
                    // ${isTransitioning ? '-translate-x-full' : 'translate-x-0'}
                    children[activePage]
                }
            </div>
        </div>
    )
}

export default PageTransitions;