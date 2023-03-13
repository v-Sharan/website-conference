import React from "react";
import Card from "../UI/Card";

const chiefPatrons = [
  "Thiru. R.S.Munirathinam, Founder Chairman",
  "Tmt. Manjula Munirathiam, Chair Person",
  "Thiru. R.Jothi Naidu, Director",
  "Thiru. R.M.Kishore B.E., MBA(UK), Vice Chairman",
  "Thiru. Yalamanchi Pradeep BE, MS, Secretary",
  "Dr.Durgadevi Pradeep B.E., MBA, Ph.D, Vice Chairperson",
  "Tmt. Sowmya Kishore B.E., Management Trustee",
  "Dr.M.S.Palanichamy, Advisor",
  "Shri. T.Pitchandi, IAS (Rtd.), Advisor",
  "Shri. V.Manoharan, Advisor",
];

const Patrons = [
  "Dr.K.Ramar, M.E., Ph.D., FIE., Principal",
  "Dr.K.Sivaram, M.Tech., Ph.D., Dean Research",
];

const Coordinators = [
  "Dr. Chettiyar Vani Vivekanand, ASP/ECE, IQAC Coordinator",
  "Dr.T.G.Loganathan, Prof/Mechanical Dept of Engg., NAAC Coordinator",
  "Dr.G.Devi, ASP/Physics, ISO Coordinato",
];

const Co_Coordinators = [
  "Dr. T.J Catherine, ASP/EEE",
  "Ms. S.Seshavidhya,ASP/ECE",
  "Ms. J Gnana Jeslin, AP/CSE",
  "Ms. A. Akila, AP/AIDS",
  "Dr.M.Meganathan, AP/S & H",
];

const Committee = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div className="card shadow-xl text-[10px] md:text-[1em] md:w-[60%] sm:text-[16px] sm:w-[90%] bg-base-100 mx-auto p-3">
        <div className="mt-5 flex justify-center gap-[2em]">
          <div className="ml-4 my-2">
            <h1 className="card-title text-[#585ef9] mb-2">Chief Patrons:</h1>
            <ul>
              {chiefPatrons.map((obj) => (
                <li>•&nbsp;{obj}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="">
              <h1 className="card-title text-[#585ef9] mb-2">Patrons:</h1>
              <ul>
                {Patrons.map((obj) => (
                  <li>•&nbsp;{obj}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-xl w-[80%] text-[10px] md:text-[1em] md:w-[60%] sm:text-[16px] sm:w-[90%] bg-base-100 mx-auto p-3">
        <div className="mt-5 flex justify-center gap-[2em]">
          <div className="ml-4 my-2">
            <h1 className="card-title text-[#585ef9] mb-2">Coordinators:</h1>
            <ul>
              {Coordinators.map((obj) => (
                <li>•&nbsp;{obj}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="">
              <h1 className="card-title text-[#585ef9] mb-2">Co-Coordinators:</h1>
              <ul>
                {Co_Coordinators.map((obj) => (
                  <li>•&nbsp;{obj}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
