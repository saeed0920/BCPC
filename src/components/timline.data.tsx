import { Timeline } from "@/components/ui/timeline";

const timelineFR = [
  {
    time: "7:00 – 7:30 AM",
    title: "Team Arrival",
    description: "Teams arrive at the venue and check in for the competition day.",
    image: "/img/timeline/team7.jpg",
  },
  {
    time: "7:30 – 8:00 AM",
    title: "Team Setup",
    description: "Teams settle into their assigned stations and prepare for the contest.",
    image: "/img/timeline/team5.jpg",
  },
  {
    time: "8:00 AM – 1:00 PM",
    title: "BCPC Contest",
    description: "The official programming contest begins. Teams solve algorithmic challenges under time pressure.",
    image: "/img/timeline/team1.jpeg",
  },
  {
    time: "1:00 – 2:30 PM",
    title: "Lunch Break",
    description: "A relaxing lunch after an intense contest session.",
    image: "/img/timeline/taha2.jpg",
  },
  {
    time: "2:30 – 5:30 PM",
    title: "Closing Ceremony",
    description: "Final remarks, winner announcements, and acknowledgments.",
    image: "/img/timeline/open.jpg",
  },
  {
    time: "5:30 – 6:00 PM",
    title: "Evening Refreshments",
    description: "Light snacks and time to socialize after the event.",
    image: "/img/timeline/coffee.jpg",
  },
];

  const timelineTH =  [
  {
    time: "8:00 – 9:30 AM",
    title: "Registration",
    description: "Participants arrive, check in, and receive their welcome packages",
    image: "/img/timeline/pre.jpeg",
  },
  {
    time: "9:30 – 10:00 AM",
    title: "Morning Break",
    description: "Light refreshments and time to relax before the sessions begin",
    image: "/img/timeline/chill2.jpg",
  },
  {
    time: "10:00 – 11:30 AM",
    title: "Opening Ceremony & Workshops",
    description: "Kick-off speeches followed by engaging technical workshops",
    image: "/img/timeline/open2.jpg",
  },
  {
    time: "12:00 – 1:30 PM",
    title: "Lunch Break",
    description: "Enjoy lunch and connect with fellow participants",
    image: "/img/timeline/lunch.jpg",
  },
  {
    time: "1:30 – 3:00 PM",
    title: "Panel Discussion & Opening Talk",
    description: "Inspiring talks and a panel discussion with tech experts",
    image: "/img/timeline/workshop.jpg",
  },
  {
    time: "3:00 – 4:45 PM",
    title: "Calm Zone",
    description: "A peaceful break area with network!, games, and rest space",
    image: "/img/timeline/team3.jpg",
  },
  {
    time: "4:45 – 5:00 PM",
    title: "Team Setup",
    description: "Teams settle into their stations and prepare for the contest",
    image: "/img/timeline/Taha.jpg",
  },
  {
    time: "5:00 – 7:00 PM",
    title: "Practice Contest",
    description: "Get familiar with the contest environment in a mock round",
    image: "/img/timeline/team2.jpeg",
  },
];


export function TimelineDemo() {
  const data = [
{
      title: "Sign up",
      content: (
 <div className="p-6 flex flex-col gap-4 xl:flex-row justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-700 dark:text-neutral-200"> 
            Registration is Open!
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
            Sign up from <strong>22 Ordibehesht</strong> to <strong>25 Ordibehesht</strong>
          </p>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Get ready for an exciting ICPC-style contest. Make sure to complete your registration before the deadline.
          </p>
        </div>       
            <img src="/img/timeline/signup.jpg" className="w-full h-[8rem] xl:w-[20rem] xl:h-full object-cover rounded-lg shadow shadow-neutral-500"/> 
</div>
),
    },
    {
      title: "Thursday",
      content: (
         <section className="max-w-4xl mx-auto px-0 md:px-4 py-10">
      <h2 className="border-b-neutral-500 border-b-2 pb-4 text-3xl font-bold text-center text-neutral-700 dark:text-neutral-100 mb-10">
        Thursday <span className="text-sm text-gray-500 dark:text-gray-400">(1 Khordad)</span>
      </h2>

      <div className="space-y-8">
        {timelineTH.map((event, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-1 transition-colors"
          >
            {event.image && <img
              src={event.image}
              alt={event.title}
             style={{
             boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px;'
             }}
              className="hover:scale-110 w-full overflow-hidden lg:w-1/3 h-40 lg:h-50 object-cover rounded-lg  shadow-[rgba(0,0,0,0.15)1.95px1.95px2.6px] transition-transform duration-300 "
            /> || <span className="w-full lg:w-1/3 h-60 object-cover rounded-t-xl transition-transform duration-300 "></span>}
            <div className=" p-2 lg:p-5 flex-1">
              <span className="block text-sm text-neutral-500 dark:text-neutral-400 mb-1">{event.time}</span>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-200 ">
                {event.title}
              </h3>
              <p className="text-sm md:text-base mt-2 text-neutral-600  dark:text-neutral-400  transition-colors">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>      ),
    },
    {
      title: "Friaday",
      content: (
         <section className="max-w-4xl mx-auto px-0 md:px-4 py-10">
      <h2 className="border-b-neutral-500 border-b-2 pb-4 text-3xl font-bold text-center text-neutral-700 dark:text-neutral-100 mb-10">
        Friaday <span className="text-sm text-gray-500 dark:text-gray-400">(2 Khordad)</span>
      </h2>

      <div className="space-y-8">
        {timelineFR.map((event, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-1 transition-colors"
          >
            {event.image && <img
              src={event.image}
              alt={event.title}
             style={{
             boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px;'
             }}
              className="hover:scale-110 w-full overflow-hidden lg:w-1/3 h-40 lg:h-50 object-cover rounded-lg  shadow-[rgba(0,0,0,0.15)1.95px1.95px2.6px] transition-transform duration-300 "
            /> || <span className="w-full lg:w-1/3 h-60 object-cover rounded-t-xl transition-transform duration-300 "></span>}
            <div className=" p-2 lg:p-5 flex-1">
              <span className="block text-sm text-neutral-500 dark:text-neutral-400 mb-1">{event.time}</span>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-200 ">
                {event.title}
              </h3>
              <p className="text-sm md:text-base mt-2 text-neutral-600  dark:text-neutral-400  transition-colors">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>      ),
    },
    {
      title: "Saturday",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Experience Sharing Workshop
           </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Coming soon!
</div>
          </div>
        </div>
      ),
    },
  ];;
  return (
      <Timeline data={data} />
  );
}

