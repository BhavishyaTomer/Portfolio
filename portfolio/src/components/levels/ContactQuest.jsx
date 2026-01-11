import React, { useState } from 'react';
import Block from '../interactive/Block';
import Player from '../interactive/Player';
import '../../styles/levels.css';

const ContactQuest = ({ playerPos, onLevelChange, registerInteractable, unregisterInteractable }) => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! Thank you for reaching out.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className='level contact-quest'>
      <div className='portal-background'>
        <div className='end-portal-frame'></div>
        <div className='end-portal'></div>
      </div>

      {/* Return portal */}
      <Block
        x={5}
        y={85}
        type='portal'
        label='🚪 Return'
        color='#00FF00'
        onInteract={() => onLevelChange('spawn')}
        playerPos={playerPos}
        registerInteractable={registerInteractable}
        unregisterInteractable={unregisterInteractable}
      />

      {/* Contact Form Block */}
      <div className='contact-block'>
        <div className='block-header'>📧 SEND MESSAGE</div>
        <form onSubmit={handleSubmit} className='contact-form'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={contactForm.name}
            onChange={handleChange}
            required
            className='form-input'
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={contactForm.email}
            onChange={handleChange}
            required
            className='form-input'
          />
          <textarea
            name='message'
            placeholder='Your Message'
            value={contactForm.message}
            onChange={handleChange}
            required
            className='form-input'
            rows={4}
          />
          <button type='submit' className='send-button'>SEND MESSAGE</button>
        </form>
      </div>

      {/* Social Links Block */}
      <div className='social-block'>
        <div className='block-header'>🔗 CONNECT WITH ME</div>
        <div className='social-links'>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='social-link'>
            GitHub: github.com
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='social-link'>
            LinkedIn: linkedin.com
          </a>
          <a href='mailto:bhavishyatomer@gmail.com' className='social-link'>
            Email: bhavishyatomer@gmail.com
          </a>
        </div>
      </div>

      {/* Player */}
      <Player x={playerPos.x} y={playerPos.y} />

      {/* Quest Title */}
      <div className='quest-title portal-title'>
        <h2>📧 CONTACT PORTAL 📧</h2>
        <p>Reach out and connect with me!</p>
      </div>
    </div>
  );
};

export default ContactQuest;
