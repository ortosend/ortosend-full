export default function Login() {
  return (
    <div>
      <h1>Login Clínica</h1>
      <form method="POST" action="/api/login">
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}