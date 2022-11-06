import { useState } from "react";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Header = ({ type }) => {
  const [ondate, setOnDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });

  const [showDate, setshowDate] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleOption = (option, operation) => {
    setOptions((prevOption) => {
      return {
        ...prevOption,
        [option]:
          operation === "increase" ? options[option] + 1 : options[option] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div
        className={
          type !== "list" ? "header__container" : "header_Container listMode"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Booker App</h1>
            <p className="headerDesc">
              helloo welcome to the website you always wanted
            </p>
            <button className="headerBtn">Sign In/Register</button>
            <div className="headerSearchBar">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="where are you going?"
                  className="headerSearchInput"
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  className="handleSearchText"
                  onClick={() => setshowDate(!showDate)}
                >{`${format(ondate[0].startDate, "MM/dd/yyyy")} to ${format(
                  ondate[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>

                {showDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setOnDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={ondate}
                    className="date-picker"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="handleSearchText"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  {" "}
                  {`${options.adult} Adults ${options.children} Children ${options.rooms} Rooms`}
                </span>
                {showOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionOperations">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("adult", "decrease")}
                        >
                          -
                        </button>
                        <span className="optionCount">{options.adult}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("adult", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionOperations">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "decrease")}
                        >
                          -
                        </button>
                        <span className="optionCount">{options.children}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("children", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Rooms</span>
                      <div className="optionOperations">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterBtn"
                          onClick={() => handleOption("rooms", "decrease")}
                        >
                          -
                        </button>
                        <span className="optionCount">{options.rooms}</span>
                        <button
                          className="optionCounterBtn"
                          onClick={() => handleOption("rooms", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
