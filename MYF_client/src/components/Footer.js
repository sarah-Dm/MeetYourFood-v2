import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id="footer-layout">
      <ul id="sommaire">
        <ul>
          <li>A propos</li>
          <li>
            <Link to="#">MeetYourFood</Link>
          </li>
          <li>
            <Link to="#">Carrière</Link>
          </li>
        </ul>
        <ul>
          <li>COMMUNAUTE</li>
          <li>
            <Link to="#">Partenariat</Link>
          </li>
          <li>
            <Link to="#">Partager avec un ami</Link>
          </li>
        </ul>
        <ul>
          <li>PRODUCT'HOTE</li>
          <li>
            <Link to="/create-account?host=1">Devenir Product'hôte</Link>
          </li>
          <li>
            <Link to="#">Accueillir des visiteurs</Link>
          </li>
        </ul>
        <ul>
          <li>ASSISTANCE</li>
          <li>
            <Link to="#">Support</Link>
          </li>
          <li>
            <Link to="#">Options d'annulation</Link>
          </li>
        </ul>
      </ul>
      <hr></hr>
      <section id="bottom_footer">
        <p>MeetYourFood. Tous droits réservés - 2021 - Sarah Damag</p>
        <div>
          <ul id="liens">
            <li>
              <Link to="#">Conditions générales</Link>
            </li>
            <li>
              <Link to="#">Politique de données personnelles</Link>
            </li>
            <li>
              <Link to="#">Plan du site</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Mentions légales</Link>
            </li>
          </ul>
          <ul id="liens_reseaux">
            <li>
              <a href="wwww.facebook.com">
                <FiFacebook size={25} />
              </a>
            </li>
            <li>
              <a href="wwww.twitter.com">
                <FiTwitter size={25} />
              </a>
            </li>
            <li>
              <a href="wwww.instagram.com">
                <FiInstagram size={25} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
