import AuthForm from "./AuthForm";

export default function Register() {
  return (
    <>
      <AuthForm
        title="Регистрация"
        name="register"
        textButton="Зарегистрироваться"
      />
      <span className="">Уже зарегистрированы? Войти</span>
    </>
  );
}
