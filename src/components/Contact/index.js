import Loader from 'react-loaders';
import './index.scss';
import { useEffect, useRef, useState } from 'react';
import TypeWriterLetters from '../TypeWriterLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const Contact = () => {
  const [letterClass, setLetterClass] = useState('letter-animation');
  const form = useRef();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('letter-animation-typeWriter');
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_8ty3k6s',
        'template_kect625',
        form.current,
        'PSuyS66q1OgzPuzoC'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <TypeWriterLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              letterClass={letterClass}
              index={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Abdoulrahmane Jalloh,
          <br />
          Guinea,
          <br />
          Conakry, Ratoma Town <br />
          <br />
          <span>abdoulramanediallo44@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[9.577351, -13.655848]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[9.577351, -13.655848]}>
              <Popup>
                Hello World! Abdourahamane lives here, come over for a cup of
                coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Contact;
