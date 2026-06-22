import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import milleniumCardsImage from "../assets/img/milleniumCards.png"
import apiYuGiOhImage from "../assets/img/yugiohApi.png"
import rickAndMortyImage from "../assets/img/rickandMorty.png"

const PROJECTS = [
  {
    title: "Millennium Cards",
    description:
      "E-commerce Full Stack para comercialização de cards colecionáveis com Redux Toolkit, autenticação, gerenciamento de produtos e consumo de APIs REST.",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Node.js"],
    image: milleniumCardsImage,
    link: "https://github.com/HenriBueno/millennium_cards",
    fileName: "cardListSlice .ts",
    codeSnippet: `const cardListSlice  = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
        addCard(state, action: PayloadAction<CardType>) {
      state.cards.push(action.payload);
    }
  },
      extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.status = "loading";
      })
  },
});`,
  },
  {
    title: "API Yu-Gi-Oh",
    description:
      "Aplicação que consome a API pública de Yu-Gi-Oh, listando cartas com filtros e detalhes. Projeto focado em consumo de APIs REST e manipulação de dados.",
    tags: ["JavaScript", "CSS", "APIs REST"],
    image: apiYuGiOhImage,
    link: "https://github.com/HenriBueno/api-yugioh",
    fileName: "script.js",
    codeSnippet: `
    async function listarCards() {
  try {
    const response = await api.get("/");
    const resposta = response.data.data;
    cardsTotal = resposta;
  } catch (error) {
    console.log(error);
  }
}
    `,
  },
  {
    title: "Rick and Morty",
    description:
      "Aplicação de listagem de personagens da série Rick and Morty com filtros por status e espécie, consumindo a API pública da franquia.",
    tags: ["JavaScript", "HTML", "CSS", "APIs REST"],
    image: rickAndMortyImage,
    link: "https://github.com/HenriBueno/projeto-Rick-and-Morty",
    fileName: "script.js",
    codeSnippet: `
    function renderCharacterList(page) {
  axios
    .get('https://rickandmortyapi.com/api/character?page=${"page"}')
    .then((response) => {
      const data = response.data;
      characterList.innerHTML = "";
        data.results.forEach((character) => {
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
    });
}
    `,
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-16 noise-overlay"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-cobalt tracking-[0.3em] uppercase">
              03 — Projetos
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4">
              Projetos em Destaque
            </h2>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            href="https://github.com/HenriBueno"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-cobalt transition-colors tracking-wider mt-4 md:mt-0"
          >
            VER TODO O GITHUB →
          </motion.a>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/5 bg-card/50 hover:border-cobalt/20 transition-all duration-500">
                {/* Coluna esquerda: imagem + tags */}
                <div className="lg:col-span-7 flex flex-col">
                  {/* Imagem — overflow-hidden só aqui */}
                  <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/80" />
                  </div>

                  {/* Tags abaixo da imagem */}
                  <div className="flex flex-wrap gap-2 px-4 py-3 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-mono text-cobalt border border-cobalt/20 bg-cobalt/5 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Coluna direita: info */}
                <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between relative border-t lg:border-t-0 lg:border-l border-white/5">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground tracking-[0.3em]">
                      PROJETO {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mt-3 mb-4 group-hover:text-cobalt transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Code Peek */}
                  <div className="mt-6 bg-obsidian/80 border border-white/5 p-4 rounded-sm overflow-hidden">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-500/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                      <span className="ml-2 text-[10px] font-mono text-muted-foreground">
                        {project.fileName}
                      </span>
                    </div>
                    <pre className="text-[11px] font-mono text-muted-foreground leading-relaxed overflow-x-auto">
                      <code>{project.codeSnippet}</code>
                    </pre>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 font-mono text-xs text-cobalt hover:text-foreground transition-colors tracking-wider group/link"
                  >
                    VER PROJETO
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
