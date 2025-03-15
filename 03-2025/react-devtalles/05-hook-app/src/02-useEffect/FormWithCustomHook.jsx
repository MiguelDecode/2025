import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const initialForm = {
    username: "",
    email: "",
    password: "",
  };

  const { username, email, password, handleChange, handleReset } = useForm(initialForm);

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>

      <hr />

      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="fernando@google.com"
        className="form-control mt-2"
        value={email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        value={password}
        onChange={handleChange}
      />

      <button className="btn btn-primary mt-2" onClick={handleReset}>Borrar</button>
    </>
  );
};
