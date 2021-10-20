import React from 'react'
import ticks from "../assets/images/Ticks.png";
const Whocan = () => {
    return (
      <>
        <div className="container-fluid uses">
          <div className="container">
            <h3 className="text-center">Who can use it</h3>
            <p>
              <img src={ticks} className="img-fluid" alt="check" />
              <span className="ml-3">
                Educational Institutes (schools,colleges and universities) for
                test registrations
              </span>
            </p>
            <p>
              <img src={ticks} className="img-fluid" alt="check" />
              <span className="ml-3">
                Government Organizations for competitive exams
              </span>
            </p>
            <p>
              <img src={ticks} className="img-fluid" alt="check" />
              <span className="ml-3">
                Companies in banking and insurance sector for exam registrations
              </span>
            </p>
          </div>
        </div>
      </>
    );
}

export default Whocan
