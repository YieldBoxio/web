import React, { useState } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


const YieldCount = () => {
    const [focus, setFocus] = useState(false);
    return (
        <div className="YieldCount-wrapper">
            <CountUp start={focus ? 100000 : null} end={117151970} duration={1} redraw={true}>
                {({ countUpRef }) => (
                    <div className='w-100 '>
                        <span className='rebase-count'><i class="fas fa-plus"></i></span>
                        <span className='rebase-count' ref={countUpRef} />
                        <VisibilitySensor
                            onChange={isVisible => {
                                if (isVisible) {
                                    setFocus(true);
                                }
                            }}
                        >
                            <span className='rebase-count'>%</span>
                        </VisibilitySensor>
                    </div>
                )}
            </CountUp>
        </div>
    )
}

export default YieldCount