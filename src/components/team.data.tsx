import React, { useRef } from "react";

const teams = [
  { name: "Test Team", university: "Birjand" },
];

export default function FinalTeamsTable() {
  const containerRef = useRef(null);

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
                  className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Team Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  University
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-300 dark:divide-neutral-700">
              {teams.map(({ name, university }, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-neutral-800" : "bg-neutral-50 dark:bg-neutral-900"}>
                  <td className="p-2 py-4 sm:px-4 sm:py-3 text-neutral-900 dark:text-neutral-100 whitespace-nowrap text-sm sm:text-base">
                    {name}
                  </td>
                  <td className="px-2 py-4 sm:px-4 sm:py-3  text-neutral-900 dark:text-neutral-100 whitespace-nowrap text-sm sm:text-base">
                    {university}
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

