import React, { useState } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ReactWhatsapp from "react-whatsapp";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c2swf7b",
        "template_zicrhgj",
        form.current,
        "ERUAWHKoq1nh3XhlD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    toast.success("Your Message is Submitted Sucessfully");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>ateeqshareef11@gmail.com</h5>
            <a href="mailto:ateeqshareef11@gmail.com" target="_blank">
              Send Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Facebook</h4>
            <h5>Ateeq Shareef</h5>
            <a href="https://m.me/AteeqShareef12/" target="_blank">
              Send Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>WhatsAPP</h4>
            <h5>03024911096</h5>
            <small>
              <ReactWhatsapp
                className="react-whatsapp"
                number="+92 302 4911096"
                message=""
              >
                Send Message
              </ReactWhatsapp>
            </small>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
