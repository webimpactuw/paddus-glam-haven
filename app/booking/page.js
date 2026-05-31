'use client'

import Link from "next/link";
import Serviceselector from "./components/serviceSelector";
import Timestable from "./components/times";
import Calendarcomp from "./components/calendar";
import Partysize from "./components/partySize";

/*export const metadata = {
  title: "Book an Appointment | Paddu's Glam Haven",
  description: "Submit a booking request for makeup and styling services.",
};*/

export default function BookingPage() {

  let name = ""
  let lastName = ""
  let email = ""
  let service = ""
  let date = ""
  let partySize = ""
  let time = ""

  const submit = () => {
    console.log(name)
    console.log(lastName)
    console.log(email)
    console.log(service)
    console.log(date)
    console.log(partySize)
    console.log(time)
  }

  const handleservice = (e) => {
    service = e
  }

  const handledate = (e) => {
    date = e
  }

  const handlepartysize = (e) => {
    partySize = e
  }

  const handletime = (e) => {
    time = e
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

          <form className="grid grid-cols-2 gap-x-[2vw] gap-y-[4vh] w-[50vw] grid-rows-[5vh_0vh_8vh_10vh_0vh_5vh_30vh_10vh_3vh_10vh">
            <p className="text-brand-purple-dark text-left row-start-1">
              <b>Name (Required)</b>
            </p>
            <label className="text-brand-purple-light col-start-1 col-end-1 row-start-2 row-end-2 text-left">First Name</label>
            <input type="text" onChange={(e) => name = e.target.value} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-3 row-end-3 col-start-1 col-end-1" />
            <label className="text-brand-purple-light col-start-2 col-end-2 row-start-2 row-end-2 text-left">Last Name</label>
            <input type="text" onChange={(e) => lastName = e.target.value} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-3 row-end-3" />
            <label className="text-brand-purple-light text-left row-start-4 row-end-4 mt-[3vh]">Email</label>
            <input type="text" onChange={(e) => email = e.target.value} className="border-b-[0.1vh] border-gray-400 outline-0 row-start-5 row-end-5 col-start-1 col-span-2 w-full" />
            <label className="text-brand-purple row-start-6 text-left mt-[10vh]"><b>SELECT A SERVICE</b></label>
            <Serviceselector className="row-start-7 col-start-1 col-span-2 w-full mb-[10vh]" onValueChange={handleservice} />
            <label className="text-brand-purple row-start-8"><b>SELECT A DATE</b></label>
            <Calendarcomp className="col-start-1 col-end-1 row-start-9 row-span-2 h-full w-[108.5%]" onValueChange={handledate} />
            <Partysize className="row-start-9 col-start-2 w-full mb-[-4vh] z-1" onValueChange={handlepartysize} />
            <Timestable className="row-start-10 col-start-2 w-full h-full" onValueChange={handletime} />
            <button type="button" onClick={() => submit()} className="row-start-11 col-span-2">Submit</button>
          </form>
      </div>
    //</main>
  );
}
