import './weather.styles.css';
import React, {useRef} from 'react';
import LatestWeatherComponent from '@pages/components/latest-weather/latest-weather.component';
import HistoricWeatherComponent from '@pages/components/historic-weather/historic-weather.component';
import CustomAccordionItem from '@pages/components/custom-accordion-item/custom-accordion-item.component';
import {Accordion} from '@szhsin/react-accordion';
import {useContainerQuery} from '@hooks/use-container-query.hook';
import {CosmosText} from '@cosmos/web-scoped/react';

const WeatherPage: React.FC<Record<string, never>> = () => {
    const sampleContainerRef = useRef<HTMLDivElement | null>(null);
    const {height: sampleContainerHeight} =
        useContainerQuery(sampleContainerRef);

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
            <div className="historic-weather-accordion-container">
                <Accordion>
                    <CustomAccordionItem header={accordionHeader}>
                        <HistoricWeatherComponent height={sampleContainerHeight + 'px'} inAccordion={true}/>
                    </CustomAccordionItem>
                </Accordion>
            </div>
            <div className="historic-weather-column-container">
                <HistoricWeatherComponent height={sampleContainerHeight + 'px'} />
            </div>
        </div>
    );
};

export default WeatherPage;