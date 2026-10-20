
import { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Code2,
  MessageSquare
} from 'lucide-react';

import './Contact.css';


const CONTACT_EMAIL = 'pahalvanahirwar610@gmail.com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (CONTACT_EMAIL === 'yourname@example.com') {
      alert('Please add your email in Contact.jsx first.');
      return;
    }

    const subject = encodeURIComponent(
      formData.subject || 'Portfolio Contact'
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    );

    const mailtoLink =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="contact-page">
      <div className="contact-container">

        {/* PAGE HEADING */}
        <header className="contact-heading">
          <p className="contact-eyebrow">
            GET IN TOUCH
          </p>

          <h1>
            Contact <span>Me.</span>
          </h1>

          <p>
            Have an opportunity, a project idea or
            just want to connect? I'd love to hear
            from you.
          </p>
        </header>

        <div className="contact-layout">

          {/* LEFT SIDE */}
          <section className="contact-info">

            <div className="contact-info-heading">
              <div className="contact-heading-icon">
                <MessageSquare size={26} />
              </div>

              <h2>Let's Connect</h2>

              <p>
                I'm interested in entry-level
                software development opportunities,
                collaborative projects and
                meaningful conversations about
                technology.
              </p>
            </div>

            <div className="contact-details">

              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <Mail size={23} />
                </div>

                <div>
                  <h3>Email</h3>

                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3>Location</h3>
                  <p>Madhya Pradesh, India</p>
                </div>
              </div>

              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <Code2 size={23} />
                </div>

                <div>
                  <h3>GitHub</h3>

                  <a
                    href="https://github.com/pahalvanahirwar610-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View My Profile
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

            </div>

            <div className="contact-availability">
              <span className="availability-dot"></span>

              <div>
                <h3>Open to Opportunities</h3>
                <p>
                  Entry-level Frontend & Full Stack
                  Developer roles
                </p>
              </div>
            </div>

          </section>

          {/* RIGHT SIDE - CONTACT FORM */}
          <section className="contact-form-card">

            <div className="contact-form-heading">
              <h2>Send a Message</h2>
              <p>
                Fill out the form and your email
                app will prepare the message.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="contact-name">
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Your Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Job Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Hi Pahalvan, I'd like to discuss..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Prepare Email
                <Send size={18} />
              </button>

            </form>

            <p className="contact-form-note">
              Your email application will open
              to send this message.
            </p>

          </section>

        </div>

        {/* BOTTOM TEXT */}
        <div className="contact-bottom">
          <p>
            Thanks for visiting my portfolio!
            Let's build something meaningful.
          </p>
        </div>

      </div>
    </main>
  );
}

export default Contact;
