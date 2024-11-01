import React, { useMemo } from 'react';

import './index.css';

type SectionBackgroundProps = {
    color: 'green' | 'yellow';
};

const SectionBackground = ({ color }: SectionBackgroundProps) => {
    const colorClass = useMemo(() => {
        if (color === 'green') {
            return 'background-green';
        }
        if (color === 'yellow') {
            return 'background-yellow';
        }
    }, [color]);

    return <div className={`section-background ${colorClass}`} />;
};

export default SectionBackground;
