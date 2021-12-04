import React from 'react'
import money from '../../assets/images/money.svg'
import more from '../../assets/images/More.svg'
import profileRound from '../../assets/images/profile_roud.svg'
import DailyProfit from './DailyProfit'
export default function MiddleCards() {
    return (
        <div>
            <div className="middle_cards">
                <div className='totalSsales'>
                    <div className="_header">
                        <div className="title">
                            <button>
                                <img src={money} alt="" />
                            </button>
                            <div className='tatal_sales'>
                                <p className="total">
                                    Total Sales
                                </p>
                                <p className="amount">
                                    $965.56
                                </p>
                            </div>
                        </div>
                        <button className="side_icon">
                            <img src={more} alt="" />
                        </button>
                    </div>
                    <div className="body">
                        <div className="dognut">
                            
                        </div>
                        <div class="text">
                            <div className="number_top">
                                <p className="top number_top">
                                    $2,595
                                </p>
                                <p className="bottom">
                                    Invoiced
                                </p>
                            </div>
                            <div className="number_bottom">
                                <p className="top">
                                    23
                                </p>
                                <p className="bottom">
                                    Invoices
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className='profit'>
                        <div className="_header">
                            <p className="dailyProfittitle">
                            Daily Profit 
                            </p>    
                            <button className="side_icon">
                                <img src={more} alt="" />
                            </button>
                        </div> 
                        <div className="chart">
                            <div className="chart__inner">
                                 <DailyProfit />
                            </div>
                        </div>
                    </div>
            </div>

            <div className="middle_cards">
                <div className='profit'>
                    <div className="_header">
                        <p className="dailyProfittitle">
                            Daily Active Clients
                        </p>    
                        <button className="side_icon">
                            <img src={more} alt="" />
                        </button>
                    </div> 
                </div>
                <div className='totalSsales'>
                    <div className="_header">
                        <div className="title">
                            <button className="btn_yollow">
                                <img src={profileRound} alt="" />
                            </button>
                            <div className='tatal_sales'>
                                <p className="total">
                                    User Onboarding
                                </p>
                                <p className="onboarding">
                                     Q3 Goal: 8,000 User
                                </p>
                            </div>
                        </div>
                        <button className="side_icon">
                            <img src={more} alt="" />
                        </button>
                    </div>
                    <div className="body">
                        <div className="dognut">

                        </div>
                        <div class="text">
                            <div>
                                <p className="top">
                                    2,452
                                </p>
                                <p className="bottom">
                                    ONBOARDING
                                </p>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
