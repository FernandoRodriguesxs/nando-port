export const languages = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export const defaultLang = "pt";

export const translations = {
  pt: {
    "intro.greeting": "bem vindo",
    "intro.text": `Oi, eu sou <b class="font-bold">Fernando Rodrigues</b>. Engenheiro de Software desde 2021, integrando IA, agentes autônomos e LLMs em produtos reais com TypeScript, Python e LangChain`,
    "about.title": "Sobre",
    "about.p1": "Engenheiro de software desde 2021, formado em Análise e Desenvolvimento de Sistemas. Nos últimos anos venho construindo uma trajetória que mistura desenvolvimento web com inteligência artificial de forma prática e aplicada.",
    "about.p2": "Comecei com o stack do ecossistema JavaScript — React, Next.js, TypeScript, Node.js e NestJS — mas fui ficando cada vez mais curioso sobre como a IA poderia entrar de verdade nos produtos. Hoje trabalho integrando modelos de linguagem, agentes autônomos e pipelines inteligentes em aplicações reais.",
    "about.p3": "O que me move é resolver problemas de verdade. Não me interessa tecnologia pela tecnologia — me interessa o impacto que ela gera.",
    "about.stack": "Stack:",
    "contacts.title": "Vamos trabalhar juntos!",
    "contacts.details": "Contato",
    "contacts.location": "São Paulo, Brasil",
    "contacts.socials": "Redes",
    "stack.title": "Minha Stack",
    "stack.description": "Principais ferramentas e tecnologias que utilizo no dia a dia:",
    "now.status": "Desenvolvedor de Software na Adalink",
    "running.title": "Corrida",
    "spotify.title": "Spotify",
    "footer.by": "Desenvolvido por Fernando Rodrigues.",
    "layout.title": "Fernando Rodrigues - Engenheiro de Software",
    "layout.description": "Engenheiro de Software em São Paulo, Brasil. Especializado em TypeScript, React, Next.js, Node.js, Python, LangChain e AI Agents.",
  },
  en: {
    "intro.greeting": "welcome",
    "intro.text": `Hi, I'm <b class="font-bold">Fernando Rodrigues</b>. Software Engineer since 2021, integrating AI, autonomous agents and LLMs into real products with TypeScript, Python and LangChain`,
    "about.title": "About",
    "about.p1": "Software engineer since 2021 with a degree in Systems Analysis and Development. Over the past few years I've been building a career that blends web development with artificial intelligence in a practical, hands-on way.",
    "about.p2": "I started with the JavaScript ecosystem — React, Next.js, TypeScript, Node.js and NestJS — but became increasingly curious about how AI could truly become part of the products I helped build. Today I work integrating language models, autonomous agents and intelligent pipelines into real applications.",
    "about.p3": "What drives me is solving real problems. I'm not interested in technology for technology's sake — I care about the impact it creates.",
    "about.stack": "Stack:",
    "contacts.title": "Let's work together!",
    "contacts.details": "Contact",
    "contacts.location": "São Paulo, Brazil",
    "contacts.socials": "Socials",
    "stack.title": "My Stack",
    "stack.description": "Main tools and technologies I use daily:",
    "now.status": "Software Developer at Adalink",
    "running.title": "Running",
    "spotify.title": "Spotify",
    "footer.by": "Developed by Fernando Rodrigues.",
    "layout.title": "Fernando Rodrigues - Software Engineer",
    "layout.description": "Software Engineer based in São Paulo, Brazil. Specialized in TypeScript, React, Next.js, Node.js, Python, LangChain and AI Agents.",
  },
  es: {
    "intro.greeting": "bienvenido",
    "intro.text": `Hola, soy <b class="font-bold">Fernando Rodrigues</b>. Ingeniero de Software desde 2021, integrando IA, agentes autónomos y LLMs en productos reales con TypeScript, Python y LangChain`,
    "about.title": "Sobre mí",
    "about.p1": "Ingeniero de software desde 2021, graduado en Análisis y Desarrollo de Sistemas. En los últimos años he construido una trayectoria que mezcla desarrollo web con inteligencia artificial de forma práctica y aplicada.",
    "about.p2": "Empecé con el ecosistema JavaScript — React, Next.js, TypeScript, Node.js y NestJS — pero fui interesándome cada vez más en cómo la IA podría integrarse de verdad en los productos. Hoy trabajo integrando modelos de lenguaje, agentes autónomos y pipelines inteligentes en aplicaciones reales.",
    "about.p3": "Lo que me mueve es resolver problemas reales. No me interesa la tecnología por la tecnología — me interesa el impacto que genera.",
    "about.stack": "Stack:",
    "contacts.title": "Trabajemos juntos!",
    "contacts.details": "Contacto",
    "contacts.location": "São Paulo, Brasil",
    "contacts.socials": "Redes",
    "stack.title": "Mi Stack",
    "stack.description": "Principales herramientas y tecnologías que uso a diario:",
    "now.status": "Desarrollador de Software en Adalink",
    "running.title": "Running",
    "spotify.title": "Spotify",
    "footer.by": "Desarrollado por Fernando Rodrigues.",
    "layout.title": "Fernando Rodrigues - Ingeniero de Software",
    "layout.description": "Ingeniero de Software en São Paulo, Brasil. Especializado en TypeScript, React, Next.js, Node.js, Python, LangChain y AI Agents.",
  },
} as const;

export type Lang = keyof typeof translations;

export function t(lang: Lang, key: keyof (typeof translations)["pt"]): string {
  return translations[lang][key] || translations[defaultLang][key];
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, path: string = ""): string {
  if (lang === defaultLang) return `/${path}`;
  return `/${lang}/${path}`;
}
