import Typography from "@/app/components/typography";
import ModalToggle from "@/app/lib/glance-modal";
import ContactLogos from "@/app/lib/contact-logos";

export default function HeaderSection() {
    return (
        <div className={"flex flex-col gap-4 w-full max-h-screen p-12 lg:w-1/2 lg:sticky lg:top-0"}>
            <Typography className={"font-bold text-6xl"}>Ryan Swift</Typography>
            <Typography className={"text-4xl"}>Senior Full Stack Engineer and Developer</Typography>
            <Typography className={"text-xl"}>I help design and build any part of an
                application - frontend, backend, database, deployment.</Typography>
            <div className={"hidden lg:inline-flex lg:grow"}>
                <ModalToggle />
            </div>
            <ContactLogos/>
        </div>
    )
}