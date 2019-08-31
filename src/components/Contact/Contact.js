import React from "react";
import "./Contact.scss";

export default function Contact(props) {
  const { theme } = props;
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
  const inputStyles = {
    borderColor: theme === "dark" ? "#fff" : "#000",
    background: theme === "dark" ? "#484f61" : "#eceff1",
    color: theme === "dark" ? "#fff" : "#000"
  };
  return (
    <section
      className="contact"
      id="contact"
      style={{
        background: theme === "dark" ? "#484f61" : "#eceff1",
        color: theme === "dark" ? "#fff" : "#000"
      }}
    >
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
          style={inputStyles}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={onChange}
          required
          style={inputStyles}
        />
        <textarea
          name="message"
          value={state.message}
          onChange={onChange}
          placeholder="Your message goes here..."
          rows="5"
          coloumn="10"
          style={inputStyles}
        />
        <button
          onClick={submit}
          style={{
            borderColor: theme === "dark" ? "#fff" : "#000",
            color: theme === "dark" ? "#fff" : "#000"
          }}
          className="btn"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
