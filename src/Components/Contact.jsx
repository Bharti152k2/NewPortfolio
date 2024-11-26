import React from "react";
import "../CSS/Contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

function Contact() {
  {
    document.title = "Contact me";
  }
  return (
    <section className="contact">
      <div className="form">
        <h1>Contact</h1>
        <h3>Send me a Message</h3>

        <input type="text" placeholder="Name " />
        <input type="email" placeholder="Email " />
        <label>Message</label>

        <textarea placeholder="Type message here..."></textarea>
        <button className="Cbtn">Submit</button>
      </div>
      <div className="details">
        <h2>My Address</h2>
        <p>
          Hardeep Nagar Near Lamba Pind Chowk, Old Hoshiarpur Road,Jalandhar ,
          Punjab , 144009
        </p>
        <h2>Email Me</h2>
        <p>
          For Professional Information & General Enqueries :<br />
          <MdOutlineAlternateEmail />
          nidhi15sak@gmail.com
          <br />
          <IoCallOutline />
          +91 8764340543
        </p>
      </div>
    </section>
  );
}

export default Contact;
