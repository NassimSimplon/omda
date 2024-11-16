import React, { lazy, useCallback, useState, Suspense } from "react";
import "./Navbar.css";

//Drop Down
const DestinationDropDown = lazy(() =>
  import("../DestinationDropDown/DestinationDropDown")
);

const Navbar = () => {
  //States
  const [isOpen, setIsOpen] = useState(false);

  //Destination
  const openDropDown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);


  return (
    <div className="navbar">
      <div className="top-bar">
        {/*  */}
 

        <div className="nav-tabs">
          <h1 className="log test">Logements</h1>
          <h1 className="exp test">Expériences</h1>
        </div>
        {/*  */}
        <div className="nav-footer">
          <h1>Mettre mon logement sur Airbnb</h1>

          <div className="glob">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              aria-hidden="true"
              display="block"
              style={{ height: "16px", width: "16px" }}
              viewBox="0 0 16 16"
            >
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25m1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.6 12.6 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07" />
            </svg>
          </div>
          <div className="user-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentcolor"
              strokeWidth="3"
              aria-hidden="true"
              display="block"
              overflow="visible"
              style={{ height: "16px", width: "16px" }}
              viewBox="0 0 32 32"
            >
              <path d="M2 16h28M2 24h28M2 8h28" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentcolor"
              aria-hidden="true"
              display="block"
              style={{ height: "32px", width: "32px" }}
              viewBox="0 0 32 32"
            >
              <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7m0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7" />
            </svg>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="search-bar">
        <div className="block" onClick={openDropDown}>
          <h2>Destination</h2>
          <span>Recherche une destination</span>
        </div>
        <div className="block">
          <h2>Arrivée</h2>
          <span>Quand ?</span>
        </div>
        <div className=" last-block">
          <div className="block">
            <h2>Arrivée</h2>
            <span>Quand ?</span>
          </div>

          <div className="icon-section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              strokeWidth="4"
              aria-hidden="true"
              display="block"
              overflow="visible"
              style={{ height: "16px", width: "16px" }}
              viewBox="0 0 32 32"
            >
              <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9" />
            </svg>
          </div>
        </div>
        <Suspense fallback={<>...loading</>}>
          {isOpen && <DestinationDropDown />}
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
