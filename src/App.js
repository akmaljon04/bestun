import repiat from "./image/image 1.svg";
import retangle160 from "./image/Rectangle 160.png";
import rectangle158 from "./image/Rectangle 158.png";
import ellipse1 from "./image/Ellipse 1.png";
import group219 from "./image/Group 219.png";
import rectangle165 from "./image/Rectangle 165.png";
import rectangle162 from "./image/Rectangle 162.png";
import rectangle163 from "./image/Rectangle 163.png";
import rectangle164 from "./image/Rectangle 164.png";
import rectangle1612 from "./image/Rectangle 161.png";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "./index.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    height: "60%",
    position: "absolute",
    top: "30%",
    left: "45%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    boxShadow: 24,
    margin: "0 auto",
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };
  const divStyle = {
    backgroundImage: 'url("/Rectangle 157.png")',
  };
  const img3 = {
    backgroundImage: `url(/img3.png)`,
  };
  const img1 = {
    backgroundImage: `url(/img1.png)`,
  };
  const img2 = {
    backgroundImage: `url(/img2.png)`,
  };

  return (
    <div className="App">
      <header style={divStyle}>
        <nav className="navbar navbar-expand-lg">
          <div class="container container-fluid">
            <img class="repiat" src={repiat} alt="logo" />
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
              <ul class="nav_link navbar-nav">
                <li>
                  <Link to={"/stilpage"}>About Us</Link>
                </li>
                <li>
                  <Link to={`/about`}>Cars</Link>
                </li>
                <li>
                  <Link to={"/stilpage"}>Cars Service</Link>
                </li>
                <li>
                  <Link to={"/stilpage"}>News</Link>
                </li>
                <li>
                  <Link to={"/stilpage"}>Contact Us</Link>
                </li>
              </ul>
              <Link className="lingu nav_but" to={`/rus`}>
                Rus
              </Link>
              <button class="logIn bor2 nav_but">
                <i class="fa-regular fa-user"></i>
                Log in
              </button>
            </div>
          </div>
        </nav>
        <div class="home">
          <div class="container">
            <div class="home_container">
              <div class="left_home">
                <Link to={"/stilpage"} class="logIn bor2">
                  Buy car
                </Link>
                <Link to={"/stilpage"} class="logIn bor2">
                  Pay in installments car
                </Link>
                <h1>Besturn</h1>
                <p>
                  We offer you the world's most famous brands, all as expected.
                </p>
              </div>
              <div class="right_home"></div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="link">
          <div class="container">
            <div class="link_container">
              <div class="left_link">
                <div class="big_box">
                  <div data-aos="fade-left" class="box">
                    <h2>Book a Test Drive</h2>
                    <i class="fa-solid fa-arrow-up-right-dots"></i>
                  </div>
                  <div data-aos="fade-right" class="box">
                    <h2>Browe the Range</h2>
                    <i class="fa-solid fa-arrow-up-right-dots"></i>
                  </div>
                  <div data-aos="fade-left" class="box box_bottm">
                    <h2>View current offers</h2>
                    <i class="fa-solid fa-arrow-up-right-dots"></i>
                  </div>
                </div>
                <img
                  className="left-img"
                  data-aos="fade-right"
                  src={retangle160}
                  alt="logo"
                />
              </div>
              <div class="right_link">
                <img
                  className="right-img"
                  data-aos="fade-left"
                  src={rectangle158}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up" class="crossover">
          <div class="container">
            <div class="crossover_container">
              <div data-aos="fade-right" class="blue"></div>
              <div data-aos="fade-left" class="red"></div>
              <div class="cross">
                <img className="ellip" src={ellipse1} alt="logo" />
                <h2>
                  FAW
                  <span class="cross_white">crossover</span>
                  x40
                </h2>
              </div>
              <div data-aos="fade-right" class="red_big"></div>
              <div class="faw">
                <div class="left_faw"></div>
                <div data-aos="zoom-in-left" class="right_faw">
                  <h2>FAW crossover x40</h2>
                  <p>
                    Movement inspires ideas. That is why Kia creates space to
                    inspire new ideas.Experience the newest Kia vehicles with
                    photos, videos and dynamic virtual interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up" class="video">
          <img className="bacround_img" src={rectangle1612} alt="logo" />
          <div class="container">
            <div class="video_container">
              <Button className="btnOnclick" onClick={handleOpen}>
                <img className="play_video" src={group219} alt="logo" />
              </Button>
              <Modal
                className="model-video"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  ></Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <iframe
                      className="iframe-video"
                      width="1330"
                      height="620"
                      src="https://www.youtube-nocookie.com/embed/NnwVNpQptUU?start=7"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </Typography>
                </Box>
              </Modal>
            </div>
          </div>
        </section>
        <section class="life_car">
          <div class="container">
            <div class="top_life">
              <div data-aos="zoom-in-down" class="text_life">
                <div class="h_red"></div>
                <h2>we Try life with car</h2>
              </div>
              <div data-aos="zoom-in-left" class="salon">
                <img src={rectangle165} alt="logo" />
              </div>
            </div>
            <div class="bottom_life">
              <img
                className="foto1"
                data-aos="fade-up"
                src={rectangle162}
                alt="logo"
              />
              <img
                data-aos="fade-up"
                class="centr_top"
                src={rectangle163}
                alt="logo"
              />
              <img
                className="foto2"
                data-aos="fade-up"
                src={rectangle164}
                alt="logo"
              />
            </div>
          </div>
        </section>
        <section data-aos="fade-up" class="category">
          <Slider {...settings} className="slider_cont">
            <div class="cart">
              <div class="cart_top1 top_bg" style={img3}></div>
              <div class="cart_bottom">
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
              </div>
            </div>
            <div class="cart">
              <div class="cart_top2 top_bg" style={img2}></div>
              <div class="cart_bottom">
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
              </div>
            </div>
            <div class="cart">
              <div class="cart_top3 top_bg" style={img1}></div>
              <div class="cart_bottom">
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
              </div>
            </div>
            <div class="cart">
              <div class="cart_top1 top_bg" style={img3}></div>
              <div class="cart_bottom">
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
              </div>
            </div>
            <div class="cart">
              <div class="cart_top2 top_bg" style={img2}></div>
              <div class="cart_bottom">
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
              </div>
            </div>
            <div class="cart">
              <div class="cart_top3 top_bg" style={img1}></div>
              <div class="cart_bottom">
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
              </div>
            </div>
          </Slider>
        </section>
        <section data-aos="fade-up" class="link_footer">
          <div class="container">
            <div class="link_footer_container">
              <div class="link_footer_left">
                <h2>Address:</h2>
                <a href="https://yandex.uz/maps/-/CCU9EPX0CC">
                  152A, Shota Rustaveli Street, Tashkent, Uzbekistan
                </a>
                <h2>Email:</h2>
                <a href="https://gmail/info@bestunegmail.com">
                  info@bestunegmail.com
                </a>
                <h2>Telfon:</h2>
                <a href="#">
                  +998 99 660 60 60 ,
                  <span class="right_phone">+998 71 770 70 70</span>
                </a>
              </div>
              <div class="link_footer_right">
                <form>
                  <input className="black" type="text" placeholder="Name" />
                  <input className="black" type="text" placeholder="Telefon" />
                  <button type="submit" class="footer_btn">
                    Qoldirish
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
