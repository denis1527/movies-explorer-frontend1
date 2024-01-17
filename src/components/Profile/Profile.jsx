import React, { useState } from 'react';
import './profile.css';
import { NavLink } from 'react-router-dom';
import FormButton from '../FormButton/FormButton';

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);

  const handleEditProfile = () => {
    setEditProfile(true);
  };

  const handleSavingChanges = () => {
    // Submit changes
    // ...
    setEditProfile(false);
  };

  const user = {
    name: 'Denis',
    email: 'Denis@gmail.com',
  };

  return (
      <main className='profile'>
        <h1 className='profile__heading'>Привет, {user.name}!</h1>

        <form className='profile__form form'>
          <label className='form__label'>
            Имя
            <input
                className='form__input'
                type='text'
                name='name'
                value={user.name}
                minLength={2}
                maxLength={30}
                required={true}
                placeholder='Введите свое имя.'
            />
          </label>
          <label className='form__label'>
            E-mail
            <input
                className='form__input'
                type='email'
                name='email'
                value={user.email}
                minLength={2}
                maxLength={30}
                required={true}
                placeholder='Введите свой E-mail.'
            />
          </label>

          {editProfile ? (
              <FormButton
                  animation='scale-in-ver-top'
                  text='Сохранить'
                  onClick={handleSavingChanges}
                  margin='12.25rem'
                  smallScreenMargin={'22rem'}
              />
          ) : (
              <>
                <button
                    type='button'
                    className='profile__btn profile__btn_type_edit'
                    onClick={handleEditProfile}
                >
                  Редактировать
                </button>
                <button type='button' className='profile__btn profile__btn_type_exit'>
                  <NavLink to='/'>Выйти из аккаунта</NavLink>
                </button>
              </>
          )}
        </form>
      </main>
  );
};

export default Profile;
