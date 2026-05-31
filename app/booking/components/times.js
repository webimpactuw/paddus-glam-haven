'use client'

export default function Timestable({ className="", onValueChange}) {
    let times = ["07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
         "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]
    
    let last = null

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

    return <div className={`${className}`}>
        <div className="grid grid-cols-3 gap-y-[2vh] w-full border border-brand-gold-soft h-full items-center justify-center">
            <p className="text-brand-purple col-span-3 row-start-1 row-end-2 text-left text-xl ml-[1vw] mt-[2vh]"><b>SELECT A TIME</b></p>
            {times.map((val) => (<button type="button" onClick={() => select(val)} key={val} id={val} className="border border-brand-green rounded w-[7vw] h-[5vh] unselected hover:border-0 relative left-[0.5vw]">
                {val}
            </button>))}
        </div>
    </div>
}