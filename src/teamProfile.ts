import type { TeamProfile } from "./types";

export const teams: TeamProfile[] = [
    {
        teamName: "Tech",
        headteamUsername: "Erfan Ghofrani",
        headTeamLinkedin: "https://www.linkedin.com/in/erfanghofrani/",
        headteamImg: "/img/team/erfanghorfani.jpg",
        headTeamDescription: "BackEnd developer",
        teamnumber: 3,
        team: [
            {
                username: "Saeed Abadiyan",
                linkedin: "https://www.linkedin.com/in/saeed-dev/",
                img: "/img/team/saeedabaiyan.jpg",
                description: "FrontEnd Developer",
            },
            {
                username: "Mohammad Ghohari",
                img: "/img/team/mamad.jpg",
                linkedin: "https://www.linkedin.com/in/mohammadgohari",
                description: "",
            },
            {
                username: "Elyas Daei Jafary",
                img: "/img/team/elyas.jpg",
                linkedin: "https://www.linkedin.com/in/elyasdj/",
                description: "",
            },
        ],
    },
    {
        teamName: "Executive",
        headTeamLinkedin : "https://www.linkedin.com/in/taha-khosravi-28a234333/",
        headteamUsername: "Taha Khosravi",
        headteamImg: "/img/team/tahakhosravi.jpg",
        headTeamDescription: "Head",
        teamnumber: 2,
        team: [
            {
                username: "Ehsan Noferesti",
                img: "/img/team/ehsannoferesti.jpg",
                linkedin: "https://www.linkedin.com/in/ehsan-noferesti-ab535b251/",
                description: "Go Developer",
            },
            {
                username: "Mohammad Hosseini",
                img: "/img/team/mohammadhoseini.jpg",
                linkedin: "",
                description: "",
            },
            {
                username: "Fariborz Jelveghar",
                img: "/img/team/fariborsjelvegar.jpg",
                linkedin: "",
                description: "",
            },
            {
                username: "Amirreza Salari",
                img: "/img/team/amirrezasalari.jpg",
                linkedin: "",
                description: "",
            },
        ],
    },
];
