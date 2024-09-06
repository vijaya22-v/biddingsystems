import {useRef} from 'react'
import emailjs from '@emailjs/browser';
export default function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vie0qhj', 'template_gd0vjd8', form.current, 'rzr-zdUCJ65UsVWB2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

  };

  return (
    <section>
      <div className='container'>
    <div>
        <h2 className='chead'>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className='--form-control --card --flex-center --dir-column'>
            <div className='input'>
            <input type='text' placeholder='Full Name' name='user_name' required /> <br/>
            </div>
            <div className='input'>
            <input type='email' placeholder='Email' name='user_email' required /><br/>
            </div>
            <div className='input'>
            <input type='text' placeholder='Subject' name='subject' required /><br/>
            </div>
            <div className='input'>
            <textarea name="message"  cols="30" rows="10"></textarea><br/>
            </div>
            <button className='--btn --btn-primary' type='submit'>Send Message</button>
        </form>
    </div>
    </div>
</section>
  )
}
