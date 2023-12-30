import Typography from "@/app/components/typography";
import {PropsWithChildren} from "react";
import {Experience, WorkExperience} from "@/app/util/experience";
import clsx from "clsx";
import Chip, {ChipSizes} from "@/app/components/chip";
import {Education, Educations} from "@/app/util/education";
import InlineLink from "@/app/components/link";

interface ContentSectionProps {
    header: string
}
function ContentSection(props: PropsWithChildren<ContentSectionProps>) {
    return (
        <div className={"flex flex-col gap-2"}>
            <Typography className={"uppercase font-bold text-lg tracking-wider sticky top-0 py-4 bg-white lg:static lg:top-auto"}>{props.header}</Typography>
            {props.children}
        </div>
    )
}

function AboutInfo() {
    return (
        <div className={"flex flex-col gap-4"}>
            <Typography className={"text-xl"}>Throughout my time as an engineer, I have been fortunate enough to work on a bit of everything in the web development cycle. I have designed architecture for full stack applications, built software both from the ground up and alongside legacy applications, designed database schemas, and managed deployments to cloud environments.</Typography>
            <Typography className={"text-xl"}>In the beginning, I worked as a contractor in the aerospace industry for <InlineLink href={"https://www.l3harris.com/"}>large companies</InlineLink> and <InlineLink href={"https://www.trustedspace.com/"}>startups</InlineLink>. Fast forward a few years and I moved over to climate tech working with <InlineLink href={"https://chargenetstations.com/"}>EV chargers</InlineLink> for a short stint and now I am mainly working with <InlineLink href={"https://specifx.com/"}>HVAC assets</InlineLink> for energy modeling.</Typography>
            <Typography className={"text-xl"}>My focus now is building great products that can make a difference in the areas I think need help - right now it is climate. Clearly, based on just this site my focus has not been on design for UX.</Typography>
            <Typography className={"text-xl"}>When I&apos;m not working, I&apos;m most likely snowboarding, rock climbing, cycling, curling, volunteering at my local curling club&apos;s events, or trying to build something out of wood.</Typography>
        </div>
    );
}

interface ExperienceItemProps {
    experience: Experience
}
function ExperienceItem(props: ExperienceItemProps) {
    const {experience} = props;
    const endYearMonth = experience.endDate ? `${experience.endDate.month}, ${experience.endDate.year}` : "Present"
    const dateDisplay = <div>{experience.startDate.month}&#x2c; {experience.startDate.year} &#8212; {endYearMonth}</div>

    const lightClassName = "text-slate-400 text-lg"
    const dateClassName = clsx(lightClassName, "uppercase text-xs text-wrap min-w-36 w-36")

    return (
        <div className={"flex flex-row gap-4 rounded-lg hover:ring-2 hover:ring-slate-100 hover:ring-offset-8 hover:ring-offset-slate-100 hover:bg-slate-100 transition-all duration-300 ease-in-out"}>
            <Typography className={dateClassName}>{dateDisplay}</Typography>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-row flex-wrap gap-2"}>
                    <Typography className={"text-lg"}>{experience.title}</Typography>
                    <Typography className={lightClassName}>{"|"}</Typography>
                    <div className={"flex gap-2 items-center"}>
                        <Typography className={lightClassName}>{experience.company}</Typography>
                        <InlineLink href={experience.companySite}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
                            </svg>
                        </InlineLink>
                    </div>
                </div>
                <Typography className={"text-md"}>{experience.description}</Typography>
                <div className={"flex flex-row flex-wrap gap-2 mt-2"}>
                    {experience.technicalKnowledge.map((tk) => <Chip size={ChipSizes.Small} className={"text-sm text-white"} key={`${experience.company}-${tk}`}>{tk}</Chip>)}
                </div>
            </div>
        </div>
    );
}

interface ExperienceListProps {
    experiences: Experience[]
}
function ExperienceList(props: ExperienceListProps) {
    return (
        <div className={"flex flex-col gap-16 mb-4"}>
            {props.experiences.map((e) => <ExperienceItem key={`${e.company}-exp`} experience={e}/>)}
        </div>
    );
}

function ResumeLink() {
    return (
        <InlineLink href={"/Ryan-Swift-Resume.pdf"} target={""} className={"group"}>
            <div className={"flex flex-row gap-1"}>
                Full resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 group-hover:translate-x-2 transform duration-200 ease-linear">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                </svg>
            </div>
        </InlineLink>
    )
}

interface EducationItemProps {
    education: Education
}

function EducationItem(props: EducationItemProps) {
    const {education} = props;
    return (
        <div className={"flex flex-row gap-4"}>
            <Typography className={"uppercase text-sm text-slate-400 min-w-36 w-36 "}>{education.degree}</Typography>
            <div className={"flex flex-col"}>
                <Typography className={"text-lg"}>{education.school}</Typography>
                <Typography className={"text-lg text-slate-400"}>{education.study}</Typography>
            </div>
        </div>
    );
}

interface EducationListProps {
    educationList: Education[]
}

function EducationList(props: EducationListProps) {
    return (
        <div className={"flex flex-col gap-8"}>
            {props.educationList.map((e) => <EducationItem key={`${e.degree}`} education={e}/>)}
        </div>
    );
}

function ProjectInfo() {
    return (
        <div className={"flex flex-col gap-4"}>
            <Typography className={"text-xl"}>No other public projects except for this one! I believe strongly in work-life balance. I work hard and efficiently when it is time to work and I enjoy my hobbies when I am off.</Typography>
            <Typography className={"text-xl"}>I do have small private projects that I have worked on between moving positions to learn something different. I am happy to share some of the early stages of those projects if interested. Some of this includes working with <InlineLink href={"https://auth0.com/"}>Auth0</InlineLink>, building an API with authentication, and using <InlineLink href={"https://gorm.io/docs/"}>gORM</InlineLink> for relational mapping.</Typography>
            <Typography className={"text-xl"}>The reason this project exists is because I had surgery over a long holiday week and could not get off the couch. I decided to learn something new with <InlineLink href={"https://tailwindcss.com/"}>Tailwind CSS</InlineLink> while I was stuck around the house.</Typography>
        </div>
    );
}


function FootNote() {
    return (
        <div className={"text-sm my-16 lg:mb-0"}>
            <Typography className={"text-slate-400"}>Design taken from <InlineLink href={"https://brittanychiang.com/"}>Brittany Chiang</InlineLink>. Coded by Ryan using <InlineLink href={"https://www.jetbrains.com/webstorm/"}>JetBrains Webstorm</InlineLink>, built using <InlineLink href={"https://nextjs.org/"}>Next.js</InlineLink> with <InlineLink href={"https://www.typescriptlang.org/"}>TypeScript</InlineLink> and <InlineLink href={"https://tailwindcss.com/"}>Tailwind CSS</InlineLink>. Font set to <InlineLink href={"https://fonts.google.com/specimen/Nunito+Sans"}>Nunito Sans</InlineLink>. Created components from scratch as needed.</Typography>
        </div>
    )
}

export default function MainContentSection() {
    return (
        <div className={"flex flex-col gap-8 w-full px-12 lg:p-12 lg:pl-0 lg:w-1/2"}>
            <ContentSection header={"About"}>
                <AboutInfo />
            </ContentSection>
            <ContentSection header={"Experience"}>
                <ExperienceList experiences={WorkExperience}/>
                <ResumeLink />
            </ContentSection>
            <ContentSection header={"Education"}>
                <EducationList educationList={Educations}/>
            </ContentSection>
            <ContentSection header={"Projects"}>
                <ProjectInfo/>
            </ContentSection>
            <FootNote/>
        </div>
    )
}