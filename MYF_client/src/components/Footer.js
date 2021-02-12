import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id="footer-layout">
      <ul id="sommaire">
        <ul>
          <li>ABOUT</li>
          <li>
            <Link to="#">About us</Link>
          </li>
          <li>
            <Link to="#">Careers</Link>
          </li>
        </ul>
        <ul>
          <li>COMMUNITY</li>
          <li>
            <Link to="#">Partnerships</Link>
          </li>
          <li>
            <Link to="#">Share with friends</Link>
          </li>
        </ul>
        <ul>
          <li>HOST</li>
          <li>
            <Link to="/create-account?host=1">Become a host</Link>
          </li>
          <li>
            <Link to="#">Share with friends</Link>
          </li>
        </ul>
        <ul>
          <li>ASSISTANCE</li>
          <li>
            <Link to="#">Help center</Link>
          </li>
          <li>
            <Link to="#">Cancel options</Link>
          </li>
        </ul>
      </ul>
      <hr></hr>
      <section id="bottom_footer">
        <p>©2020 MeetYourFood, Inc. All rights reserved</p>
        <ul id="liens">
          <li>Cookie policy and Personal data</li>
          <li>Legal notice</li>
          <li>Sitemap</li>
        </ul>
        <ul>
          <li>langue de la page</li>
          <li>devise de la page</li>
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
      </section>
    </footer>
  );
};

export default Footer;
