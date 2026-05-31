'use client'

import {useState, useEffect} from 'react';

export default function Calendarcomp({ className="", onValueChange}) {
    let today = new Date(2026, 2, 1)
    let firstDay = new Date(today.getFullYear(), today.getMonth(), 1)
    let last = null
    const [days, setDays] = useState([])
    useEffect(() => {updateCal()}, [])

    function select(val) {
        console.log(last)
        if (last != null) {
            let e = document.getElementById(last)
            e.classList.toggle('selected')
            e.classList.toggle('unselected')
        }
        last = val
        let f = document.getElementById(val)
        f.classList.toggle('selected')
        f.classList.toggle('unselected')
        onValueChange(val)
    }

    function updateCal() {
        let temp = []
        let start = firstDay.getDay() === 0 ? 6 : firstDay.getDay()-1
        for (let j = 0-start; j < 0; j++) {
            temp[j+start] = 0
        }
        let i = 1
        let j = start
        while ((new Date(firstDay.getFullYear(), firstDay.getMonth(), i)).getMonth() === firstDay.getMonth()) {
            temp[j] = i
            i++
            j++
        }
        setDays(temp)
    }

    return <div className={`${className}`}>
        <div className="grid grid-rows-8 grid-cols-7 border border-brand-gold-soft h-full align-center justify-center">
            <button className="col-start-1 col-end-1 row-start-1"></button>
            <p className="col-start-2 col-span-5 row-start-1 text-brand-purple text-2xl text-center"><b>Month Year</b></p>
            <button className="col-start-7 col-end-7 row-start-1"></button>
            <p className="col-start-1 col-end-1 row-start-2 text-brand-purple-light text-center">Mon</p>
            <p className="col-start-2 col-end-2 row-start-2 text-brand-purple-light text-center">Tue</p>
            <p className="col-start-3 col-end-3 row-start-2 text-brand-purple-light text-center">Wed</p>
            <p className="col-start-4 col-end-4 row-start-2 text-brand-purple-light text-center">Thu</p>
            <p className="col-start-5 col-end-5 row-start-2 text-brand-purple-light text-center">Fri</p>
            <p className="col-start-6 col-end-6 row-start-2 text-brand-purple-light text-center">Sat</p>
            <p className="col-start-7 col-end-7 row-start-2 text-brand-purple-light text-center">Sun</p>
            {days.map((day) => {
                if (day === 0) {
                    return  <div key={crypto.randomUUID()}></div>
                }
                else {
                    return <button key={day} id={day} type="button" onClick={() => select(day)} className="text-brand-purple unselected w-[2vw] relative left-[1vw] text-center">
                            {day}
                        </button>
                }
            })}
        </div>
    </div>
}