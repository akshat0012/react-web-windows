import { useState } from 'react';

export default function Topbar() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div 
            className={`
                absolute 
                top-0 
                left-1/2 
                transform 
                -translate-x-1/2 
                bg-[#000] 
                rounded-b-xl 
                transition-all 
                duration-300 
                ease-in-out
                ${isHovered 
                    ? 'h-16 w-64 opacity-90' // Enlarged state 
                    : 'h-8 w-40'} // Default state
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered}
        </div>
    )
}
