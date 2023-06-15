import React,{useEffect} from "react";
import "./index.css";
import repiat from "./image/image 1.svg";
import { Link } from "react-router-dom";
import Footer from "./footer";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {

  useEffect(() => {
    AOS.init();
  }, []);
  const rec0 = {
    backgroundImage: `url(/rec0.png)`,
  };
  const rec1 = {
    backgroundImage: `url(/rec1.png)`,
  };
  const rec2 = {
    backgroundImage: `url(/rec2.png)`,
  };
  const rec3 = {
    backgroundImage: `url(/rec3.png)`,
  };
  const rec4 = {
    backgroundImage: `url(/rec4.png)`,
  };
  const rec5 = {
    backgroundImage: `url(/rec5.png)`,
  };
  return (
    <div>
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
                <Link to={"/stilpage"}>About Us</Link>
              </li>
              <li>
                <Link to={"/"}>Cars</Link>
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
              <Link className="linguabout" to={`/aboutrus`}>
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
      <section class="about_me">
        <div class="container">
          <div class="about_container">
            <div class="about_card">
              <div class="about_card_left">
                <h2>FAW crossover x40</h2>
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Buy car
                </Link>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Pay in installments car
                </Link>
              </div>
              <div
                class="about_card_right1 about_card_right"
                style={rec0}
              ></div>
            </div>
            <div class="about_card">
              <div class="about_card_left">
                <h2>FAW crossover x40</h2>
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Buy car
                </Link>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Pay in installments car
                </Link>
              </div>
              <div
                class="about_card_right2 about_card_right"
                style={rec1}
              ></div>
            </div>
            <div data-aos="zoom-in" class="about_card">
              <div class="about_card_left">
                <h2>FAW crossover x40</h2>
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Buy car
                </Link>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Pay in installments car
                </Link>
              </div>
              <div
                class="about_card_right3 about_card_right"
                style={rec2}
              ></div>
            </div>
            <div data-aos="zoom-in" class="about_card">
              <div class="about_card_left">
                <h2>FAW crossover x40</h2>
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Buy car
                </Link>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Pay in installments car
                </Link>
              </div>
              <div
                class="about_card_right4 about_card_right"
                style={rec3}
              ></div>
            </div>
            <div data-aos="zoom-in" class="about_card">
              <div class="about_card_left">
                <h2>FAW crossover x40</h2>
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Buy car
                </Link>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Pay in installments car
                </Link>
              </div>
              <div
                class="about_card_right5 about_card_right"
                style={rec4}
              ></div>
            </div>
            <div data-aos="zoom-in" class="about_card">
              <div class="about_card_left">
                <h2>FAW crossover x40</h2>
                <p>
                  Movement inspires ideas. That is why Kia creates space to
                  inspire new ideas.Experience the newest Kia vehicles with
                  photos, videos and dynamic virtual interactions.
                </p>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Buy car
                </Link>
                <Link to={"/stilpage"} class="logIn2 bor22 margi_top">
                  Pay in installments car
                </Link>
              </div>
              <div
                class="about_card_right6 about_card_right "
                style={rec5}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
