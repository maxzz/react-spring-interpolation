import React from 'react';
import { Spring, config, animated } from 'react-spring/renderprops'

function Demo3DRotation() {
    const [visible, setVisible] = React.useState(false);
    const [showProps, setShowProps] = React.useState(true);
    const demoBkg = React.useRef<HTMLDivElement>(null);

    return (
        <div className="m-4" style={{ transformStyle: 'preserve-3d', perspective: '50px' }}>
            <button
                className="px-2 py-1 border rounded text-gray-100 hover:bg-gray-500 "
                onClick={() => setVisible(!visible)}>{`${visible ? 'Hide' : 'Show'} render props interpolations`}
            </button>

            <div className="my-2">
                <label className="flex items-center text-sm text-gray-400">
                    <input
                        type="checkbox" 
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 checked:border-gray-100  border-gray-100 rounded bg-gray-400"
                        defaultChecked={showProps} 
                        onClick={() => setShowProps(!showProps)}
                    />
                    <span className="ml-2">Show props during animation</span>
                </label>
            </div>

            {visible && <div className="pt-4 flex justify-center relative">
                <Spring
                    from={{
                        width: 100,
                        padding: 0,
                        background: 'linear-gradient(to right, #30e8bf, #ff8235)',
                        transform: 'translate3d(100px,0,0) scale(2) rotateX(90deg)',
                        boxShadow: '0px 100px 150px -10px white',
                        borderBottom: '134px solid red',
                        shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z',
                        textShadow: '0px 5px 0px white',
                        color: 'blue',
                        number: 2000,
                    }}
                    to={{
                        width: 500, //'auto'
                        padding: 20,
                        background: 'linear-gradient(to right, #009fff, #ec2f4b)',
                        transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
                        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.4)',
                        borderBottom: '0px solid #e5e7eb',
                        shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
                        textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
                        color: 'yellow',
                        number: 0,
                    }}
                    config={(key: string) => {
                        switch (key) {
                            //case 'color': return {...config.slow, delay: 400};
                            case 'color': return { duration: 2000 };
                            case 'number': return { delay: 1000, duration: 2000 };
                            case 'boxShadow': return { duration: 2000 };
                            case 'borderBottom': return { delay: 2000 };
                            default: return config.default;
                        }
                    }}
                    onRest={() => {
                        if (demoBkg.current) {
                            demoBkg.current.style.backgroundColor = 'black';
                        }
                        console.log('Done', demoBkg)}}
                >
                    {props => {
                        //console.log(props);
                        return (<>
                            <animated.div
                                style={{
                                    boxShadow: props.boxShadow,
                                    width: props.width,
                                    borderBottom: props.borderBottom,
                                    color: props.color,
                                    transform: props.transform,
                                }}
                                className="h-40 bg-red-800 flex items-center justify-center"
                                ref={demoBkg}
                            >
                                <animated.span className="c"> {`${!props.number ? 'Ready' : ''}`} {props.number ? props.number.toFixed(0) : ''}</animated.span>
                                {showProps && <div className="absolute top-0 left-0 text-green-300">
                                    <animated.pre className="pointer-events-none" style={{ fontSize: '8px' }}>{JSON.stringify(props, null, 4)}</animated.pre>
                                </div>}
                            </animated.div>
                        </>)
                    }}
                </Spring>
            </div>}
        </div>
    );
}

export default Demo3DRotation;
