import { useRef } from "react";

const teams = 
[
  { university: 'شوکت', name: 'Code catch ' },
  { university: 'شوکت', name: 'π²LIFE' },
  { university: 'شوکت', name: 'CamelCase' },
  { university: 'شوکت', name: 'The HeisenBugs' },
  { university: 'شوکت', name: 'New Folder 3' },
  { university: 'شوکت', name: 'SHIR MOZ' },
  { university: 'آزاد بیرجند', name: 'Ambassadors' },
  { university: 'صنعتی بیرجند', name: 'Codezilla' },
  { university: 'شوکت', name: 'SUM CODE' },
  { university: 'شوکت', name: 'NFA' },
  { university: 'آزاد بیرجند', name: 'Bombardiro Crocodilo' },
  { university: 'شوکت', name: 'Persian Gulf ' },
  { university: 'آزاد بیرجند', name: 'Bots for bugs' },
  { university: 'شوکت', name: 'پیام های بازرگانی' },
  { university: 'شوکت', name: 'seven' },
  { university: 'شوکت', name: 'Blank Co. LTD' },
  { university: 'شوکت', name: 'Cl@ss Pointer' },
  { university: 'شوکت', name: 'The Bug Factory' },
  { university: 'شوکت', name: 'Newbie dev' },
  { university: 'شوکت', name: 'TEA team ' },
  { university: 'بقیه دانشگاه ها', name: 'ایلیا' },
  { university: 'شوکت', name: '404 Team Not Found' },
  { university: 'شوکت', name: 'دیوکد' },
  { university: 'شوکت', name: ' God of PY' },
  { university: 'بقیه دانشگاه ها', name: 'Ctrl+C' },
  { university: 'شوکت', name: 'future programmers' },
  { university: 'شوکت', name: 'Faisa' }
];


export default function FinalTeamsTable() {
  const containerRef = useRef(null);
    const switchUni = (uni : string)=> {
        switch(uni) {
          case "شوکت":
            return "University of Birjand"
          case "آزاد بیرجند":
            return "Azad University of Birjand"
          case "صنعتی بیرجند":
            return "Birjand University of Technology"
          default:
                return "other"
        }
    }

  return (
    <div
      ref={containerRef}
      className="w-full bg-transparent dark:bg-neutral-950 font-sans min-h-screen"
    >
      <div className="max-w-7xl mx-auto py-16 md:py-20">
        <h2 className="text-xl sm:text-3xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold">
          Final Teams for the BCPC Contest
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base max-w-sm mb-8">
          Team not found? Please <a className="underline font-bold" href="/contact">contact us</a>
        </p>

        <div className="overflow-x-auto rounded-lg border border-neutral-300 dark:border-neutral-700">
          <table className="min-w-full divide-y divide-neutral-300 dark:divide-neutral-700">
            <thead className="bg-neutral-200 dark:bg-neutral-900">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-lg sm:text-xl font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-lg sm:text-xl font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Team Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-lg sm:text-xl font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  University
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-300 dark:divide-neutral-700">
              {teams.map(({ name, university }, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-neutral-800" : "bg-neutral-50 dark:bg-neutral-900"}>
                  <td className="px-2 py-4 sm:px-4 text-neutral-900 dark:text-neutral-100 whitespace-nowrap text-sm sm:text-base">
                    {i + 1}
                  </td>
                  <td className="p-2 py-2 sm:px-4 text-neutral-900 dark:text-neutral-100 whitespace-nowrap text-sm sm:text-base">
                    {name}
                  </td>
                  <td className="px-2 py-4 sm:px-4 text-neutral-900 dark:text-neutral-100 whitespace-nowrap text-sm sm:text-base">
                    {switchUni(university)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

