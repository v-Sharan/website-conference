import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Card from "../UI/Card";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Objectives = [
  "To foster global competency among learners.",
  "To promote the use of recent technology in teaching and learning",
  "To promote research quest for learning excellence",
];

const Themes = [
  "Excellence in Teaching and Learning.",
  "Innovative Projects for Social Benefits",
  "Engineering Pedagogy and Psychology",
  "Promote research in STEM",
  "Innovative and foolproof evaluation of students’ performance.",
  "Use of modern tools in education to reach global standards and greater creativity",
];

const Outcomes = [
  "To apply strategies for improvement in self-governance, academic performance, and quality of education.",
  "To derive the road map for continuous improvement in teaching and research.",
  "To motivate and drive students’ to address societal problems through Projects and patents.",
];

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card shadow-xl carousel w-[60%] h-[50%]">
        <div className="carousel-item relative">
          <AutoPlaySwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label} className="flex justify-center">
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className="h-[50%] block max-w-[80] overflow-hidden rounded-xl w-[100%]"
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              className="btn btn-circle btn-outline"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <MdNavigateBefore />
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <MdNavigateNext />
            </button>
          </div>
        </div>
      </div>
      <h1 className="mt-12 font-semibold text-3xl lg:text-6xl sm:text-4xl md:text-5xl text-[#585ef9]">
        About the seminar
      </h1>
      <p className="mt-11 text-[20px] md:text-xl sm:text-2xl text-gray-700">
        The seminar aims to discuss and investigate the strategies for Quality
        Improvement in Higher Educational Institutions
      </p>
      <div className="mt-20 flex gap-[2em] flex-wrap sm:items-center">
        <Card>
          <h1 className="card-title text-[#585ef9]">Objectives</h1>
          <ul className="text-gray-700">
            {Objectives.map((obj, index) => (
              <li key={`${index}`}>•&nbsp;{obj}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h1 className="card-title text-[#585ef9]">Important Date</h1>
          <div className="flex flex-col gap-4 text-gray-700">
            <div className="text-gray-700">
              <p>
                Last Date to Register:
                <span className="font-sans">25.03.2023</span>
              </p>
              <p>
                Date of Intimation:
                <span className="font-sans">28.3.2023</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-3 flex gap-[2em] flex-wrap">
        <Card>
          <h1 className="card-title text-[#585ef9]">Themes</h1>
          <ul className="text-gray-700">
            {Themes.map((obj, index) => (
              <li key={`${index}`}>•&nbsp;{obj}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h1 className="card-title text-[#585ef9]">Expected Outcome</h1>
          <ul className="text-gray-700">
            {Outcomes.map((obj, index) => (
              <li key={`${index}`}>•&nbsp;{obj}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Home;
