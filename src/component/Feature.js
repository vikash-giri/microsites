import React, {useState} from "react";
import FeatureApi from "./FeatureApi";

const Feature = () => {

   const [Data] = useState(FeatureApi)
  
  return (
    <>
      <div className="container-fluid feature">
        <div className="container">
          <div className="row">
            <h1 className="text-center pb-2">Feature</h1>
            {
              Data.map((curElem) =>{
                const {title, text} = curElem;
                return(
                  <div className="col-12 col-sm-6 col-md-4 col-xxl-4">
                    <div className="card text-dark bg-light pb-3">
                      <div className="card-header ">
                        <h5>{title}</h5>
                      </div>
                      <div class="card-body">
                        <p class="card-text">
                         {text}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
