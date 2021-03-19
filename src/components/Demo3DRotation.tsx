import React from 'react';
import { Spring, config } from 'react-spring/renderprops'

function Demo3DRotation() {
    const [visible, setVisible] = React.useState(false);

    const delay: any = (key: string) => {
        switch (key) {
            case 'color': return 2000;
            default: return 0;
        }
    };

    return (
        <div className="m-4">
            <button className="px-2 py-1 border rounded text-gray-100 hover:bg-gray:500" onClick={() => setVisible(!visible)}>{`${visible ? 'Hide' : 'Show'} render props interpolations`}</button>
            {visible && <div className="pt-4">
                <Spring
                    from={{
                        width: 300,
                        padding: 0,
                        background: 'linear-gradient(to right, #30e8bf, #ff8235)',
                        transform: 'translate3d(400px,0,0) scale(2) rotateX(90deg)',
                        boxShadow: '0px 100px 150px -10px #2D3747',
                        borderBottom: '50px solid white',
                        shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z',
                        textShadow: '0px 5px 0px white',
                        color: 'blue',
                    }}
                    to={{
                        width: 200, //'auto'
                        padding: 20,
                        background: 'linear-gradient(to right, #009fff, #ec2f4b)',
                        transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
                        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.4)',
                        borderBottom: '1px solid #2D3747',
                        shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
                        textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
                        color: 'yellow',
                    }}
                    delay={delay}
                    config={(key: string) => {
                        switch (key) {
                            case 'color': return {...config.slow, delay: 400};
                            default: return config.default;
                        }
                    }}
                >
                    {props => <div
                        style={{
                            boxShadow: props.boxShadow,
                            width: props.width,
                            borderBottom: props.borderBottom,
                            color: props.color,
                        }}
                        className="w-10 h-10 border rounded-md bg-red-400 flex items-center justify-center"
                    >
                        <span className="c">Lets go</span>
                    </div>}
                </Spring>                
            </div>}
        </div>
    );
}

export default Demo3DRotation;
