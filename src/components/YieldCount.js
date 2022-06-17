import React, { useState } from "react";
// import CountUp from "react-countup";             
import VisibilitySensor from "react-visibility-sensor";
import CountUp, { useCountUp } from 'react-countup';

const YieldCount = () => {
  // const [focus, setFocus] = useState(false);

  // useCountUp({ ref: 'counter', end: 10, duration: 2 });
  // const [loading, setLoading] = React.useState(false);

  // const onStart = () => {
  //   setLoading(true);
  // };

  // const onEnd = () => {
  //   setLoading(false);
  // };

  // const containerProps = {
  //   'aria-busy': loading,
  // };

  return (
    <div className="YieldCount-wrapper">
      <CountUp
        start={1171119}
        end={1171519.7}
        duration={1.75}
        separator=" "
        decimals={2}
        decimal=","
        prefix=""
        suffix=""
      >
        {({ countUpRef }) => (
          <div className="w-100 ">
            <span className="rebase-count">
              <i class="fas fa-plus"></i>
            </span>
            <span className="rebase-count" ref={countUpRef} />
            <VisibilitySensor
              onChange={(isVisible) => {
                if (isVisible) {
                }
              }}
            >
              <span className="rebase-count">%</span>
            </VisibilitySensor>
          </div>
        )}
      </CountUp>

      {/* <CountUp
        end={123457}
        duration="3"
        onStart={onStart}
        onEnd={onEnd}
        containerProps={containerProps}
      />
      <div id="counter" aria-busy={loading} /> */}
    </div>
  );
};

export default YieldCount;
