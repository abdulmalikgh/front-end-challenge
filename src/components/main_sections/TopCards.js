import React from 'react'
import RevenueChart from './RevenueChart'
export default function TopCards() {
    return (
        <div className="top_cards">
            <div className="card with_progress">
                <div className="top">
                    <p className="title">Sales</p>
                    <p className="description">Monthly Goal</p>
                </div>
                <div className="percentage">
                    <p className="bigger">98.1%</p>
                    <p className="smaller">+6.9%</p>
                </div>
                <div className="progress">
                    <div className="progress_inner">
                       
                    </div>
                </div>
                <div className="yearly-goal">
                    <p className="bigger">Yearly Goal</p>
                </div>
            </div>
            <div className="card with_progress revenue">
                <div className="top">
                    <p className="title">Revenue</p>
                    <p className="description">Total Profit</p>
                </div>
                <div className="percentage">
                    <p className="bigger">$13,893</p>
                    <p className="smaller">+11.3%</p>
                </div>
                <RevenueChart />
            </div>
            <div className="card with_progress">
                <div className="top">
                    <p className="title">Clients</p>
                    <p className="description">Subscribed</p>
                </div>
                <div className="percentage">
                    <p className="bigger">1,232</p>
                    <p className="smaller">+3.2%</p>
                </div>
                <div className="progress">
                   <div className="progress_inner">

                   </div>
                </div>
                <div className="yearly-goal">
                    <p className="">Yearly Goal</p>
                </div>
            </div>
        </div>
    )
}
