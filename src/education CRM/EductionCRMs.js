import React from "react";
import auto from "../assets/images/1.png";
import addmi from "../assets/images/2.png";
import istidash from "../assets/images/3.png";
import uniuser from "../assets/images/4.png";
import effi from "../assets/images/5.png";
import cmplat from "../assets/images/6.png";
const EductionCRMs = () => {
  return (
    <>
      <div className="container-fluid eduction-crm">
        <h2 className="text-center pb-5">Educational CRM</h2>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-xxl-4">
              <img src={auto} className="img-fluid" alt="autometed" />
              <h4>Automated System</h4>
              <p>
                It facilitates one database for all the information that solve
                the problems of maintaining vast records and eliminate multiple
                sheets.{" "}
              </p>
            </div>
            <div className="col-12 col-md-4 col-xxl-4">
              <img src={addmi} className="img-fluid" alt="autometed" />
              <h4 >Admission Management</h4>
              <p>
                CRM helps in bringing all major activities related to the
                admission, monitoring lead pipeline and follow-up together in a
                systematic way.{" "}
              </p>
            </div>
            <div className="col-12 col-md-4 col-xxl-4">
              <img src={istidash} className="img-fluid" alt="autometed" />
              <h4>Insightful Dashboard</h4>
              <p>
                CRM facilitates informative analytics and zero error tracking on
                the dashboard that helps to take productive decisions. Access
                data in customized reporting section.{" "}
              </p>
            </div>
            </div>
            <div className="row rowsecound">
            <div className="col-12 col-md-4 col-xxl-4">
              <img src={uniuser} className="img-fluid" alt="autometed" />
              <h4>Uniform User Experience</h4>
              <p>
                CRM provides a single point of contact for dissemination of
                information and gives consistent user experience to all parties.{" "}
              </p>
            </div>
            <div className="col-12 col-md-4 col-xxl-4">
              <img src={effi} className="img-fluid" alt="autometed" />
              <h4>Efficiency</h4>
              <p>
                It facilitates coordinating and scheduling all tasks eliminating
                duplication of work on multiple excel sheets and brings accurate
                results.{" "}
              </p>
            </div>
            <div className="col-12 col-md-4 col-xxl-4">
              <img src={cmplat} className="img-fluid" alt="autometed" />
              <h4>Communication platform</h4>
              <p>
                It becomes a synchronized platform to access customer data in
                real-time and initiate communication to all the parties and
                never miss a lead.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EductionCRMs;
