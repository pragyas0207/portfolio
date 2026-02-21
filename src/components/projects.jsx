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
            title="House Price Prediction - Model Comparision"
            description="Implemented and compared multiple regression models to predict house prices using structured housing data.
Evaluated model performance using metrics like MAE and validation error to select the best-performing algorithm."
            tech="Python"
            link="https://github.com/pragyas0207/house-price-prediction-model-comparison"
            />
            <ProjectCard
            title="Anaemia Risk Prediction"
            description="Built a machine learning model to predict anaemia using patient hemoglobin levels, pixel color features, and gender.
Compared Logistic Regression, Decision Tree, and Random Forest, achieving ~95% accuracy with strong F1-score on imbalanced data.
Performed feature importance analysis and probability-based predictions for new patients."
            tech="Python"
            link="https://github.com/pragyas0207/anaemia-prediction-model"
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