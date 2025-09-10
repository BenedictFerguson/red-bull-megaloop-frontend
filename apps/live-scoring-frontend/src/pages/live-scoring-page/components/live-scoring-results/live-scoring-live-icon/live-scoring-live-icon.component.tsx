import type React from 'react';
import './live-scoring-live-icon.styles.css';

/**
 * @interface LiveScoringLiveIconProps
 * @property {string} className Additional tailwind classes to apply
 */
interface LiveScoringLiveIconProps {
    className?: string;
}

const LiveScoringLiveIcon: React.FC<LiveScoringLiveIconProps> = ({
    className,
}) => {
    return (
        <div className={`live-scoring-live-icon-container ${className}`}>
            <div className="live-scoring-live-icon-dot">
                <div className="live-scoring-live-icon-pulse" />
            </div>
        </div>
    );
};

export default LiveScoringLiveIcon;
