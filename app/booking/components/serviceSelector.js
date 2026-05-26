'use client'

export default function Serviceselector({className=""}) {
    let toggle = 0
    function openmenu() {
        let e = document.getElementById("2")
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
        let e = document.getElementById("1")
        let f = document.getElementById("2")
        e.innerHTML = val
        f.style.setProperty('display', 'none')
        toggle = 0
    }

    return <div className={`${className}`}>
        <button id="1" onClick={openmenu} type="button" className="text-brand-purple-dark border border-brand-gold w-full mb-[1vh] rounded h-[5vh]">Select</button>
        <div id="2" className="flex flex-col border-brand-gold border hidden text-brand-purple rounded">
            <button onClick={() => selection(1)} type="button">1</button>
            <button onClick={() => selection(2)} type="button">2</button>
            <button onClick={() => selection(3)} type="button">3</button>
            <button onClick={() => selection(4)} type="button">4</button>
            <button onClick={() => selection(5)} type="button">5</button>
            <button onClick={() => selection(6)} type="button">6</button>
        </div>
    </div>
}