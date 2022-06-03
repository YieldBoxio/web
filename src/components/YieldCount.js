import React, { useState } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


const YieldCount = () => {
    // const [focus, setFocus] = useState(false);
    return (
        <div className="YieldCount-wrapper">
            <CountUp 
              start={875.039}
              end={1171519.70}
              duration={2.75}
              separator=" "
              decimals={2}
              decimal=","
              prefix=""
              suffix="" 
            >
                {({ countUpRef }) => (
                    <div className='w-100 '>
                        <span className='rebase-count'><i class="fas fa-plus"></i></span>
                        <span className='rebase-count' ref={countUpRef} />
                        <VisibilitySensor
                            onChange={isVisible => {
                                if (isVisible) {
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