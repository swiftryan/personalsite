import HeaderSection from "@/app/lib/header-section";
import MainContentSection from "@/app/lib/main-content-section";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row">
            <HeaderSection />
            <MainContentSection />
        </div>
   </main>
  )
}
