import React,{useState} from 'react'
import repiat from "./image/image 1.svg";
import { Link } from "react-router-dom";
import Footer from "./footer";
function Stilpage() {
  return (
    <div className='Stilpage'>
      <nav class="about_nav navbar navbar-expand-lg">
        <div class="container">
          
            <Link to={`/`}>
              <img class="repiat" src={repiat} alt="logo" />
            </Link>
            <button
            class="navbar-toggler"
            type="button"
            style={{ backgroundColor: "white" }}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul class="about_li">
              <li>
                <Link to={'/'}>About Us</Link>
              </li>
              <li>
                <Link to={"/about"}>Cars</Link>
              </li>
              <li>
                <Link to={'/'}>Cars Service</Link>
              </li>
              <li>
                <Link to={'/'}>News</Link>
              </li>
              <li>
                <Link to={'/'}>Contact Us</Link>
              </li>
              <Link className="linguabout" to={`/stilpagerus`}>
              Rus
            </Link>
            <button class="logIn2 bor22 about_hov top-mar">
              <i class="fa-regular fa-user user_black about_hov"></i>
              Log in
            </button>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <section>
          <div className="container">
            <div className="stilcard">
              <h2 className='welcom'>Welcome Besturn</h2>
            <p className='thisstil'>The website is still being created. Please write down your phone number and name, and our staff will contact you.</p>
            <form className='formstil'>
              
              <input className='inpstil' type="text" placeholder='Name' name='name' />
              <input className='inpstil' type="text" placeholder='LastName' name='lastname'/>
              <input className='inpstil' type="text" name="phone" placeholder='Phone' />
              <button className='inpstil black' type='submit'>
                Submit
              </button>
            </form>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Stilpage