import type { TeamProfile } from "./types";

export const teams: TeamProfile[] = [
    {
        teamName: "Tech",
        headteamUsername: "Erfan Ghofrani",
        headteamImg: "src/images/team/erfanghorfani.jpg",
        headTeamDescription: "BackEnd developer",
        teamnumber: 3,
        team: [
            {
                username: "Saeed Abadiyan",
                img: "src/images/team/saeedabaiyan.jpg",
                description: "FrontEnd Developer",
            },
            {
                username: "Mamad",
                img: "src/images/team/mamad.jpg",
                description: "FrontEnd Developer",
            },
        ],
    },
];
