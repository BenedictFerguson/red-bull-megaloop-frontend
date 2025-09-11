import { useState, useLayoutEffect, RefObject } from 'react';

// This custom hook takes a ref to an element and returns its width and height.
export function useContainerQuery<T extends HTMLElement>(ref: RefObject<T>) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        // Ensure the ref is attached to an element
        const element = ref.current;
        if (!element) {
            return;
        }

        // The ResizeObserver is a modern browser API to watch for size changes
        const observer = new ResizeObserver((entries) => {
            // We only care about the first entry, which is our container
            const entry = entries[0];
            if (entry) {
                setWidth(entry.contentRect.width);
                setHeight(entry.contentRect.height);
            }
        });

        // Start observing the element
        observer.observe(element);

        // Cleanup function to stop observing when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, [ref]); // Rerun the effect if the ref changes

    return { width, height };
}