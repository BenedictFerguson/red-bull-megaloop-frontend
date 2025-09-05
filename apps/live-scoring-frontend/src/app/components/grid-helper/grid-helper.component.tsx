import './grid-helper.styles.css';

export type GridHelperProps = {
    shouldDisplay: boolean;
};

const GridHelper: React.FC<GridHelperProps> = ({
    shouldDisplay,
}: GridHelperProps) => {
    if (!shouldDisplay) return null;

    return (
        <div className="grid-helper">
            <div className="rbx-grid-helper__container">
                <div className="rbx-grid-helper__outer-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__inner-gutter" />
                <div className="rbx-grid-helper__column" />
                <div className="rbx-grid-helper__outer-gutter" />
            </div>
        </div>
    );
};

export default GridHelper;
