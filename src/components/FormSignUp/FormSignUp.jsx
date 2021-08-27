import React from 'react';
import validate from '../../helpers/validateInfo';
import useForm from '../../helpers/useForm';

const FormSignup = ( { submitForm } ) => {
  const { handleChange, handleRadioChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form__container'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <img src="./images/icon.png" alt="logo" />
        <h1 className="form__title">
          Sign Up with email
        </h1>
        <p>Gender</p>
        <div className='form__radio'>
          <div class="form__radio-btn">
            <input
              id="radio-1"
              type="radio"
              name="radio"
              value="male"
              checked={values === "male"}
              onChange={handleRadioChange}
            />
            <label htmlFor="radio-1">
              <img
                className="icon"
                src="./images/Male.png"
                alt="icon"
              />
              Male
            </label>
          </div>
          <div className="form__radio-btn">
            <input
              id="radio-2"
              type="radio"
              name="radio"
              value="female"
              checked={values === "female"}
              onChange={handleRadioChange}
            />
            <label htmlFor="radio-2">
              <img
                className="icon"
                src="./images/Female.png"
                alt="icon"
              />
              Female
            </label>
          </div>
          <div className="form__radio-btn">
            <input
              id="radio-3"
              type="radio"
              name="radio"
              value="other"
              checked={values === "other"}
              onChange={handleRadioChange}
            />
            <label htmlFor="radio-3">
              <img
                className="icon"
                src="./images/Other.png"
                alt="icon"
              />
              Other
            </label>
          </div>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>E-mail</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Create Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <p className='form-input-login'>
          Already have an account?
          <a href='#form-inputs'>
            Log In
          </a>
        </p>
        <p className='form-input-login'>
          Review privacy and disclosures
          <a href='#form-inputs'>
            here
          </a>
        </p>

      </form>
    </div>
  );
};

export default FormSignup;