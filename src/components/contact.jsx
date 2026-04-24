import "../styles/contact.css"
import mail from "../assets/icons/icons8-mail.svg"


export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-text">
                <h2>Let's Chat!</h2>
                <p>Always up for building something cool, collaborating, or just a good conversation</p>

                <div className="contacts">
                    <div className="icon">
                        <img src={mail} alt="GMail" />
                    </div>
                    <div className="info">
                        <p>Mail me at:</p>
                        <p>pragyasriramaneni@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}