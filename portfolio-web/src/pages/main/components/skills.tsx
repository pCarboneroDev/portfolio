import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatabaseIcon, TelevisionSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { CpuIcon, RobotIcon, RocketLaunchIcon } from "@phosphor-icons/react";

export function Skills() {


    //var selectedCategory = "languages"; // This should be a state that changes when the user clicks on the category buttons
    const [selectedCategory, setselectedCategory] = useState("languages");

    return (
        <div>
            <h1 className="text-7xl font-bold text-center">
                My{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Skills
                </span>
            </h1>
            <br />
            <h2 className="text-2xl text-center">A showcase of my technical skills and expertise in software development</h2>

            {/* Bar to select which skills to show: Languages, frameworks, etc. */}
            <div className="flex justify-center mt-8 px-4 sm:px-6 lg:px-8">
                <Tabs
                    value={selectedCategory}
                    onValueChange={(value) => setselectedCategory(value)}
                    className="w-auto max-w-full sm:max-w-md md:max-w-2xl lg:max-w-4xl"
                >
                    <TabsList className="rounded-full p-1 flex flex-wrap justify-center gap-2 sm:gap-4" variant="line">
                        <TabsTrigger
                            value="languages"
                            className="gap-2 clickable"
                        >
                            <CpuIcon className="h-4 w-4" />
                            Languages
                        </TabsTrigger>

                        <TabsTrigger
                            value="front"
                            className="gap-2 clickable"
                        >
                            <TelevisionSimpleIcon className="h-4 w-4" />
                            Frontend
                        </TabsTrigger>

                        <TabsTrigger
                            value="back"
                            className="gap-2 clickable"
                        >
                            <RocketLaunchIcon className="h-4 w-4" />
                            Backend
                        </TabsTrigger>

                        <TabsTrigger
                            value="databases"
                            className="gap-2 clickable"
                        >
                            <DatabaseIcon className="h-4 w-4" />
                            Databases
                        </TabsTrigger>

                        <TabsTrigger
                            value="ia"
                            className="gap-2 clickable"
                        >
                            <RobotIcon className="h-4 w-4" />
                            IA
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>


            <div className="container mx-auto lg:px-50">
                {selectedCategory === "languages" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                        <div data-aos="fade-up" data-aos-delay="100">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-30" />
                                <p className="mt-2 text-center">Python</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="w-30" />
                                <p className="mt-2 text-center">Kotlin</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" className="w-30" />
                                <p className="mt-2 text-center">C#</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-30" />
                                <p className="mt-2 text-center">TypeScript</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" alt="Dart" className="w-30" />
                                <p className="mt-2 text-center">Dart</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-30" />
                                <p className="mt-2 text-center">Java</p>
                            </div>
                        </div>
                    </div>
                )}

                {selectedCategory === "front" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                        <div data-aos="fade-up" data-aos-delay="100">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-30" />
                                <p className="mt-2 text-center">React</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular" className="w-30" />
                                <p className="mt-2 text-center">Angular</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" className="w-30" />
                                <p className="mt-2 text-center">Flutter</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg" alt="Jetpack Compose" className="w-30" />
                                <p className="mt-2 text-center">Jetpack Compose</p>
                            </div>
                        </div>
                    </div>
                )}

                {selectedCategory === "back" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                        <div data-aos="fade-up" data-aos-delay="100">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".Net Core" className="w-30" />
                                <p className="mt-2 text-center">.Net Core</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="w-30" />
                                <p className="mt-2 text-center">FastAPI</p>
                            </div>
                        </div>
                    </div>
                )}

                {selectedCategory === "databases" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                        <div data-aos="fade-up" data-aos-delay="100">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" alt="SQL" className="w-30" />
                                <p className="mt-2 text-center">SQL</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQlite" className="w-30" />
                                <p className="mt-2 text-center">SQlite</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySql" className="w-30" />
                                <p className="mt-2 text-center">MySql</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" alt="Sqlalchemy" className="w-30" />
                                <p className="mt-2 text-center">Sqlalchemy</p>
                            </div>
                        </div>
                    </div>
                )}

                {selectedCategory === "ia" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                        <div data-aos="fade-up" data-aos-delay="100">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="scikit-learn" className="w-30" />
                                <p className="mt-2 text-center">scikit-learn</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="w-30" />
                                <p className="mt-2 text-center">Pandas</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center p-4 rounded-lg skill">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="Pytorch" className="w-30" />
                                <p className="mt-2 text-center">Pytorch</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}