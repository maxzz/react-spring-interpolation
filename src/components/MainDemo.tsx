import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import { interpolate } from "flubber";
import { GradientOrangeRed } from '@vx/gradient';

const paths = [
    'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
    'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
    'M7 2v11h3v9l7-12h-4l4-8z',
    'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'
];

type Props = {
    width?: string;
}

const MainDemo: React.FC<Props> = ({width = "100"}) => {
    const [index, setIndex] = useState(0);

    function goNext() {
        setIndex(i => i + 1 >= paths.length ? 0 : i + 1);
    }
    
    const { t } = useSpring<{t: number}>({
        t: index,
        // config: {
        //     duration: 400,
        // },
        onRest: goNext
    });

    const interpolator = interpolate(paths[index], paths[index + 1] || paths[0], { maxSegmentLength: 0.1 });

    return (
        <animated.svg width={width} viewBox="0 0 22 22">
            <GradientOrangeRed id="gradient" />
            <g fill="url(#gradient)">
                <animated.path d={t.interpolate(interpolator)} />
            </g>
        </animated.svg>
    );
};

const DemoSlot: React.FC = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Show</button>
            {visible && <MainDemo width="100" />}
        </div>
    );
};

export default DemoSlot;
