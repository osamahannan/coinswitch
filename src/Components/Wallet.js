import React from 'react'

const Wallet = () => {
    return (
        <div className="main-container">
            <div className="wallet-container">
                <div className="wallet">
                    <div className="wallet-coin-detail" >

                        <div className="wallet-info">
                            <img src="" className="coin-pic" alt="coin pic" />

                            <div className="coin-data">
                                <span className="coin-name">Bitcoin</span>
                                <span>btc</span>
                            </div>
                        </div>

                        <div className="coin-current">
                            <span> &#x20B9;251000</span>
                            <span>+2.25%</span>
                        </div>

                        <div className="wallet-edit">
                            <div className="dec-inc">
                                <i class="fas fa-plus"></i>
                                <span>10</span>
                                <i class="fas fa-minus"></i>
                            </div>

                            <div className="delete">
                                <i class="fas fa-trash"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet
