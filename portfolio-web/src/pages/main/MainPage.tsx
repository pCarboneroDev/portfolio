import "./MainPage.css"
import { useEffect } from "react"
import { AnimatedBackground } from "./components/animatedBackground"
import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { TopBar } from "./components/topbar"
import AOS from "aos";
import type { Project } from "@/interfaces/Project"
import { Skills } from "./components/skills"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { About } from "./components/about"
import { Analytics } from "@vercel/analytics/react"


export function MainPage() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-in-out",
            once: true,
            offset: 100,
            delay: 0,
            mirror: false,
        });
    }, []);

    const projects: Project[] = [
        {
            name: "Android Tuner App",
            description: "App that process audio in real time to indicate the user to loose or tighten the guitar strings. It also allows to save songs with determined tunings in a local database with the possibility to create, load and delete backups in the cloud of user data.",
            technologies: ["Kotlin", "Jetpack Compose", "Android"],
            images: ["https://raw.githubusercontent.com/pCarboneroDev/Carbonero-WebPortfolio/refs/heads/main/assets/images/androidTunerPreview.png"],
            actions: [
                { name: "GitHub", url: "https://github.com/pCarboneroDev/ProyectoFinalDam" }
            ]
        },
        {
            name: "Churn Prediction",
            description: "Web app that allows to predict if a customer will leave a company based on their data. It uses a machine learning model trained with Scikit-Learn and FastApi to create the backend of the app.",
            technologies: ["Python", "Machine Learning", "FastApi", "Scikit-Learn", "Pandas"],
            images: ["/project_images/captura_churn.png"],
            actions: [
                { name: "GitHub", url: "https://github.com/pCarboneroDev/ChurnPrediction" }
            ]
        },
        {
            name: "Satellite Images Classification",
            description: "Web app that allows to classify satellite images using deep learning techniques. It uses a convolutional neural network trained with PyTorch and Resnet-18 architecture.",
            technologies: ["Python", "React", "fastApi", "Scikit-Learn", "PyTorch", "Resnet-18"],
            images: ["/project_images/satellite.png", "/project_images/web_sat.png"],
            actions: [
                { name: "GitHub", url: "https://github.com/pCarboneroDev/eurosat_images_detector" }
            ]
        },
        {
            name: "Expenses Manager App",
            description: "Mobile app that allows users to manage their expenses and track their spending habits.",
            technologies: ["Flutter", "Python", "fastApi", "SQLite", "SqlAlchemy"],
            images: ["/project_images/expenses/expenses2.png", "/project_images/expenses/expenses1.png", "/project_images/expenses/expenses3.png", "/project_images/expenses/expenses4.png"],
            actions: [
                { name: "Frontend", url: "https://github.com/pCarboneroDev/expensesManager" },
                { name: "Backend", url: "https://github.com/pCarboneroDev/expensesManager_backend" }
            ]
        },
        {
            name: "Mencía. A never was tale.",
            description: "Mencía. A never was tale, is a 2D platformer, roguelike, in which you will have to face the invasion of cute aliens using the properties that a magic sword will give you.",
            technologies: ["C#", "Unity", "Steam"],
            images: ["https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2392660/header.jpg?t=1688542658", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2392660/ss_cd50fa80152870d7abf4212cceda873619a8eb95.1920x1080.jpg?t=1688542658", "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2392660/ss_700dea6d9da5c9bc48b4a81a2f63d38cfa06bd99.1920x1080.jpg?t=1688542658"],
            actions: [
                { name: "Steam", url: "https://store.steampowered.com/app/2392660/Mencia_A_never_was_tale/" }
            ]
        }
    ]
    return (
        <div className="relative min-h-screen bg-background">
            <AnimatedBackground />

            <div className="relative z-10">
                <TopBar></TopBar>

                <div className="pt-16">
                    <section id="Home" className="min-h-screen flex items-center justify-center px-4">
                        <Hero />
                    </section>

                    <section id="About" className="min-h-screen p-8">
                        <About></About>
                    </section>

                    <section id="Projects" className="min-h-screen p-8">
                        <Projects projects={projects} />
                    </section>
                    <section id="Skills" className="min-h-screen p-8">
                        <Skills></Skills>
                    </section>

                    {/* <section id="Experience" className="min-h-screen p-8">
                        <h2 className="text-3xl font-bold">Experience</h2>
                    </section> */}
                    <section id="Contact" className="min-h-screen p-8">
                        <Contact></Contact>
                    </section>
                </div>
                <Footer></Footer>
            </div>
            <Analytics/>
        </div>
    )
}

export default MainPage
