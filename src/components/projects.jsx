// make acard for each project...cards shud also include the github link
import ProjectCard from "./projectCard";
import "../styles/projects.css"
export default function Projects(){
    return(
        <section className="projects-pg">
        <section className="projects">
            <h2>Projects</h2>
            <div className="proj-card">
            <ProjectCard 
            title="Online Cafe"
            description="A MERN stack web app for ordering food online with authentication and admin panel"
            tech="MERN STACK"
            link="https://github.com/yourname/cafe"
            /> 
            <ProjectCard
            title="E-commerce clone"
            description="Clone of an e-commerce website like Flipkart"
            tech="MERN"
            link="https://github.com/pragyas0207/flipkart_clone"
            />
            <ProjectCard
            title="Portfolio"
            description="A web portfolio including projects and skills"
            tech="React"
            link="#"
            />
            <ProjectCard
            title="Cows & Bulls Game"
            description="Made a simple Cows & Bulls which generates random numbers for us to guess. Everytime user inputs a 3 or 4 or 5 digit number, It checks and returns whether a cow or Bull"
            tech="Python"
            link="https://github.com/pragyas0207/Cows-and-Bulls"
            />
            <ProjectCard
            title="To-Do List"
            description="A Simple To-Do List web app"
            tech="JavaScript"
            link="https://github.com/pragyas0207/To-Do-Web-App"
            />
            </div>
        </section>
        </section>
    )
}