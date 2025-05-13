import type { TeamProfile } from "./types";

export const teams: TeamProfile[] = [
    {
        teamName: "Tech",
        headteamUsername: "Erfan Ghofrani",
        headteamImg: "/img/team/erfanghorfani.jpg",
        headTeamDescription: "BackEnd developer",
        teamnumber: 3,
        team: [
            {
                username: "Saeed Abadiyan",
                img: "/img/team/saeedabaiyan.jpg",
                description: "FrontEnd Developer",
            },
            {
                username: "Mohammad Ghohari",
                img: "/img/team/mamad.jpg",
                description: "DevOps",
            },
        ],
    },
    {
        teamName: "Executive",
        headteamUsername: "Taha Khosravi",
        headteamImg: "/img/team/tahakhosravi.jpg",
        headTeamDescription: "Head",
        teamnumber: 2,
        team: [
            {
                username: "Ehsan Noferesti",
                img: "/img/team/ehsannoferesti.jpg",
                description: "Go Developer",
            },
            {
                username: "Mohammad Hosseini",
                img: "/img/team/mohammadhoseini.jpg",
                description: "",
            },
            {
                username: "Fariborz Jelveghar",
                img: "/img/team/fariborsjelvegar.jpg",
                description: "",
            },
            {
                username: "Amirreza Salari",
                img: "/img/team/amirrezasalari.jpg",
                description: "",
            },

        ],
    },
];
