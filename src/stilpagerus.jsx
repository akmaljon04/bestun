import React,{useState} from 'react'
import repiat from "./image/image 1.svg";
import { Link } from "react-router-dom";
import Footeru from "./footeru";
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
            <ul class=" about_li">
              <li>
                <Link to={'/rus'}>О нас</Link>
              </li>
              <li>
                <Link to={"/aboutrus"}>автомобили
                  </Link>
              </li>
              <li>
                <Link to={'/rus'}>Автосервис</Link>
              </li>
              <li>
                <Link to={'/rus'}>Новости</Link>
              </li>
              <li>
                <Link to={'/rus'}>Связаться с нами</Link>
              </li>
              <Link className="linguabout left-log" to={`/stilpage`}>
              Анг
            </Link>
            <button class="logIn2 bor22 about_hov ">
              <i class="fa-regular fa-user user_black about_hov"></i>
              войти 
            </button>
            </ul>
          </div>
            
            
        </div>
      </nav>
      <main>
        <section>
          <div className="container">
            <div className="stilcard">
              <h2 className='welcom'>Добро пожаловать Бестурн</h2>
            <p className='thisstil'>Сайт еще создается. Пожалуйста, напишите свой номер телефона и имя, и наши сотрудники свяжутся с вами.</p>
            <form className='formstil'>
              
              <input className='inpstil' type="text" placeholder='Имя' name='name' />
              <input className='inpstil' type="text" placeholder='Фамилия' name='lastname'/>
              <input className='inpstil' type="text" name="phone" placeholder='Телефон' />
              <button className='inpstil black' type='submit'>
                Отправить
              </button>
            </form>
            </div>
          </div>
        </section>
      </main>
      <Footeru/>
    </div>
  )
}

export default Stilpage