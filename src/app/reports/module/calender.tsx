'use cilent'
import React, { useCallback, useState } from "react";

const Calendar = () => {
    const usaTime = new Date().getTime() + (new Date().getTimezoneOffset() * 60 * 10000);
    const korTime = new Date(usaTime + (9 * 60 * 60 * 1000))

    const today = {
        year: korTime.getFullYear(),
        month: korTime.getMonth() + 1,
        date: korTime.getDate(),
        day: korTime.getDay(),
    };

    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const [selectedYear, setSelectedYear] = useState(today.year);
    const [selectedMonth, setSelectedMonth] = useState(today.month);
    const dateTotalCount = new Date(selectedYear, selectedMonth, 0).getDate();

    const prevMonth = useCallback(() => {
        if (selectedMonth === 1) {
            setSelectedMonth(12);
            setSelectedYear(selectedYear - 1);
        } else {
            setSelectedMonth(selectedMonth - 1);
        }
    }, [selectedMonth]);

    const nextMonth = useCallback(() => {
        if (selectedMonth === 12) {
            setSelectedMonth(1);
            setSelectedYear(selectedYear + 1);
        } else {
            setSelectedMonth(selectedMonth + 1);
        }
    }, [selectedMonth]);

    const monthControl = useCallback(() => {
        let monthArr = [];
        for (let i = 0; i < 12; i++) {
            monthArr.push(
                <option key={i + 1} value={i + 1}>
                    {i + 1}월
                </option>
            );
        }
        return (
            <select onChange={changeSelectMonth} value={selectedMonth}>
                {monthArr}
            </select>
        );
    }, [selectedMonth]);

    const yearControl = useCallback(() => {
        let yearArr = [];
        const startYear = today.year - 10;
        const endYear = today.year + 10;
        for (let i = startYear; i < endYear + 1; i++) {
            yearArr.push(
                <option key={i} value={i}>
                    {i}년
                </option>
            );
        }
        return (
            <select onChange={changeSelectYear} value={selectedYear}>
                {yearArr}
            </select>
        );
    }, [selectedYear]);

    const changeSelectMonth = (e: any) => {
        setSelectedMonth(Number(e.target.value));
    };
    const changeSelectYear = (e: any) => {
        setSelectedYear(Number(e.target.value));
    };

    const returnWeek = useCallback(() => {
        let weekArr: any = [];
        week.forEach((v) => {
            let className = "weekday";
            if (v === "일") {
                className += " sunday";
            } else if (v === "토") {
                className += " saturday";
            }
            weekArr.push(
                <div key={v} className={className}>
                        {v}
                </div>
            );
        });
        return weekArr;
    }, []);


    const returnDay = useCallback(() => {
        let dayArr = [];
        const firstDayIndex = new Date(selectedYear, selectedMonth - 1, 1).getDay();

        for (let i = 0; i < firstDayIndex; i++) {
            dayArr.push(<div key={`empty-${i}`} className="weekday"></div>);
        }

        for (let i = 0; i < dateTotalCount; i++) {
            let className = "weekday";
            if (today.year === selectedYear && today.month === selectedMonth && today.date === i + 1) {
                className += " today";
            }
            if (new Date(selectedYear, selectedMonth - 1, i + 1).getDay() === 0) {
                className += " sunday";
            }
            if (new Date(selectedYear, selectedMonth - 1, i + 1).getDay() === 6) {
                className += " saturday";
            }

            dayArr.push(
                <div key={i + 1} className={className}>
                    {i + 1}
                </div>
            );
        }

        return dayArr;
    }, [selectedYear, selectedMonth, dateTotalCount, today]);


    return (
        <div className="container">
            <div className="title">
                <div className="pagination flex justify-center">
                    <button onClick={prevMonth}>◀︎</button>
                <h3> {yearControl()} {monthControl()} </h3>
                    <button onClick={nextMonth}>▶︎</button>
                </div>
            </div>
            <div className="week grid grid-cols-7 gap-2">{returnWeek()}</div>
            <div className="date grid grid-cols-7 gap-2">{returnDay()}</div>
        </div>
    );
};

export default Calendar;