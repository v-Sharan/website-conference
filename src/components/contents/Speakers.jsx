import React from "react";

const Speaker = [
  {
    name: "Dr. Edamana Prasad",
    title: "Excellence in Teaching and Learning",
    department: "Professor, Department of Chemistry",
    institute:
      "Head/ Teaching Learning Process in Higher Education Sector Indian Institute of Technology, Madras",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/c_scale,h_564,w_557/v1678706709/Edamana_zs0qsp.jpg",
  },
  {
    name: "Dr.M.G. Sethuraman,",
    title: "Innovative Projects for Social Benefits",
    department: "Professor, Department of Chemistry",
    institute:
      "The Gandhigram Rural Institute-Deemed to be University, Dindigul, Tamil Nadu.",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/v1678706709/Sethuraman_qctuww.jpg",
  },
  {
    name: "Dr. S Renukadevi,",
    title:
      "Eational Institute of Technical Teachers Training and Research, Chennai",
    department: "Professor",
    institute:
      "National Institute of Technical Teachers Training and Research, Chennai",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/v1678706709/Renukadevi_aua2fx.jpg",
  },
  {
    name: "Dr.K.Ramar",
    title:
      "Enriching Research Methodologies, Effective Journal Publications and Proposal Drafting",
    department: "Principal",
    institute:
      "R.M.K. College of Engieering and Technology, Puduvoyal, Thiruvallur",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/v1678706710/RAMAR_mo2eup.png",
  },
  {
    name: "Dr.K.Mourougayane",
    title: "Recent Research Trends",
    department:
      "Programme Director (Projects),,Scientist F, HoD DSP & EP Divisions,",
    institute: "SAMEER - Centre for Electromagnetics, Chennai",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/v1678706709/Mourougayane_htbipa.jpg",
  },
  {
    name: "Dr. P.SHANMUGAVADIVU",
    title: "Impacts of Project Based Learning in Engineering Education",
    department: "Professor Dept. of Computer Science & Applications",
    institute: "Gandhigram Rural Institute – Deemed University",
    photo:
      "https://res.cloudinary.com/dfje97i0k/image/upload/v1678112872/hfahwxe6xone19ou4sfe.png",
  },
];

const Speakers = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {Speaker.map((person) => (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={person.photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{person.name}</h2>
            <p>{person.department}</p>
            <p>{person.institute}</p>
            <h2 className="card-title">Title:&nbsp;{person.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Speakers;
