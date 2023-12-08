import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthLinks.css';

const AuthLinks = () => {
  return (
    <div className="auth-links__container scale-up-center">
      <div className="auth-links__container_links-sign">
        <p>
          <NavLink to="/signup" className="auth-links__link">
            Регистрация
          </NavLink>
        </p>
        <form>
          <NavLink to="/signin">
            <button type="button" className="auth-links__button">
              Войти
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default AuthLinks;
