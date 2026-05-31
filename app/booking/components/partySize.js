'use client'

export default function Partysize({ className="", onValueChange }) {
    let toggle = 0
    function openmenu() {
        let e = document.getElementById("b")
        if (toggle == 0) {
            e.style.setProperty('display', 'flex')
            toggle = 1
        }
        else {
            e.style.setProperty('display', 'none')
            toggle = 0
        }
    }

function selection(val) {
        let e = document.getElementById("a")
        let f = document.getElementById("b")
        e.innerHTML = val
        f.style.setProperty('display', 'none')
        toggle = 0
        onValueChange(val)
    }

    return <div className={`${className}`}>
        <button id="a" onClick={openmenu} type="button" className="text-brand-purple-dark border border-brand-gold-soft w-full h-[8vh]">Select</button>
        <div id="b" className="flex flex-col border-brand-gold-soft border hidden text-brand-purple absolute w-[24.05vw] bg-white">
            <button onClick={() => selection("1 person")} type="button" className="bg-white">1 person</button>
            <button onClick={() => selection("2 people")} type="button" className="bg-white">2 people</button>
            <button onClick={() => selection("3 people")} type="button" className="bg-white">3 people</button>
            <button onClick={() => selection("other")} type="button" className="bg-white">other</button>
        </div>
    </div>
}