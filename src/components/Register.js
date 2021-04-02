import React from "react";
import register from "../utils/auth";
import AuthForm from "./AuthForm";
import InfoTooltip from "./InfoTooltip";

export default React.memo(() => {
  const [infoToolOpen, setInfoToolOpen] = React.useState({
    isOpen: false,
    isSuccess: true
  });

  const { isOpen, isSuccess } = infoToolOpen;

  const handleClose = React.useCallback(() => {
    setInfoToolOpen({isOpen: false, isSuccess: true});
  }, []);

  function handleSubmit(email, password) {
    register(email, password)
      .then(res => {
        setInfoToolOpen({isOpen: true, isSuccess: true});
        console.log(res);
      })
      .catch(res => {
        setInfoToolOpen({isOpen: true, isSuccess: false});
        console.log(res);
      });
  }

  return (
    <>
      <AuthForm
        title="Регистрация"
        name="register"
        textButton="Зарегистрироваться"
        onSubmit={handleSubmit}
      >
        <span className="auth__span">Уже зарегистрированы? Войти</span>
      </AuthForm>
      <InfoTooltip
        isOpen={isOpen}
        onClose={handleClose}
        isSuccess={isSuccess}
      />
    </>
  );
});
