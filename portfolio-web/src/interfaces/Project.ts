export interface Project {
    name: string,
    description: string,
    technologies: string[],
    images: string[],
    actions: Action[]
}

export interface Action {
    name: string,
    url: string
}