import React from 'react'
import ticks from "../assets/images/Ticks.png"
const WhatitDO = () => {
    return (
        <>
        <div className="container whatit-wrap">
            <h3>What it Does?</h3>
            <p>
            <img src={ticks} className="img-fluid" alt="ticks"/>
                    <span className="ml-3">Automated online tool designed to process personal
                        information of huge pool of candidates for  </span>
            </p>
                <p>
                    <img src={ticks} className="img-fluid" alt="ticks" />
                    <span className="ml-3">Automated online tool designed to process personal
                        information of huge pool of candidates for  </span>
                </p>
                <p>
                    <img src={ticks} className="img-fluid" alt="ticks" />
                    <span className="ml-3">Automated online tool designed to process personal
                        information of huge pool of candidates for  </span>
                </p>
                <p>
                    <img src={ticks} className="img-fluid" alt="ticks" />
                    <span className="ml-3 mb-4">Automated online tool designed to process personal
                        information of huge pool of candidates for  </span>
                </p>
            </div>
        </>
    )
}

export default WhatitDO
