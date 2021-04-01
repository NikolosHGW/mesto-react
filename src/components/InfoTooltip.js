import React from 'react';
import succesSvg from '../images/Success.svg';
import failSvg from '../images/Fail.svg';

export default React.memo(({ isSuccess = false }) => {
  return (
    <div className="info-tool">
      <div className="info-tool__container">
        <button
          className="info-tool__close-icon"
          type="button"
          aria-label="close"
          // onClick={onClose}
        ></button>
        {isSuccess ? (
          <>
            <img className="info-tool__img" src={succesSvg} alt="succes icon" />
            <p className="info-tool__text">Вы успешно зарегистрировались!</p>
          </>
          ) : (
          <>
            <img className="info-tool__img" src={failSvg} alt="fail icon" />
            <p className="info-tool__text">Что-то пошло не так! Попробуйте ещё раз.</p>
          </>
          ) }
      </div>
    </div>
  );
});
