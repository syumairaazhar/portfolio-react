import { useState } from "react";
import { motion as framerMotion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [popup, setPopup] = useState({ show: false, type: "", title: "", text: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      "service_ou7d6un",
      "template_2mqgfr6",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: "syumairaazhar@gmail.com"
      },
      "tPZ79-i4KyPOrPU01"
    )
      .then(() => {
        setIsSending(false);

        setPopup({
          show: true,
          type: "success",
          title: "Message Sent!",
          text: "Your message has been delivered successfully. I'll get back to you soon."
        });

        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error);

        setIsSending(false);

        setPopup({
          show: true,
          type: "error",
          title: "Failed to Send",
          text: "Something went wrong. Please try again later."
        });
      });
  };

  const closePopup = () => {
    setPopup({ ...popup, show: false });
  };

  return (
    <div className="page-content">
      <main className="contact-page">
        <div className="contact-page-inner">

          {/* Header */}
          <div className="section-header">
            <framerMotion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in <span className="highlight">Touch</span>
            </framerMotion.h1>
            <framerMotion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Have a project in mind or just want to say hi?<br />
              I'd love to hear from you — drop me a message below.
            </framerMotion.p>
          </div>

          {/* Form Card */}
          <framerMotion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} id="contactForm">

              <div className="field-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                <i className="fa-regular fa-user field-icon"></i>
                <label htmlFor="name">Your Name</label>
              </div>

              <div className="field-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                <i className="fa-regular fa-envelope field-icon"></i>
                <label htmlFor="email">Your Email</label>
              </div>

              <div className="field-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  rows="6"
                  required
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                <i className="fa-regular fa-message field-icon"></i>
                <label htmlFor="message">Your Message</label>
              </div>

              <button type="submit" className="btn contact-submit-btn" disabled={isSending}>
                {isSending ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>

            </form>
          </framerMotion.div>

          {/* Quick contact chips */}
          <framerMotion.div
            className="quick-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="mailto:syumairaazhar@gmail.com" className="quick-link-chip">
              <i className="fa-solid fa-envelope" style={{ color: "var(--color-primary)" }}></i> Email
            </a>
            <a href="https://linkedin.com/in/syumairaazhar" target="_blank" rel="noopener noreferrer" className="quick-link-chip">
              <i className="fa-brands fa-linkedin" style={{ color: "#0a66c2" }}></i> LinkedIn
            </a>
            <a href="https://github.com/syumairaazhar" target="_blank" rel="noopener noreferrer" className="quick-link-chip">
              <i className="fa-brands fa-github" style={{ color: "var(--text-primary)" }}></i> GitHub
            </a>
          </framerMotion.div>

        </div>
      </main>

      {/* Status Popup Dialog */}
      <AnimatePresence>
        {popup.show && (
          <div className="popup-message show">
            <framerMotion.div
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
            />

            <framerMotion.div
              className={`popup-box ${popup.type === "success" ? "popup-success" : "popup-error"}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.4 }}
            >
              <div className="popup-icon">
                {popup.type === "success" ? (
                  <i className="fa-solid fa-circle-check"></i>
                ) : (
                  <i className="fa-solid fa-circle-xmark"></i>
                )}
              </div>
              <h3>{popup.title}</h3>
              <p>{popup.text}</p>
              <button
                className="popup-ok-btn"
                onClick={closePopup}
                style={{
                  background: popup.type === "success"
                    ? "linear-gradient(135deg, #16a34a, #15803d)"
                    : "linear-gradient(135deg, #dc2626, #b91c1c)"
                }}
              >
                Got it
              </button>
            </framerMotion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;