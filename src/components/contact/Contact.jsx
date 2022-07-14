import React, { useRef } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_qsedsnw", "template_swczfec", form.current, "Dp57O6VHRkKKffPnf").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__options-icon" />
            <h4>Email</h4>
            <h5>abhishek9502as@gmail.com</h5>
            <a href="mailto:abhishek9502as@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__options-icon" />
            <h4>LinkedIn</h4>
            <h5>Abhishek Singh</h5>
            <a href="https://www.linkedin.com/in/abhishek-singh-9502as/" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__options-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8796426714</h5>
            <a href="https://api.whatsapp.com/send?phone=918796426714" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
