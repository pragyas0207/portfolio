import "../styles/contact.css"
import linkedin from "../assets/icons/linkedin-brands-solid-full.svg"


export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-text">
                <h2>Let's Chat!</h2>
                <p>Feel free to reach out — I'm always open to learning, collaboration, and new opportunities.</p>

                <div className="contacts">
                    <a href="https://www.linkedin.com/in/pragya-chowdary-s-6963a8377/" target="_blank">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    )
}