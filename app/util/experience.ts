enum TechnicalKnowledge {
    Typescript = "TypeScript",
    Javascript = "JavaScript",
    Go = "Go",
    Java = "Java",
    SQL = "SQL",
    HTML_CSS = "HTML/CSS",
    AWS = "AWS",
    AWS_CDK = "AWS CDK",
    React = "React",
    Docker = "Docker",
    Node_JS = "Node.js",
    Next_JS = "Next.js",
    Express_JS = "Express.js",
    Auth0 = "Auth0",
    Spring = "Spring Framework",
    ORMS = "ORMs",
    AMQP = "AMQP",
    Kafka = "Kafka",
    Kubernetes = "Kubernetes",
    PostgreSQL = "PostgreSQL",
    MongoDB = "MongoDB",
    Aurora = "AWS Aurora",
    DocumentDB = "AWS DocumentDB",
    GitHub = "GitHub",
    GitHubActions = "GitHub Actions",
    CodeBuild = "AWS CodeBuild",
    NPM = "NPM",
    Agile = "Agile",
    Kanban = "Kanban",
    CI_CD = "CI/CD",
    Git = "Git",
    IAC = "IaC",
    Linux = "Linux"
}

interface DateInfo {
    year: string,
    month: string,
}
export interface Experience {
    startDate: DateInfo,
    endDate?: DateInfo,
    title: string,
    company: string,
    companySite: string,
    description: string,
    technicalKnowledge: TechnicalKnowledge[],
}

export const WorkExperience: Experience[] = [
    {
        startDate: {
            year: "2023",
            month: "March"
        },
        title: "Senior Software Engineer",
        company: "Specifx",
        companySite: "https://specifx.com/",
        description: "Hired as company's first full stack developer and engineer to bring prototype HVAC asset data application to enterprise customers. Designed and built customer facing application and API, built all company AWS infrastructure, rebuilt the company's corporate website, and introduced Agile practices to the company. Constantly working with the Product team to build features for our customers.",
        technicalKnowledge: [
            TechnicalKnowledge.Typescript,
            TechnicalKnowledge.Go,
            TechnicalKnowledge.PostgreSQL,
            TechnicalKnowledge.MongoDB,
            TechnicalKnowledge.AWS,
            TechnicalKnowledge.Next_JS,
            TechnicalKnowledge.Auth0,
            TechnicalKnowledge.Agile,
        ]
    },
    {
        startDate: {
            year: "2022",
            month: "September"
        },
        endDate: {
            year: "2023",
            month: "January"
        },
        title: "Senior Software Engineer",
        company: "ChargeNet Stations",
        companySite: "https://chargenetstations.com/",
        description: "Developer for backend AWS microservices that communicate with third party EV chargers. Created the complete AWS infrastructure for new internal project used by the operations team, financiers, and owners of charging site. Contributor to a mobile application that allows customers to charge their vehicles.",
        technicalKnowledge: [
            TechnicalKnowledge.Typescript,
            TechnicalKnowledge.Go,
            TechnicalKnowledge.PostgreSQL,
            TechnicalKnowledge.AWS,
            TechnicalKnowledge.AWS_CDK,
            TechnicalKnowledge.IAC,
            TechnicalKnowledge.Kanban,
        ]
    },
    {
        startDate: {
            year: "2021",
            month: "April"
        },
        endDate: {
            year: "2022",
            month: "September"
        },
        title: "Software Engineer",
        company: "Trusted Space Inc.",
        companySite: "https://www.trustedspace.com/",
        description: "Full stack developer for space object catalog and object threat analysis, assessment, and mitigation web applications. Software engineering subject matter expert for the company R&D efforts, recruiting, and proposals.",
        technicalKnowledge: [
            TechnicalKnowledge.Typescript,
            TechnicalKnowledge.Javascript,
            TechnicalKnowledge.MongoDB,
            TechnicalKnowledge.Docker,
            TechnicalKnowledge.Agile,
        ]
    },
    {
        startDate: {
            year: "2020",
            month: "November"
        },
        endDate: {
            year: "2021",
            month: "April"
        },
        title: "Software Engineer",
        company: "Apex Systems",
        companySite: "https://www.trustedspace.com/",
        description: "Contractor for Lockheed Martin Space Program developing for a mission critical mission control application.",
        technicalKnowledge: [
            TechnicalKnowledge.Java,
            TechnicalKnowledge.Kanban,
            TechnicalKnowledge.Git,
            TechnicalKnowledge.Linux,
        ]
    },
    {
        startDate: {
            year: "2019",
            month: "November"
        },
        endDate: {
            year: "2020",
            month: "November"
        },
        title: "Full Stack Software Engineer",
        company: "Ridgeline International Inc.",
        companySite: "https://www.apexsystems.com/",
        description: "Developed, maintained, and deployed a full stack web application for persona management to access virtual machines and mobile devices. Architected and developed a custom web portal to grant users access to online training material given a short time-frame due to the global pandemic.",
        technicalKnowledge: [
            TechnicalKnowledge.Javascript,
            TechnicalKnowledge.HTML_CSS,
            TechnicalKnowledge.Node_JS,
            TechnicalKnowledge.Express_JS,
            TechnicalKnowledge.MongoDB,
            TechnicalKnowledge.Linux,
        ]
    },
    {
        startDate: {
            year: "2017",
            month: "February"
        },
        endDate: {
            year: "2019",
            month: "October"
        },
        title: "Software Engineer",
        company: "L3 Harris & Applied Defense Solutions",
        companySite: "https://www.l3harris.com/",
        description: "Architectural designer and developer for multiple R&D projects leading small teams of engineers. Lead developer and coordinator for the DARPA Hallmark program creating microservices to perform analysis between satellites. Upgraded APIs and user interfaces to provide operators with real-time data.",
        technicalKnowledge: [
            TechnicalKnowledge.Java,
            TechnicalKnowledge.Javascript,
            TechnicalKnowledge.Spring,
            TechnicalKnowledge.AMQP,
            TechnicalKnowledge.Docker,
            TechnicalKnowledge.Kubernetes,
            TechnicalKnowledge.CI_CD,
        ]
    }
]

export interface Skill {
    category: string,
    knowledge: TechnicalKnowledge[]
}

export const Skills: Skill[] = [
    {
        category: "Languages",
        knowledge: [
            TechnicalKnowledge.Typescript,
            TechnicalKnowledge.Javascript,
            TechnicalKnowledge.Go,
            TechnicalKnowledge.Java,
            TechnicalKnowledge.SQL,
            TechnicalKnowledge.HTML_CSS,
        ]
    },
    {
        category: "Software",
        knowledge: [
            TechnicalKnowledge.AWS,
            TechnicalKnowledge.AWS_CDK,
            TechnicalKnowledge.Docker,
            TechnicalKnowledge.React,
            TechnicalKnowledge.ORMS,
            TechnicalKnowledge.Node_JS,
            TechnicalKnowledge.Next_JS,
            TechnicalKnowledge.Express_JS,
            TechnicalKnowledge.Auth0,
            TechnicalKnowledge.Spring,
            TechnicalKnowledge.AMQP,
            TechnicalKnowledge.Kafka,
            TechnicalKnowledge.Kubernetes,
        ]
    },
    {
        category: "Databases",
        knowledge: [
            TechnicalKnowledge.PostgreSQL,
            TechnicalKnowledge.MongoDB,
            TechnicalKnowledge.Aurora,
            TechnicalKnowledge.DocumentDB,
        ]
    },
    {
        category: "Tools",
        knowledge: [
            TechnicalKnowledge.GitHub,
            TechnicalKnowledge.GitHubActions,
            TechnicalKnowledge.CodeBuild,
            TechnicalKnowledge.NPM,
        ]
    },
    {
        category: "Other",
        knowledge: [
            TechnicalKnowledge.Agile,
            TechnicalKnowledge.Kanban,
            TechnicalKnowledge.CI_CD,
            TechnicalKnowledge.IAC,
            TechnicalKnowledge.Git,
            TechnicalKnowledge.Linux,
        ]
    }
]