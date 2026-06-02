'use client'

import Link from "next/link";
import Serviceselector from "./components/serviceSelector";
import Timestable from "./components/times";
import Calendarcomp from "./components/calendar";
import Partysize from "./components/partySize";
import { useState, useEffect } from "react";
import { handleAppointmentWrite } from "./action";
import emailjs from "@emailjs/browser";

export default function BookingPage() {
  emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })

  let [name, setName] = useState("")
  let [lastName, setLastName] = useState("")
  let [email, setEmail] = useState("")
  let [service, setService] = useState("")
  let [date, setDate] = useState()
  let [partySize, setPartySize] = useState("")
  let [time, setTime] = useState("")

  async function submit() {
    handleAppointmentWrite(date, time)
    const template = {
      firstName: name,
      lastName: lastName,
      email: email,
      service: service,
      date: date.getFullYear()+"-"+String(date.getMonth() + 1).padStart(2, '0')+"-"+String(date.getDate()).padStart(2, '0'),
      partySize: partySize,
      time: time,
    }
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_APPOINTMENT_ID, template)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
       console.log('FAILED...', error);
    });
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_RECEIPT_ID, template)
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
       console.log('FAILED...', error);
    });
    document.getElementById("submit").style.setProperty('display', 'none')
    document.getElementById("success").style.setProperty('display', 'block')
  }

  const handlename = (e) => {
    setName(e.target.value)
  }

  const handlelastname = (e) => {
    setLastName(e.target.value)
  }

  const handleemail = (e) => {
    setEmail(e.target.value)
  }

  const handleservice = (e) => {
    setService(e)
  }

  const handledate = (e) => {
    setDate(e)
    setTime("")
  }

  const handlepartysize = (e) => {
    setPartySize(e)
  }

  const handletime = (e) => {
    setTime(e)
  }

  return (
    //<main className="min-h-[70vh] py-16 md:py-24">
      <div className="flex items-center flex-col">
        <h1 className="font-serif text-4xl md:text-6xl text-brand-purple pt-[15vh] pb-[5vh]">
          Ready to book your look?
        </h1>
        <p className="text-brand-purple-light mb-[5vh]">
          Choose your service, pick a date, and book your beauty session in just a few clicks. <br /> It's fast and easy.
        </p>
          <form className="grid grid-cols-2 gap-x-[2vw] gap-y-[4vh] w-[50vw] grid-rows-[5vh_0vh_8vh_10vh_0vh_5vh_30vh_10vh_10vh items-center">
            <p className="text-brand-purple-dark text-left row-start-1">
              <b>Name (Required)</b>
            </p>
            <label className="text-brand-purple-light col-start-1 col-end-1 row-start-2 row-end-2 text-left">First Name<span className="text-red-500">*</span></label>
            <input type="text" onChange={handlename} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-3 row-end-3 col-start-1 col-end-1" />
            <label className="text-brand-purple-light col-start-2 col-end-2 row-start-2 row-end-2 text-left">Last Name<span className="text-red-500">*</span></label>
            <input type="text" onChange={handlelastname} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-3 row-end-3" />
            <label className="text-brand-purple-light text-left row-start-4 row-end-4 mt-[3vh]">Email<span className="text-red-500">*</span></label>
            <input type="text" onChange={handleemail} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-5 row-end-5 col-start-1 col-span-2 w-full" />
            <label className="text-brand-purple row-start-6 text-left mt-[10vh]"><b>SELECT A SERVICE</b></label>
            <Serviceselector className="row-start-7 col-start-1 col-span-2 w-full mb-[10vh]" onValueChange={handleservice} />
            <label className="text-brand-purple row-start-8"><b>SELECT A DATE</b></label>
            <Calendarcomp className="col-start-1 col-end-1 row-start-9 row-span-2 h-full w-[108.5%]" onValueChange={handledate} />
            <div className="row-start-9 col-start-2 flex flex-col">
              <Partysize className="w-full z-1" onValueChange={handlepartysize} />
              <Timestable className="w-full h-full" onValueChange={handletime} day={date} />
            </div>
            <button type="button" id="submit" onClick={() => submit()} className="row-start-11 col-span-2 bg-brand-purple-dark w-[5vw] justify-self-center text-white rounded w-[8vw] h-[4vh] mb-[10vh]">Submit</button>
          </form>
          <p id="success" className="text-2xl text-white rounded bg-brand-purple hidden mb-[5vh]">Thank You For Booking With Us!</p>
      </div>
    //</main>
  );
}
