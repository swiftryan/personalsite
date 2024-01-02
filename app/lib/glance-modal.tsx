"use client";

import Modal from "@/app/components/modal";
import Button from "@/app/components/button";
import {useState} from "react";
import Typography from "@/app/components/typography";
import Chip, {ChipSizes} from "@/app/components/chip";
import {Skill, Skills} from "@/app/util/experience";
import ContactLogos from "@/app/lib/contact-logos";

interface SkillItemProps {
    skill: Skill
}

// SkillItem is a single technical knowledge skill for the "At a glance" page
function SkillItem(props: SkillItemProps) {
    const { skill } = props;
    return (
        <div className={"flex flex-row gap-4"}>
            <Typography className={"min-w-36 w-36 uppercase"}>{skill.category}</Typography>
            <div className={"flex flex-row flex-wrap gap-1"}>
                {skill.knowledge.map((tk) => <Chip size={ChipSizes.Small}
                                                   className={"text-sm text-white"}
                                                   key={`${skill.category}-${skill.knowledge}`}>{tk}</Chip>)
                }
            </div>
        </div>
    );
}

interface SkillListProps {
    skills: Skill[]
}

// SkillList is a list of SkillItems
function SkillList(props: SkillListProps) {
    return (
        <div className={"flex flex-col gap-8"}>
            {props.skills.map((e) => <SkillItem key={`${e.category}`} skill={e}/>)}
        </div>
    );
}

// ModelToggle has both the modal for display and the toggle button to show the modal.
// The Modal is only available on the largest screen sizes
export default function ModalToggle() {
    const [hidden, setHidden] = useState<boolean>(true);
    const open = () => setHidden(false)
    const close = () => setHidden(true)

    // Button to show the Modal
    const ToggleButton = () => (
        <Button onClick={open} className={"px-0 py-0 text-emerald-400 hover:text-emerald-600 group"}>
            <div className={"flex flex-row gap-1"}>
                <Typography className={"text-sm"}>At a glance</Typography>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transform duration-200 ease-linear">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                </svg>
            </div>
        </Button>
    )

    return (
        <div>
            <ToggleButton/>
            <Modal id={"glance-modal"} tabIndex={-1} hidden={hidden} aria-hidden="true">
                <div className={"flex justify-center w-full h-dvh bg-slate-700/75 dark:bg-slate-500/75"}>
                    <div className={"relative top-24 h-max rounded-2xl bg-white dark:bg-slate-700 dark:text-white opacity-100 p-8 max-w-screen-md"}>
                        {/*Header*/}
                        <div className={"flex flex-row justify-between pb-4"}>
                            <Typography className={"font-bold text-4xl"}>At a glance...</Typography>
                            <Button onClick={close} className={"p-0 hover:text-emerald-600"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                                </svg>
                            </Button>
                        </div>
                        {/*Content*/}
                        <div className={"flex flex-col gap-8"}>
                            <div className={"text-slate-400"}>
                                <Typography className={"text-xl"}>Senior Full Stack Engineer. </Typography>
                                <Typography className={"text-xl"}>Frontend, Backend, Database, Infrastructure.</Typography>
                                <Typography className={"text-xl"}>Design and Build Everything.</Typography>
                            </div>
                            <SkillList skills={Skills}/>
                            <ContactLogos />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}