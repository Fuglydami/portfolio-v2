import React, { useState } from 'react';
import { UilMessage } from '@iconscout/react-unicons';
import { validate } from '../../Utils/helper';
import { send } from 'emailjs-com';
import ContactModal from './ContactModal';

function ContactForm() {
  const [mail, setMail] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({});
  const [sent, setSent] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMail({ ...mail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = mail;

    const errors = validate(name, email, message);
    if (name && email && message) {
      setLoader(true);
      setError({});

      await send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        mail,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
        .then((response) => {
          setSent(true);
        })
        .catch((err) => {
          setSent(false);
        });

      console.log(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        mail,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      setMail({ name: '', email: '', message: '' });
      setLoader(false);
    } else {
      setError({ ...errors });
    }
  };

  return (
    <>
      <form className='contact__form grid' noValidate>
        <div className='contact__inputs grid'>
          <div className={`contact__content ${error.name && 'error'}`}>
            <label htmlFor='' className='contact__label'>
              Name
            </label>
            <input
              type='text'
              name='name'
              value={mail.name}
              className='contact__input'
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
          <div className={`contact__content ${error.email && 'error'}`}>
            <label htmlFor='' className='contact__label'>
              Email
            </label>
            <input
              type='text'
              name='email'
              value={mail.email}
              className='contact__input'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`contact__content ${error.message && 'error'}`}>
          <label htmlFor='' className='contact__label'>
            Message
          </label>
          <textarea
            name='message'
            id=''
            cols='0'
            rows='7'
            className='contact__input'
            onChange={handleChange}
            value={mail.message}
          ></textarea>
        </div>
        <div>
          <button className='button button--flex' onClick={handleSubmit}>
            Send message{' '}
            {loader ? (
              <div className='loadingio-spinner-dual-ring-y76a60ogklm'>
                <div className='ldio-vtjaoojajnm'>
                  <div></div>
                  <div>
                    <div></div>
                  </div>
                </div>
              </div>
            ) : (
              <UilMessage />
            )}
          </button>
        </div>
      </form>
      {sent && <ContactModal sent={sent} setSent={setSent} />}
    </>
  );
}

export default ContactForm;
