export default function AuthForm({ title, name, textButton }) {
  return (
    <div className="auth">
      <h2 className="auth__heading">{title}</h2>
      <form
        className="auth__form"
        name={name}
        // onSubmit={evt => {onSubmit(evt); setIsLoading(true)}}
        noValidate
      >
        <fieldset className="auth__input-text">
          <label className="auth__field">
            <input
              id="email-input"
              // className={`auth__input auth__input_el_email${
              //   info.nameValidMessage ? ' popup__input_type_error' : ''}`}
              className="auth__input"
              // value={info.name}
              // onChange={handleInfoChange}
              type="email"
              name="email"
              required
              minLength="2"
              maxLength="40"
            />
            {/* <span className={`popup__input-error name-input-error${
              info.nameValid ? '' : ' popup__input-error_active'}`}
            >
              {info.nameValid ? '' : info.nameValidMessage}
            </span> */}
          </label>
          <label className="auth__field">
            <input
              id="password-input"
              // className={`auth__input auth__input_el_job${
              //   info.descriptionValidMessage ? ' auth__input_type_error' : ''}`}
              className="auth__input"
              // value={info.description}
              // onChange={handleInfoChange}
              type="password"
              name="password"
              required
              minLength="2"
              maxLength="200"
            />
            {/* <span className={`popup__input-error job-input-error${
              info.descriptionValid ? '' : ' popup__input-error_active'}`}
            >
              {info.descriptionValid ? '' : info.descriptionValidMessage}
            </span> */}
          </label>
        </fieldset>
        <button
          // className={`auth__save-button${
          //   isValid ? '' : ' auth__save-button_inactive'}`}
          className="auth__save-button"
          // disabled={!isValid}
          type="submit"
        >
          {/* {isLoading ? (
            <div className="popup__spinner"></div>
            ) : textButton} */}
          {textButton}
        </button>
      </form>
    </div>
  );
}
