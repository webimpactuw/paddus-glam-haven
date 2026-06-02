'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"

export default function Serviceselector({className="", onValueChange}) {
    let toggle = 0
    const [services, setServices] = useState([null])

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

    async function updateServices() {
        const query = `*[_type=="service"] {
            name,
            image
        }`

        const result = await client.fetch(query)
        setServices(result)
    }

    function selection(val) {
        let e = document.getElementById("x")
        let f = document.getElementById("y")
        e.innerHTML = val
        f.style.setProperty('display', 'none')
        toggle = 0
        onValueChange(val)
    }

    useEffect(() => {updateServices()}, [])

    return <div className={`${className}`}>
        <button onClick={openmenu} type="button" className="text-brand-purple-dark border border-brand-gold-soft w-full mb-[1vh] rounded h-[5vh] flex justify-start items-center">
            <p id="x" className="w-full">Select</p>
            <Image src="/chevron.svg" height={15} width={15} alt="dropdown" className="ml-[-1.5vw]"></Image>
        </button>
        <div id="y" className="flex flex-col border-brand-gold-soft border hidden text-brand-purple rounded bg-white absolute w-[50vw]">
            {services.map((service) => {
                if (service === null) {
                    return null
                }
                else {
                    return (
                        <button key={service.name} onClick={() => selection(service.name)} type="button" className="hover:bg-brand-green/10">{service.name}</button>
                    )
                }
            })}
        </div>
    </div>
}