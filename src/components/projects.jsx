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
            title="DataPrep.io"
            description="
A web app that accepts raw CSV uploads and automatically handles missing values, feature scaling, and categorical encoding to produce a clean, analysis-ready dataset. Built with a React frontend and FastAPI backend, it streamlines the data cleaning step that typically consumes the bulk of any ML workflow."
            tech="React, FastAPI"
            link="https://github.com/pragyas0207/DataPrep.io"
            /> 
            <ProjectCard
            title="Factory Pulse"
            description="FactoryPulse is an end-to-end predictive maintenance system for smart factories. It uses an XGBoost model trained on the AI4I dataset to predict machine failures, with SHAP values for feature-level explainability, what-if scenario analysis, and a React dashboard for real-time monitoring."
            tech="Python, React, FastAPI "
            link="https://github.com/pragyas0207/FactoryPulse"
            />
            <ProjectCard
            title="Anaemia Risk Prediction"
            description="Built a machine learning model to predict anaemia using patient hemoglobin levels, pixel color features, and gender.
Compared Logistic Regression, Decision Tree, and Random Forest, achieving ~95% accuracy with strong F1-score on imbalanced data.
Performed feature importance analysis and probability-based predictions for new patients."
            tech="Python"
            link="https://github.com/pragyas0207/Loan-prediction  "
            />
            <ProjectCard
            title="Loan Approval Prediction"
            description="The loan prediction model was built using a Random Forest classifier, which performed best among the evaluated models during training. The model was trained on cleaned and preprocessed applicant data, including demographic, financial, and credit history features. After evaluating multiple models, Random Forest was selected due to its higher accuracy and better overall performance. The trained model was then used to generate predictions for the unseen test dataset."
            tech="Python"
            link="https://github.com/pragyas0207/anaemia-prediction-model"
            />
            <ProjectCard
            title="House Price Prediction - Model Comparison"
            description="Implemented and compared multiple regression models to predict house prices using structured housing data.
Evaluated model performance using metrics like MAE and validation error to select the best-performing algorithm."
            tech="Python"
            link="https://github.com/pragyas0207/house-price-prediction-model-comparison"
            />
            <ProjectCard
            title="Portfolio"
            description="A web portfolio including projects and skills"
            tech="React"
            link="#"
            />
            </div>
        </section>
        </section>
    )
}