import React from "react";
import "./Contact.scss";

export default function Contact() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const onChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const submit = e => {
    e.preventDefault();
  };
  return (
    <section className="contact" id="contact">
      <h1>
        <u>Contact me</u>
      </h1>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={state.name}
          onChange={onChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={onChange}
          required
        />
        <textarea
          name="message"
          value={state.message}
          onChange={onChange}
          placeholder="Your message goes here..."
          rows="5"
          coloumn="10"
        />
        <button onClick={submit}>Submit</button>
      </form>
    </section>
  );
}
