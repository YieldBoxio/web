import React from 'react';
import Zoom from "react-reveal/Zoom";
import { Button } from "react-bootstrap";

const ClaimReward = () => {
    return (
        <>
            <h2>Claim Reward</h2>
            <Zoom>
                <div className='Dashboard-card-wrapper row m-0'>
                    {/* <Row className='w-100'> */}
                    <div className='Dashboard-card'>
                        <p>$YLD Price</p>
                        <h5>$ 2.50</h5>
                    </div>
                    <div className='Dashboard-card'>
                        <p>current APY</p>
                        <h5>385,945.8%</h5>
                    </div>
                    <div className='Dashboard-card'>
                        <p>Your $YLD Balance</p>
                        <h5>0 $ MINT</h5>
                    </div>
                    <div className='Dashboard-card'>
                        <p>Reward Not Claimed</p>
                        <h5>0 BUSD</h5>
                        <Button className="connect-yeild-btn">
                            Claim Manually
                        </Button>
                    </div>
                </div>
            </Zoom>
            <div className='Dashboard-full-card mt-5'>
                <div className='row w-100 m-0'>
                    <div className='col-lg-6 calculator-column'>
                        <h6>$ YLD Amount</h6>
                        <div className='calculator-input-div'>
                            <input className='' placeholder='0' />
                            <span>current</span>
                        </div>
                    </div>
                    <div className='col-lg-6 calculator-column'>
                        <h6>$ YLD Amount</h6>
                        <div className='calculator-input-div'>
                            <input placeholder='0' />
                            <span>current</span>
                        </div>
                    </div>
                    <div className='col-lg-6 calculator-column pt-2'>
                        <h6>$ YLD  price at purchase ($)</h6>
                        <div className='calculator-input-div'>
                            <input className='' placeholder='0' />
                            <span>current</span>
                        </div>
                    </div>
                    <div className='col-lg-6 calculator-column pt-2'>
                        <h6>Future $YLD Market price ($)</h6>
                        <div className='calculator-input-div'>
                            <input placeholder='0' />
                            <span>current</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Dashboard-full-card mt-5'>
                <div className='calculator-days-row'>
                    <p>Current Yieldbox price</p>
                    <p>$0</p>
                </div>
                <div className='calculator-days-row'>
                    <p>Next Rebase</p>
                    <p>00:11:16</p>
                </div>
                <div className='calculator-days-row'>
                    <p>Next Reward Amount USD</p>
                    <p>$0</p>
                </div>
                <div className='calculator-days-row'>
                    <p>Next Reward Yield</p>
                    <p>0.02355%</p>
                </div>
                <div className='calculator-days-row'>
                    <p>ROI(1-Day Rate)USD</p>
                    <p>$0</p>
                </div>
                <div className='calculator-days-row'>
                    <p>ROI(5-Day Rate)</p>
                    <p>11.5%</p>
                </div>
                <div className='calculator-days-row'>
                    <p>ROI(5-Day Rate)USD</p>
                    <p>$0</p>
                </div>
            </div>
        </>
    )
}

export default ClaimReward