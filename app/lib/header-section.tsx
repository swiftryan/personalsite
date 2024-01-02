import Typography from "@/app/components/typography";
import ModalToggle from "@/app/lib/glance-modal";
import ContactLogos from "@/app/lib/contact-logos";

// Beginning section of the page showing name, title, and short description
export default function HeaderSection() {
    return (
        <div className={"flex flex-col gap-4 w-full max-h-screen py-6 px-12 md:py-12 lg:w-1/2 lg:sticky lg:top-0"}>
            <Typography className={"font-bold text-4xl md:text-6xl"}>Ryan Swift</Typography>
            <Typography className={"text-2xl md:text-4xl text-wrap"}>Senior Full Stack Engineer and Developer</Typography>
            <Typography className={"text-base md:text-xl"}>I help design and build any part of an
                application - frontend, backend, database, deployment.</Typography>
            <div className={"hidden lg:inline-flex lg:grow"}>
                <ModalToggle />
            </div>
            <ContactLogos/>
        </div>
    )
}