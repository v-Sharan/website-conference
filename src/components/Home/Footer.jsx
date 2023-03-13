import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="about" className="link link-hover">
          About us
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 122.88 88.86"
              className="fill-current"
            >
              <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />{" "}
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1000 1000"
              className="fill-current"
            >
              <path d="M906.6,623.6L747.9,542c-38.9-20-89.1-13.2-121.3,16.4l-18.6,17c-18,16.5-46,20.4-67.8,9.1c-54.1-27.9-97.4-71.2-125.3-125.2c-11.4-22.2-7.8-49.4,9.1-67.7l17-18.5c18.2-19.8,28.2-45.5,28.2-72.4c0-16.9-4.1-33.8-11.9-48.9L375.8,93.2C349.4,41.9,297.2,10,239.6,10c-33.9,0-66,10.8-92.8,31.3L98.5,78.2c-75.8,57.8-107,157.5-77.6,248.2C118.8,628,355.8,871.3,655.1,977.1c24.2,8.6,49.4,12.9,75.1,12.9c59.9,0,118.4-24.4,160.4-66.9l55.3-55.9c28.5-28.9,44.3-67,44.3-107.5C990,702.1,958.1,650,906.6,623.6z M880.3,802.7l-55.2,55.9c-35.5,35.9-91.6,48.9-139.4,31.9C413.2,794.2,197.4,572.7,108.3,298c-17.4-53.7,1-112.7,45.9-146.9l48.3-36.8c10.7-8.1,23.5-12.5,37-12.5c23,0,43.9,12.8,54.5,33.4l81.6,158.6c1.1,2.1,1.7,4.5,1.7,6.9c0,4.9-2.2,8.3-4.1,10.3l-17,18.5c-42.8,46.5-52.1,115.6-23.1,171.9c36.6,71.1,93.7,128.1,164.9,164.8c55.3,28.5,126.3,18.9,172-23.1l18.6-17c3-2.8,10.8-5.6,17.2-2.4l158.7,81.6c20.6,10.6,33.4,31.5,33.4,54.5C898.1,775.9,891.8,791.1,880.3,802.7z" />
            </svg>
          </Link>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright @ RMKCET</p>
      </div>
    </footer>
  );
};

export default Footer;