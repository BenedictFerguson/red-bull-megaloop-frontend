import './weather.styles.css';
import React, {useRef} from 'react';
import LatestWeatherComponent from '@pages/components/latest-weather/latest-weather.component';
import HistoricWeatherComponent from '@pages/components/historic-weather/historic-weather.component';
import CustomAccordionItem from '@pages/components/custom-accordion-item/custom-accordion-item.component';
import {Accordion} from '@szhsin/react-accordion';
import {useContainerQuery} from '@hooks/use-container-query.hook';
import {CosmosText} from '@cosmos/web-scoped/react';
import {useBreakpoint} from '@hooks/use-breakpoint.hook';

const WeatherPage: React.FC<Record<string, never>> = () => {
    const sampleContainerRef = useRef<HTMLDivElement | null>(null);
    const {height: sampleContainerHeight} =
        useContainerQuery(sampleContainerRef);

    const isMobile = useBreakpoint(768); // 👈 Use the hook (640px is sm breakpoint, 768px is the md breakpoint)

    const accordionHeader = (<CosmosText
        appearance="light"
        kind="subtle"
        size="x-small"
        spacing="none"
        weight="regular"
    >
        Historical Wind
    </CosmosText>)

    return (
        <div className="weather-container">
            <div ref={sampleContainerRef}>
                <LatestWeatherComponent />
            </div>
            {/* Conditionally render based on the breakpoint */}
            {isMobile ? (
                <div className="historic-weather-accordion-container">
                    <Accordion>
                        <CustomAccordionItem header={accordionHeader}>
                            <HistoricWeatherComponent height={sampleContainerHeight + 'px'} inAccordion={true}/>
                        </CustomAccordionItem>
                    </Accordion>
                </div>
            ) : (
                <div className="historic-weather-column-container">
                    <HistoricWeatherComponent height={sampleContainerHeight + 'px'} />
                </div>
            )}
        </div>
    );
};

export default WeatherPage;