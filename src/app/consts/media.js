import proxy from "../proxies/media"

const media = {
    discord: {
        id: "",
        tag: "",
    },
    
    linkedin: "gabrielachaas",
    github: "haasg1",
    figma: "",
    email: "gabriela.haas48@gmail.com"

}

export default new Proxy(media, proxy);

