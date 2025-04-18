import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.jsx';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
//   service_heo6l47
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(


        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Shrisha Kumar',
          from_email: form.email,
          to_email: 'shrishakumar007@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
<section className="c-space my-20 relative z-10" id="contact">
  {alert.show && <Alert {...alert} />}

  <div className="relative min-h-screen flex items-center justify-center flex-col overflow-hidden">
    <img
      src="/assets/terminal.png"
      alt="terminal-bg"
      className="absolute inset-0 h-full w-full object-cover z-0 opacity-20"
    />

    <div className="contact-container relative z-10 w-full max-w-2xl px-4 py-10 bg-black/60 backdrop-blur-md rounded-xl shadow-lg">
      <h3 className="head-text text-white">Let's talk</h3>
      <p className="text-lg text-white mt-3">
        Whether you’re looking to build a new website, improve your existing platform,
        or bring a unique project to life, I’m here to help.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
        <label className="space-y-3">
          <span className="field-label">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="ex., John Doe"
          />
        </label>

        <label className="space-y-3">
          <span className="field-label">Email address</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="ex., johndoe@gmail.com"
          />
        </label>

        <label className="space-y-3">
          <span className="field-label">Your message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="field-input"
            placeholder="Share your thoughts or inquiries..."
          />
        </label>

        <button className="field-btn flex items-center gap-2" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
          <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
        </button>
      </form>
    </div>
  </div>
</section>
  );
};

export default Contact;
