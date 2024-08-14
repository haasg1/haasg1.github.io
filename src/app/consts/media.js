import proxy from "../proxies/media"

const media = {
    linkedin: "gabrielachaas",
    github: "haasg1",
    email: "gabriela.haas48@gmail.com"

}

export default new Proxy(media, proxy);

