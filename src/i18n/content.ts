export type Language = "en-us" | "pt-br";

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

type StackGroup = {
  stackName: string;
  stacks: string[];
};

export type SiteContent = {
  nav: {
    home: string;
    about: string;
    resume: string;
    contact: string;
    languageLabel: string;
    english: string;
    portuguese: string;
    resumeModalTitle: string;
    resumeModalPrimary: string;
    resumeModalSecondary: string;
  };
  profile: {
    eyebrow: string;
    title: string;
    subtitle: string;
    descriptions: string[];
    metaChips: string[];
    technologiesLabel: string;
    technologies: string[];
    highlights: Array<{ label: string; value: string }>;
    ctas: {
      primary: string;
      primaryHref: string;
      secondary: string;
      secondaryHref: string;
      contact: string;
    };
    photoAlt: string;
  };
  about: {
    label: string;
    title: string;
    intro: string[];
    workLabel: string;
    workIntro: string[];
    workTitle: string;
    stackLabel: string;
    stackTitle: string;
    stacks: StackGroup[];
    experiencesLabel: string;
    experiencesTitle: string;
    experiences: Experience[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    resumeButton: string;
    resumeHref: string;
    emailCopied: string;
  };
  meta: {
    title: string;
    description: string;
    ogDescription: string;
    twitterDescription: string;
  };
};

export const SITE_CONTENT: Record<Language, SiteContent> = {
  "en-us": {
    nav: {
      home: "HOME",
      about: "About Me",
      resume: "Resume",
      contact: "Contact",
      languageLabel: "Language",
      english: "English",
      portuguese: "Portuguese",
      resumeModalTitle: "Select the resume language",
      resumeModalPrimary: "English",
      resumeModalSecondary: "Portuguese",
    },
    profile: {
      eyebrow: "Full-stack software engineer",
      title: "Gabriel Zilmar",
      subtitle: "Building web applications, APIs, and databases.",
      descriptions: [
        "Computer Science graduate from PUC Minas with experience delivering production software in Brazil, Portugal, and the United States.",
        "I focus on web applications, backend APIs, database design, and the delivery details that keep software reliable in production.",
        "My experience includes full-stack work across React, Next.js, Node.js, PostgreSQL, Java SpringBoot, and event-driven backend services.",
      ],
      metaChips: [
        "Computer Science @ PUC Minas",
        "Web apps + APIs",
        "Database design",
      ],
      technologiesLabel: "Core stack",
      technologies: ["TypeScript", "React", "Node.js", "Next.js", "PostgreSQL"],
      highlights: [
        {
          label: "Focus",
          value:
            "Web applications, APIs, and database-backed systems shipped in production.",
        },
        {
          label: "Strength",
          value:
            "Backend-heavy delivery with React frontends, APIs, and data modeling.",
        },
        {
          label: "Experience",
          value: `Languages: TypeScript, JavaScript, Java
Frameworks: Node.js, NestJS, Express, Spring Boot, React, Next.js
Databases: PostgreSQL, DynamoDB, MongoDB
Cloud & DevOps: AWS, Lambda, Serverless, Docker, Kubernetes, CI/CD
APIs: REST, GraphQL, WebSockets
Testing: Jest, Cypress, Unit, Integration & E2E Testing
Architecture: Microservices, DDD, TDD, SOLID, Clean Code
Tools: Git, GitHub Actions, Scrum`,
        },
        {
          label: "Languages",
          value: "English, Portuguese – All professional proficiency or above",
        },
      ],
      ctas: {
        primary: "Open resume",
        primaryHref: "/assets/pdfs/GabrielZilmar-resume.pdf",
        secondary: "Abrir currículo PT-BR",
        secondaryHref: "/assets/pdfs/GabrielZilmar-resume-pt-br.pdf",
        contact: "Contact",
      },
      photoAlt: "Profile Photo",
    },
    about: {
      label: "About",
      title: "Experience profile",
      intro: [
        "I build web applications with a strong backend focus, usually working on APIs, data modeling, and the parts of the stack that keep products stable and maintainable.",
        "I graduated in computer science at PUC Minas, and I also worked on academic research in urban mobility and vehicular networks while at the university.",
      ],
      workLabel: "How I usually work",
      workIntro: [
        "I prefer clear boundaries, observability, and code that makes the next change easier instead of harder.",
        "My strongest work has been in projects where I owned implementation details, API and Database design, and delivery from idea to production.",
      ],
      workTitle: "How I usually work",
      stackLabel: "Stack",
      stackTitle: "Tools I use for web apps and APIs",
      stacks: [
        {
          stackName: "Backend",
          stacks: [
            "Node.js",
            "Express",
            "Nest",
            "Koa",
            "Sequelize",
            "Spring Boot",
            "Firebase Functions",
            "Hapi",
            "AWS Lambda",
            "Prisma",
            "TypeORM",
          ],
        },
        {
          stackName: "Frontend",
          stacks: [
            "React",
            "Next.js",
            "Redux",
            "Styled Components",
            "Tailwind CSS",
          ],
        },
        {
          stackName: "Data & Infra",
          stacks: ["PostgreSQL", "Redis", "AWS Lambda", "Docker", "CI/CD"],
        },
        {
          stackName: "Quality",
          stacks: ["Jest", "Testing Library", "Sentry", "OAuth", "GraphQL"],
        },
      ],
      experiencesLabel: "Selected work",
      experiencesTitle: "Selected work",
      experiences: [
        {
          company: "Lux Capital",
          role: "Full-Stack Software Engineer",
          period: "11/2024 - Current",
          location: "New York, USA",
          bullets: [
            "Led the development of a cryptocurrency exchange as Tech Lead, implementing buy/sell order flows and an RBAC authorization system.",
            "Led the design and implementation of a permissions model for an application, defining roles, groups, permissions, hierarchical access, and role-based data visibility",
            "Refactored a legacy KYC flow into an automated Face Liveness workflow to improve security and throughput.",
            "Built payment automation with Spring WebFlux and an event-driven design.",
          ],
        },
        {
          company: "Boost-It",
          role: "Full-Stack Software Engineer",
          period: "04/2024 - 11/2024",
          location: "Lisboa, Portugal",
          bullets: [
            "Played a pivotal role from project inception as Tech Lead, designing and modeling the database to meet client requirements, and conducting pull request reviews to ensure code quality.",
            "Delivered the stack with Next.js, Tailwind CSS, shadcn, React Query, Axios, NestJS, PostgreSQL, and TypeORM.",
            "Added Jest tests, OAuth integrations, and Sentry monitoring while reviewing pull requests as the team grew.",
          ],
        },
        {
          company: "Shaw and Partners",
          role: "Full-Stack Software Engineer",
          period: "06/2021 - 03/2024",
          location: "San Francisco, CA, USA",
          bullets: [
            "Built healthcare and insurance software that supported thousands of plans and contract workflows.",
            "Worked across TypeScript, PostgreSQL, Express, React, Redis, Node.js, and microservices.",
            "Implemented Slack integrations, a text-game feature, a community app, and real-time communication with WebSockets and GraphQL on AWS Lambda.",
          ],
        },
        {
          company: "VP6",
          role: "Full-Stack Software Engineer",
          period: "12/2020 - 05/2021",
          location: "Belo Horizonte, MG, Brasil",
          bullets: [
            "Developed enterprise consultancy apps with Java SpringBoot on the backend and React on the frontend.",
            "Focused on scalable delivery for business requirements that needed reliable operational software.",
          ],
        },
        {
          company: "OperData",
          role: "Full-Stack Software Engineer",
          period: "03/2020 - 12/2020",
          location: "Belo Horizonte, MG, Brasil",
          bullets: [
            "Designed and shipped a real-estate management platform from the first version to production.",
            "Used React, Node.js, Express, PostgreSQL, and some PHP to support back-office workflows.",
          ],
        },
        {
          company: "PUC Minas",
          role: "Academic Research",
          period: "01/2019 - 02/2020",
          location: "Belo Horizonte, MG, Brasil",
          bullets: [
            "Researched urban mobility and vehicular networks while completing the degree in computer science.",
            "Built the habit of working with technical depth before moving into product software delivery.",
          ],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let’s build something useful",
      description:
        "Open to product work, web applications, backend APIs, and database-heavy systems that need careful implementation.",
      resumeButton: "Download resume",
      resumeHref: "/assets/pdfs/GabrielZilmar-resume.pdf",
      emailCopied: "Email copied to clipboard!",
    },
    meta: {
      title: "Gabriel Zilmar | Full-stack Software Engineer",
      description:
        "Portfolio and profile page for Gabriel Zilmar, a full-stack software engineer focused on web applications, APIs, and databases with React, Node.js, PostgreSQL, and Java SpringBoot.",
      ogDescription:
        "Full-stack engineer focused on web applications, APIs, and database-backed systems.",
      twitterDescription:
        "Full-stack engineer focused on web applications, APIs, and database-backed systems.",
    },
  },
  "pt-br": {
    nav: {
      home: "INÍCIO",
      about: "Sobre mim",
      resume: "Currículo",
      contact: "Contato",
      languageLabel: "Idioma",
      english: "Inglês",
      portuguese: "Português",
      resumeModalTitle: "Selecione o idioma do currículo",
      resumeModalPrimary: "Português",
      resumeModalSecondary: "Inglês",
    },
    profile: {
      eyebrow: "Engenheiro de software full-stack",
      title: "Gabriel Zilmar",
      subtitle: "Construindo aplicações web, APIs e bancos de dados.",
      descriptions: [
        "Formado em Ciência da Computação pela PUC Minas, com experiência entregando software em produção no Brasil, Portugal e Estados Unidos.",
        "Meu foco é em aplicações web, APIs de backend, modelagem de dados e nos detalhes de entrega que mantêm o software confiável em produção.",
        "Minha experiência inclui trabalho full-stack com React, Next.js, Node.js, PostgreSQL, Java SpringBoot e serviços backend orientados a eventos.",
      ],
      metaChips: [
        "Ciência da Computação @ PUC Minas",
        "Aplicações web + APIs",
        "Modelagem de dados",
      ],
      technologiesLabel: "Stack principal",
      technologies: ["TypeScript", "React", "Node.js", "Next.js", "PostgreSQL"],
      highlights: [
        {
          label: "Foco",
          value:
            "Aplicações web, APIs e sistemas com banco de dados entregues em produção.",
        },
        {
          label: "Força",
          value:
            "Entrega backend-heavy com frontends em React, APIs e modelagem de dados.",
        },
        {
          label: "Experiência",
          value: `Linguagens: TypeScript, JavaScript, Java
Frameworks: Node.js, NestJS, Express, Spring Boot, React, Next.js
Bancos de Dados: PostgreSQL, DynamoDB, MongoDB
Cloud & DevOps: AWS, Lambda, Serverless, Docker, Kubernetes, CI/CD
APIs: REST, GraphQL, WebSockets
Testes: Jest, Cypress, Testes Unitários, de Integração e E2E
Arquitetura: Microsserviços, DDD, TDD, SOLID, Clean Code
Ferramentas: Git, GitHub Actions, Scrum`,
        },
        {
          label: "Idiomas",
          value: "Português (nativo) e Inglês (proficiência profissional)",
        },
      ],
      ctas: {
        primary: "Abrir currículo",
        primaryHref: "/assets/pdfs/GabrielZilmar-resume-pt-br.pdf",
        secondary: "Open resume in English",
        secondaryHref: "/assets/pdfs/GabrielZilmar-resume.pdf",
        contact: "Contato",
      },
      photoAlt: "Foto de perfil",
    },
    about: {
      label: "Sobre",
      title: "Perfil de experiência",
      intro: [
        "Desenvolvo aplicações web com forte foco em backend, normalmente trabalhando em APIs, modelagem de dados e nas partes do stack que mantêm o produto estável e fácil de manter.",
        "Me formei em Ciência da Computação na PUC Minas e também trabalhei com pesquisa acadêmica em mobilidade urbana e redes veiculares durante a universidade.",
      ],
      workLabel: "Como eu costumo trabalhar",
      workIntro: [
        "Prefiro limites claros, observabilidade e código que facilite a próxima mudança em vez de dificultá-la.",
        "Meu trabalho mais forte costuma ser em projetos onde eu assumo detalhes de implementação, desenho de API e banco de dados e a entrega até produção.",
      ],
      workTitle: "Como eu costumo trabalhar",
      stackLabel: "Stack",
      stackTitle: "Ferramentas para aplicações web e APIs",
      stacks: [
        {
          stackName: "Backend",
          stacks: [
            "Node.js",
            "Express",
            "Nest",
            "Koa",
            "Sequelize",
            "Spring Boot",
            "Firebase Functions",
            "Hapi",
            "AWS Lambda",
            "Prisma",
            "TypeORM",
          ],
        },
        {
          stackName: "Frontend",
          stacks: [
            "React",
            "Next.js",
            "Redux",
            "Styled Components",
            "Tailwind CSS",
          ],
        },
        {
          stackName: "Dados & Infra",
          stacks: ["PostgreSQL", "Redis", "AWS Lambda", "Docker", "CI/CD"],
        },
        {
          stackName: "Qualidade",
          stacks: ["Jest", "Testing Library", "Sentry", "OAuth", "GraphQL"],
        },
      ],
      experiencesLabel: "Trabalhos selecionados",
      experiencesTitle: "Trabalhos selecionados",
      experiences: [
        {
          company: "Lux Capital",
          role: "Full-Stack Software Engineer",
          period: "11/2024 - Atual",
          location: "New York, EUA",
          bullets: [
            "Liderei o desenvolvimento de uma exchange de criptomoedas como Tech Lead, implementando fluxos de compra e venda e um sistema de autorização baseado em RBAC.",
            "Liderei o desenho e a implementação de um modelo de permissões para uma aplicação, definindo papéis, grupos, permissões, acesso hierárquico e visibilidade de dados baseada em papéis",
            "Refatorei um fluxo legado de KYC para um fluxo automatizado de Face Liveness, melhorando segurança e throughput.",
            "Implementei automação de pagamentos com Spring WebFlux e arquitetura orientada a eventos.",
          ],
        },
        {
          company: "Boost-It",
          role: "Full-Stack Software Engineer",
          period: "04/2024 - 11/2024",
          location: "Lisboa, Portugal",
          bullets: [
            "Atuei como Tech Lead desde o início do projeto, sendo responsável pelo desenho e modelagem do banco de dados, alinhando a solução às necessidades do cliente e conduzindo revisões de Pull Requests para assegurar a qualidade do código.",
            "Entreguei a stack com Next.js, Tailwind CSS, shadcn, React Query, Axios, NestJS, PostgreSQL e TypeORM.",
            "Adicionei testes com Jest, integrações OAuth e monitoramento com Sentry, além de revisar pull requests conforme o time crescia.",
          ],
        },
        {
          company: "Shaw and Partners",
          role: "Full-Stack Software Engineer",
          period: "06/2021 - 03/2024",
          location: "San Francisco, CA, EUA",
          bullets: [
            "Desenvolvi software de saúde e seguros que suportava milhares de planos e fluxos contratuais.",
            "Trabalhei com TypeScript, PostgreSQL, Express, React, Redis, Node.js e microservices.",
            "Implementei integrações com Slack, um jogo de texto, uma comunidade e comunicação em tempo real com WebSockets e GraphQL em AWS Lambda.",
          ],
        },
        {
          company: "VP6",
          role: "Full-Stack Software Engineer",
          period: "12/2020 - 05/2021",
          location: "Belo Horizonte, MG, Brasil",
          bullets: [
            "Desenvolvi apps de consultoria enterprise com Java SpringBoot no backend e React no frontend.",
            "Foquei em entrega escalável para requisitos de negócio que exigiam software operacional confiável.",
          ],
        },
        {
          company: "OperData",
          role: "Full-Stack Software Engineer",
          period: "03/2020 - 12/2020",
          location: "Belo Horizonte, MG, Brasil",
          bullets: [
            "Projetei e entreguei uma plataforma de gestão imobiliária desde a primeira versão até produção.",
            "Usei React, Node.js, Express, PostgreSQL e um pouco de PHP para suportar fluxos internos.",
          ],
        },
        {
          company: "PUC Minas",
          role: "Pesquisa Acadêmica",
          period: "01/2019 - 02/2020",
          location: "Belo Horizonte, MG, Brasil",
          bullets: [
            "Pesquisei mobilidade urbana e redes veiculares durante a graduação em Ciência da Computação.",
            "Desenvolvi um hábito de profundidade técnica antes de migrar para entrega de produto.",
          ],
        },
      ],
    },
    contact: {
      label: "Contato",
      title: "Vamos construir algo útil",
      description:
        "Aberto a trabalho de produto, aplicações web, APIs de backend e sistemas com banco de dados que exigem implementação cuidadosa.",
      resumeButton: "Baixar currículo",
      resumeHref: "/assets/pdfs/GabrielZilmar-resume-pt-br.pdf",
      emailCopied: "E-mail copiado para a área de transferência!",
    },
    meta: {
      title: "Gabriel Zilmar | Engenheiro de Software Full-stack",
      description:
        "Portfólio e página de perfil de Gabriel Zilmar, engenheiro de software full-stack focado em aplicações web, APIs e bancos de dados com React, Node.js, PostgreSQL e Java SpringBoot.",
      ogDescription:
        "Engenheiro full-stack focado em aplicações web, APIs e sistemas com banco de dados.",
      twitterDescription:
        "Engenheiro full-stack focado em aplicações web, APIs e sistemas com banco de dados.",
    },
  },
};
