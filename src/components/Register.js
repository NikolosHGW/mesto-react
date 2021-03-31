import AuthForm from "./AuthForm";

export default function Register() {
  return (
    <>
      <AuthForm
        title="Регистрация"
        name="register"
        textButton="Зарегистрироваться"
      >
        <span className="auth__span">Уже зарегистрированы? Войти</span>
      </AuthForm>
    </>
  );
}
