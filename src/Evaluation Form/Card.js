import React, {useState} from 'react'
import CardApi from './CardApi';
const Card = () => {

    const [card, setcard] = useState(CardApi)
    return (
      <>
        <div className="container-fluid">
          <div className="firstdiv float-left"></div>
          <div className="lastdiv float-right"></div>
          <div className="container">
            <div className="row cards">
              {card.map((curElem) => {
                const { heading, title, description } = curElem;
                return (
                  <div className="col-12 col-sm-6 col-md-3 col-xxl-3 py-3">
                    <div className="card py-1">
                      <div className="card-body">
                        <h2 className="card-title">{heading}</h2>
                        <h6 className="card-subtitle mb-3 ">{title}</h6>
                        <p className="card-text">{description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="text-center colle">
              "Collect Information seamlessly"
            </h3>
          </div>
        </div>
      </>
    );
}

export default Card
