'use client'

export default function Serviceselector({className="", onValueChange}) {
    let toggle = 0
    function openmenu() {
        let e = document.getElementById("y")
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
        let e = document.getElementById("x")
        let f = document.getElementById("y")
        e.innerHTML = val
        f.style.setProperty('display', 'none')
        toggle = 0
        onValueChange(val)
    }

    return <div className={`${className}`}>
        <button id="x" onClick={openmenu} type="button" className="text-brand-purple-dark border border-brand-gold-soft w-full mb-[1vh] rounded h-[5vh]">Select</button>
        <div id="y" className="flex flex-col border-brand-gold-soft border hidden text-brand-purple rounded bg-white absolute w-[50vw]">
            <button onClick={() => selection(1)} type="button" className="hover:bg-brand-green/10">1</button>
            <button onClick={() => selection(2)} type="button" className="hover:bg-brand-green/10">2</button>
            <button onClick={() => selection(3)} type="button" className="hover:bg-brand-green/10">3</button>
            <button onClick={() => selection(4)} type="button" className="hover:bg-brand-green/10">4</button>
            <button onClick={() => selection(5)} type="button" className="hover:bg-brand-green/10">5</button>
            <button onClick={() => selection(6)} type="button" className="hover:bg-brand-green/10">6</button>
        </div>
    </div>
}