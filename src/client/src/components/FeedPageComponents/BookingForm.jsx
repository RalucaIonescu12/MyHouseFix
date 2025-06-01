import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./BookingFormStyle.css";

const BookingForm = ({ onBack, post }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState ("");
    const [address, setAddress] = useState ("");
    const [description, setDescription] = useState("");
    const [showNoAvailability, setShowNoAvailability] = useState(false);
    const today = new Date();
    const [availableDates, setAvailableDates] = useState([]);
    const [availableHours, setAvailableHours] = useState([]);
    const [availableWeekDays, setAvailableWeekDays] = useState([]);
    const [disabledHours, setDisabledHours] = useState([]);

    useEffect(() => {

        setSelectedDate(null);
        setSelectedHour("");
        setShowNoAvailability(false);
        setAddress("");
        setDescription("");

        if (post?.availability) {
            const availability = post.availability;

            const daysString = availability.split(",")[0].trim();
            const hourRange = availability.split(",")[1].trim();

            const dayMap = {
                "Luni": 1,
                "Marți": 2,
                "Miercuri": 3,
                "Joi": 4,
                "Vineri": 5,
                "Sâmbătă": 6,
                "Duminică": 0,
            };


            const days = daysString === "Luni - Duminică"
                ? [1, 2, 3, 4, 5, 6, 0]
                : daysString.includes("-")
                ? (() => {
                    const [start, end] = daysString.split("-").map(s => s.trim());
                    const startIdx = dayMap[start];
                    const endIdx = dayMap[end];
                    let daysArr = [];
                    for (let i = startIdx; i !== (endIdx + 1) % 7; i = (i + 1) % 7) {
                        daysArr.push(i);
                    }
                    daysArr.push(endIdx);
                    return daysArr;
                })()
                : [dayMap[daysString]];

            setAvailableWeekDays(days);


            const dates = [];
            const current = new Date();
            for (let i = 0; i < 90; i++) {
                const date = new Date();
                date.setDate(current.getDate() + i);
                if (days.includes(date.getDay())) {
                    dates.push(new Date(date));
                }
            }


            const shuffled = [...dates].sort(() => 0.5 - Math.random());
            const half = shuffled.slice(0, Math.floor(shuffled.length / 2));

            setAvailableDates(half);


            const [startHour, endHour] = hourRange.split("-").map(s => s.trim());
            const start = parseInt(startHour.split(":")[0]);
            const end = parseInt(endHour.split(":")[0]);

            const intervals = [];
            for (let i = start; i < end; i++) {
                const formattedStart = `${i}:00`.padStart(5, "0");
                const formattedEnd = `${i + 1}:00`.padStart(5, "0");
                intervals.push(`${formattedStart} - ${formattedEnd}`);
            }

            setAvailableHours(intervals);

            const shuffledIntervals = [...intervals].sort(() => 0.5 - Math.random());
            const count = Math.floor(intervals.length * 0.3);
            setDisabledHours(shuffledIntervals.slice(0, count));
        }
    }, [post]);

    const isAvailableDate = (date) => {
        const dayDiff = Math.floor((date - today) / (1000 * 60 * 60 * 24));
        if (dayDiff >= 90) {
            return false;
        }
        return availableDates.some(d => d.toDateString() === date.toDateString());
    };

    const isInAvailabilityDays = (date) => {
        return availableWeekDays.includes(date.getDay());
    };

    const handleDateChange = (date) => {
        if (!isAvailableDate(date)) {
            setShowNoAvailability(true);
            setSelectedDate(null);
            return;
        }
        setShowNoAvailability(false);
        setSelectedDate(date);
        setSelectedHour("");
    };

    const tileClassName = ({ date }) => {
        if (date < today.setHours(0, 0, 0, 0)) {
            return "past";
        }

        const dayDiff = Math.floor((date - today) / (1000 * 60 * 60 * 24));
        if (dayDiff >= 90) {
            return "past";
        }

        if (availableWeekDays.length === 0) {
            return null;
        }

        if (!isInAvailabilityDays(date)) {
            return "past";
        }

        if (isAvailableDate(date)) {
            if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
                return "selected";
            }
            return "available";
        }

        return "unavailable";
    };

    const handleHourSelect = (e) => {
        setSelectedHour(e.target.value);
    };


    return (
        <div className="booking-form">
            <h3>Book</h3>
            {/*<div className="selected-datetime">*/}
            {/*    {selectedDate && selectedHour && (*/}
            {/*        <p>*/}
            {/*            Appointment:{" "}*/}
            {/*            <strong>*/}
            {/*                {selectedDate.toDateString()}, {selectedHour}*/}
            {/*            </strong>*/}
            {/*        </p>*/}
            {/*    )}*/}
            {/*</div>*/}

            <label>Address</label>
            <input type="text" placeholder="Enter address"/>

            <label>Description</label>
            <textarea placeholder="Describe the issue..."/>

            <label>Calendar</label>
            <div className="calendar-container">
                <div className="calendar-wrapper">
                    <Calendar
                        onClickDay={handleDateChange}
                        tileClassName={tileClassName}
                    />
                </div>
            </div>

            {showNoAvailability && (
                <div className="no-availability">
                    No available bookings for this date.
                </div>
            )}

            {selectedDate && !showNoAvailability && (
                <div className="hour-select">
                    <label>Select appointment hour</label>
                    <select value={selectedHour} onChange={handleHourSelect}>
                        <option value="">Select hour...</option>
                        {availableHours.map((hour, idx) => (
                            <option
                                key={idx}
                                value={hour}
                                disabled={disabledHours.includes(hour)}
                                className={disabledHours.includes(hour) ? "disabled-hour" : ""}
                            >
                                {hour}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div className="actions">
                <button onClick={onBack}>Cancel</button>
                <button onClick={onBack}>Send</button>
            </div>
        </div>
    );
};

export default BookingForm;