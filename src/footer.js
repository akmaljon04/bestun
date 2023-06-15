import React from 'react'
import repiat from './image/image 1.svg'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="nav_container">
            <img class="repiat kichik" src={repiat} alt="logo" />
            <ul class="nav_link dispnone">
              <li>
                <Link to={'/stilpage'}>About Us</Link>
              </li>
              <li>
                <Link to={'/about'}>Cars</Link>
              </li>
              <li>
                <Link to={'/stilpage'}>Cars Service</Link>
              </li>
              <li>
                <Link to={'/stilpage'}>News</Link>
              </li>
              <li>
                <Link to={'/stilpage'}>Contact Us</Link>
              </li>
            </ul>
            <div class="link_chat">
              <a href=" https://www.instagram.com/bestune_hongqi/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/bestune.uz">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com/@chinaavtouz/featured">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.twitter.com/">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <hr class="footer_hr" />
          <div class="footer_fot">
            <h2>Copyright 2023</h2>
            <p>Bestune</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer