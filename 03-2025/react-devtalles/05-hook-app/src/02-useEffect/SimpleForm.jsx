import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log("formState changed!!!");
  }, [formState]);

  useEffect(() => {
    // console.log("Email changed!!!");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>

      <hr />

      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />

      {username === 'Miguel' && <Message />}

      <input
        type="email"
        name="email"
        placeholder="fernando@google.com"
        className="form-control mt-2"
        value={email}
        onChange={handleChange}
      />
    </>
  );
};
