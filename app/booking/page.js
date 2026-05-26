import Link from "next/link";
import Serviceselector from "./components/serviceSelector";

export const metadata = {
  title: "Book an Appointment | Paddu's Glam Haven",
  description: "Submit a booking request for makeup and styling services.",
};

export default function BookingPage() {
  return (
    <main className="min-h-[70vh] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center grid grid-cols-1 items-center">
        <h1 className="font-serif text-4xl md:text-6xl text-brand-purple pt-[15vh] pb-[5vh]">
          Ready to book your look?
        </h1>
        <p className="text-brand-purple-light">
          Choose your service, pick a date, and book your beauty session in just a few clicks. <br /> It's fast and easy.
        </p>

        <div className="w-full">
          <form className="grid grid-cols-2 gap-x-[2vw] gap-y-[4vh] w-[80vw] relative right-[17vw] grid-rows-[5vh_0vh_8vh_10vh_0vh_5vh_30vh]">
            <p className="text-brand-purple-dark text-left row-start-1">
              <b>Name (Required)</b>
            </p>
            <label className="text-brand-purple-light col-start-1 col-end-1 row-start-2 row-end-2 text-left">First Name</label>
            <input type="text" className="border-b-[0.1vh] border-gray-400 outline-0 row-start-3 row-end-3 col-start-1 col-end-1" />
            <label className="text-brand-purple-light col-start-2 col-end-2 row-start-2 row-end-2 text-left">Last Name</label>
            <input type="text" className="border-b-[0.1vh] border-gray-400 outline-0 row-start-3 row-end-3" />
            <label className="text-brand-purple-light text-left row-start-4 row-end-4 mt-[3vh]">Email</label>
            <input type="text" className="border-b-[0.1vh] border-gray-400 outline-0 row-start-5 row-end-5 col-start-1 col-end-2 w-[80vw]" />
            <label className="text-brand-purple row-start-6 text-left pt-[10vh]"><b>SELECT A SERVICE</b></label>
            <Serviceselector className="row-start-7 col-start-1 col-end-2 w-[80vw] mt-[8vh]"/>
          </form>
        </div>
      </div>
    </main>
  );
}
