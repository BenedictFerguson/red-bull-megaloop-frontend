import './weather.styles.css';
import React, {Fragment, useRef} from 'react';
import LatestWeatherComponent from '@pages/components/latest-weather/latest-weather.component';
import HistoricWeatherComponent from '@pages/components/historic-weather/historic-weather.component';
import CustomAccordionItem from '@pages/components/custom-accordion-item/custom-accordion-item.component';
import { Accordion} from '@szhsin/react-accordion';
import { useContainerQuery } from '@hooks/use-container-query.hook';
import { CosmosButton } from '@cosmos/web-scoped/react';
import { useBreakpoint } from '@hooks/use-breakpoint.hook';
import { useAppStore } from '@stores/app/app.store';
import { AppState } from '@stores/app/app.state';

const WeatherPage: React.FC<Record<string, never>> = () => {
    const sampleContainerRef = useRef<HTMLDivElement | null>(null);
    const { height: sampleContainerHeight } =
        useContainerQuery(sampleContainerRef);
    const theme = useAppStore((state: AppState) => state.theme);
    const isMobile = useBreakpoint(768); // 👈 Use the hook (640px is sm breakpoint, 768px is the md breakpoint)

    const accordionHeader = (
        <CosmosButton
        kind="secondary"
        size="small"
        shape="rectangle"
        >
        Show History
    </CosmosButton>)

    return (
        <div className="weather-container">
            {/* Conditionally render based on the breakpoint */}
            { isMobile ? (
                <div className="historic-weather-accordion-container">
                    <div className={`mobile-weather-container ${theme}`}>
                        <LatestWeatherComponent additionalClasses="is-mobile" />
                        <Accordion>
                            <CustomAccordionItem>
                                <HistoricWeatherComponent height={'50vh'} inAccordion={true}/>
                            </CustomAccordionItem>
                        </Accordion>
                    </div>
                </div>
            ) : (
                <Fragment>
                    <div ref={sampleContainerRef}>
                        <LatestWeatherComponent />
                    </div>
                    <div className="historic-weather-column-container">
                        <HistoricWeatherComponent height={sampleContainerHeight + 'px'} />
                    </div>
                </Fragment>

            )}
        </div>
    );
};

export default WeatherPage;