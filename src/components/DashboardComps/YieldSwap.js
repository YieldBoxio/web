import React from 'react';
import { GasSvg, RecentSvg, Setting, ChangeSwap, ExchangeGraphSvg, PaymentVisaSvg, PaymentMasterCardSvg } from './DashSVGS';

const YieldSwap = () => {
    return (
        <>
            <div className='col-lg-6 col-md-6 col-sm-12 mx-lg-auto py-lg-4 mx-auto'>
                <h2>Swap</h2>
                <div className='Dashboard-full-card'>
                    <div className='row m-0'>
                        <div className='col-6'>
                            <div className='swap-box-header'>
                                <p>BogSwap DEX Aggregator</p>
                                <small>Get the best price possible from 15 DEXs</small>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='swap-modals'>
                                <GasSvg />
                                <RecentSvg />
                                <Setting />
                            </div>
                        </div>
                    </div>
                    {/* End Header */}
                    <div className='swap-box-wrpper'>
                        <div className='swap-box'>
                            <p>From</p>
                            <div className='d-flex'>
                                <div className='col-8'>
                                    <input placeholder='0.00' className='swap-input' />
                                </div>
                                <div className='col-4 swap-box-right'>
                                    <p className='swap-wallet-blance'>Balance: 0 BNB</p>
                                    <div className='d-flex swap-action'>
                                        <p>Max</p>
                                        <select className='connect-yeild-btn'>
                                            <option>BNB</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='change-swap-arrow'>
                            <ChangeSwap />
                        </div>
                        <div className='swap-box'>
                            <p>To</p>
                            <div className='d-flex'>
                                <div className='col-8'>
                                    <input placeholder='0.00' className='swap-input' />
                                </div>
                                <div className='col-4 swap-box-2ndright'>
                                    <div className='d-flex swap-action'>
                                        <select className='connect-yeild-btn'>
                                            <option>$MINT</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='swap-wallet-btn my-4'>
                            <button className='connect-yeild-btn'>Connect Wallet</button>
                        </div>
                        <div className='swap-box swap-summary'>
                            <p>Summary</p>
                            <div className='calculator-days-row'>
                                <p>BNB Price:</p>
                                <p>$329.24</p>
                            </div>
                            <div className='calculator-days-row'>
                                <p>$MINT Price:</p>
                                <p>$0.26001</p>
                            </div>
                        </div>
                        <div className='row m-0 yeidl-buy-vs-swap'>
                            <button className='connect-yeild-btn Exchan-geGraph-Svg'>BNB: <ExchangeGraphSvg /> </button>
                            <button className='connect-yeild-btn Exchan-geGraph-Svg'>$MINT: <ExchangeGraphSvg /></button>
                            <button className='connect-yeild-btn'>Buy BNB: <PaymentVisaSvg /> <PaymentMasterCardSvg /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YieldSwap