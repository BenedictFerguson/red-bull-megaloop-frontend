// src/hooks/use-breakpoint.hook.ts
import { useState, useEffect } from 'react';

export const useBreakpoint = (breakpoint: number) => {
    const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(
        window.innerWidth < breakpoint
    );

    useEffect(() => {
        const handleResize = () => {
            setIsBelowBreakpoint(window.innerWidth < breakpoint);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isBelowBreakpoint;
};