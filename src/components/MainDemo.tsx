import React, { useState } from "react";
import { useSpring, animated, AnimatedValue } from 'react-spring';
import { interpolate } from "flubber";

const MainDemo: React.FC = () => {
    const [paths, setPaths] = useState([
        'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
        'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
        'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
        'M7 2v11h3v9l7-12h-4l4-8z',
        'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'
    ]);
    const [index, setIndex] = useState(0);

    function goNext() {
        console.log('1');
        setIndex(i => i + 1 >= paths.length ? 0 : i + 1);

        //setTimeout(() => setIndex(i => i + 1 >= paths.length ? 0 : i + 1), 4000);
    }

    /*
    const [ { t } ] = useSpring<{t: number}>(() => ({
        from: {
            t: 0,
        },
        to: {
            t: 1,
        },
        //onRest: goNext
    }));
    */
    /*
    const { t } = useSpring({
        from: {
            t: 0,
        },
        to: {
            t: 1,
        },
        //onRest: goNext
    }) as { t: any };
    */
    // const aa = useSpring({
    //     from: {
    //         t: 0,
    //     },
    //     to: {
    //         t: 1,
    //     },
    //     config: {
    //         duration: 10000,
    //     },
    //     //onRest: goNext
    // });
    const aa = useSpring({
        t: index,
        //onRest: goNext
    });


    const { t } = aa as { t: any };

    console.log(aa);
    


    const interpolator = interpolate(paths[index], paths[index + 1] || paths[0], { maxSegmentLength: 0.1 });

    return (
        <animated.svg width="500" viewBox="0 0 22 22">
                    {/* <div>aa</div> */}
            {/* <Gradient id="gradient" /> */}
            {/* <g fill="url(#gradient)"> */}
{/* 
            <Spring reset native from={{ t: 0 }} to={{ t: 1 }} onRest={goNext}>
                {({ t }: {t: any}) => <animated.path d={t.interpolate(interpolator)} />}
            </Spring>
 */}
    
            <animated.path d={t.interpolate(interpolator)} />

            {/* </g> */}
        </animated.svg>
    );
};

export default MainDemo;
