/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "ifcu",
        links: {
            live: "library.shu.edu/IFCU/home"
        },
        techs: ["html", "css", "js"],
        hasImage: true,
    },

    {
        id: "walsh",
        links: {
            live: "library.shu.edu/home"
        },
        techs: ["html", "css", "js"],
        hasImage: true,
    },
    {
        id: "ihs",
        links: {
            live: "library.shu.edu/ihs-home"
        },
        techs: ["html", "css", "js"],
        hasImage: true,
    },
    {
        id: "portfolio",
        links: {
            github: "/haasg1.github.io",
            live: "https://haasg1.github.io/"
        },
        techs: ["js", "sass", "webpack", "html", "css"],
        hasImage: true,
    },
    {
        id: "hci_proj",
        links: {
            github: "/HCI-Project"
        },
        techs: ["figma", "lc", "ut", "interviews", "surveys"],
        hasImage: true,
    },
    {
        id: "hci_proj2",
        links: {
            github: "/HCI-OngoingProject"
        },
        techs: ["figma", "lc", "ut", "interviews", "surveys"],
        hasImage: true,
    }
];

export default projects;
