import './custom-accordion-item.styles.css';
import { useAccordionItem, useAccordionItemEffect, } from '@szhsin/react-accordion';
import { CosmosIconChevronDown, CosmosIconChevronUp, } from '@cosmos/web-scoped/react';
import type React from 'react';
import { useEffect, useRef } from 'react';
import isEmpty from 'lodash/isEmpty';

/**
 * @interface CustomAccordionItemProps
 * @property className The classes to add to the item
 * @property header The element to add to the header
 * @property children The element to add in the accordion children.
 * @property itemKey The id to give the key.
 * @property initialEntered A flag to indicate if the accordion item should initially be open.
 * @property disabled The flag to indicate if the item should be disabled.
 */
interface CustomAccordionItemProps {
    className?: string;
    header: React.ReactNode;
    children: React.ReactNode;
    itemKey?: string | number;
    initialEntered?: boolean;
    disabled?: boolean;
}

// Reference: https://szhsin.github.io/react-accordion/docs/headless-ui/accordion-item#height-transition
const CustomAccordionItem: React.FC<CustomAccordionItemProps> = ({
    className,
    header,
    children,
    itemKey,
    initialEntered,
    disabled,
}: CustomAccordionItemProps) => {
    const { itemRef, state, toggle } = useAccordionItemEffect<HTMLDivElement>({
        itemKey,
        initialEntered,
        disabled,
    });
    const { buttonProps, panelProps } = useAccordionItem({
        state,
        toggle,
        disabled,
    });

    const { status, isMounted, isEnter } = state;
    const contentRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    /**
     * This effect fixes the issue with the height animation
     */
    useEffect(() => {
        const updateHeight = () => {
            if (isEmpty(contentRef.current)) {
                return;
            }

            // Safely get panel height with fallback
            const panelHeight =
                panelRef.current?.getBoundingClientRect()?.height || 0;

            // Use requestAnimationFrame to ensure the DOM is fully updated
            requestAnimationFrame(() => {
                if (isEmpty(contentRef.current)) {
                    return;
                }
                contentRef.current.style.height = `${panelHeight}px`;
            });
        };

        // Call the height update function
        updateHeight();

        // Optionally, add a resize observer to handle dynamic content changes
        const resizeObserver = new ResizeObserver(updateHeight);
        if (panelRef.current) {
            resizeObserver.observe(panelRef.current);
        }

        // Cleanup the observer on unmount
        return () => {
            resizeObserver.disconnect();
        };
    }, [panelRef, contentRef, state]);

    return (
        <div className={`accordion-item ${className || ''}`} ref={itemRef}>
            <h3 style={{ margin: 0 }}>
                <button
                    className={`accordion-button ${isEnter ? 'buttonExpanded' : ''}`}
                    type="button"
                    {...buttonProps}
                >
                    {header}
                    {!isEnter && (
                        <CosmosIconChevronDown className={'accordion-icon'} />
                    )}
                    {isEnter && (
                        <CosmosIconChevronUp className={'accordion-icon'} />
                    )}
                </button>
            </h3>
            {isMounted && (
                <div className="accordion-content" ref={contentRef}>
                    <div
                        className="accordion-panel"
                        ref={panelRef}
                        {...panelProps}
                        style={{
                            display: status === 'exited' ? 'none' : undefined,
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomAccordionItem;
