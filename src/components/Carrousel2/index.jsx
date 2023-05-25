import React, { useState } from 'react';
import "./styles.css"

const Carousel2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/03/vitrine_site_ashley_johnson_aparecera_em_the_last_of_us_hbo_nerdbunker__89ger6-1210x544.jpg',
    'https://www.gamespot.com/a/uploads/original/43/434805/4029080-thelastofus%E2%84%A2parti_20220828174850.jpg',
    'https://www.arkade.com.br/wp-content/uploads/2023/01/joel-sarah.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7ac55a0b-26ad-4280-9c56-9e4439b1a001/dbq49vh-8b0d1996-4996-49ff-944d-aafe098ee723.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhYzU1YTBiLTI2YWQtNDI4MC05YzU2LTllNDQzOWIxYTAwMVwvZGJxNDl2aC04YjBkMTk5Ni00OTk2LTQ5ZmYtOTQ0ZC1hYWZlMDk4ZWU3MjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w07i_TizN4FkWU7_NdvRnIBtgAj3jJgbTC9l57ONJis',
    'https://i.pinimg.com/736x/44/d5/b8/44d5b8a25bfd24da50e18cafa1006516.jpg',
    'https://ovicio.com.br/wp-content/uploads/2023/02/20230207-bill02-ovicio-555x555.jpg',
  ];

  const slideTexts = [
    'Ellie Williams',
    'Joel Miller',
    'Sarah Miller',
    'Tess Servopoulos',
    'Tommy Miller',
    'Bill',
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const slideWidth = 900;
  const slideHeight = 600;

  return (
    <div className="container">


    <input type="radio" name="slider" className="d-none" id="s1" />
    <input type="radio" name="slider" className="d-none" id="s2" />
    <input type="radio" name="slider" className="d-none" id="s3" />
    <input type="radio" name="slider" className="d-none" id="s4" />
    <input type="radio" name="slider" className="d-none" id="s5" />

    <div className="cards">
      <label for="s1" id="slide1">
        <div className="card">
          <div className="image">
            <img src="https://www.gamespot.com/a/uploads/original/43/434805/4029080-thelastofus%E2%84%A2parti_20220828174850.jpg" alt="" />
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">Joel Miller</span>
            <span className="lorem">Joel Miller é o protagonista jogável de The Last of Us , e um personagem coadjuvante em The Last of Us: Left Behind e The Last of Us Part II , no qual ele é brevemente jogável.</span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>

      <label for="s2" id="slide2">
        <div className="card">
          <div className="image">
            <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2023/03/vitrine_site_ashley_johnson_aparecera_em_the_last_of_us_hbo_nerdbunker__89ger6-1210x544.jpg" alt="" />
            <div className="dots">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">Ellie Williams</span>
            <span className="lorem">Ellie Williams é a personagem central da série The Last of Us e The Last of Us Part II .</span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>

      <label for="s3" id="slide3">
        <div className="card">
          <div className="image">
            <img src="https://www.arkade.com.br/wp-content/uploads/2023/01/joel-sarah.jpg" alt="" />
            <div className="dots">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">Sarah Miller</span>
            <span className="lorem">Sarah Miller é a personagem jogável terciária e coadjuvante em The Last of Us . Ela era a filha de 12 anos de Joel antes do surto de infecção cerebral por Cordyceps .</span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>

      <label for="s4" id="slide4">
        <div className="card">
          <div className="image">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7ac55a0b-26ad-4280-9c56-9e4439b1a001/dbq49vh-8b0d1996-4996-49ff-944d-aafe098ee723.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhYzU1YTBiLTI2YWQtNDI4MC05YzU2LTllNDQzOWIxYTAwMVwvZGJxNDl2aC04YjBkMTk5Ni00OTk2LTQ5ZmYtOTQ0ZC1hYWZlMDk4ZWU3MjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w07i_TizN4FkWU7_NdvRnIBtgAj3jJgbTC9l57ONJis" alt="" />
            <div className="dots">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">Tess Servopoulos</span>
            <span className="lorem">Theresa "Tess" Servopoulos é uma personagem coadjuvante  em The Last of Us . Uma sobrevivente endurecida , ela foi a parceira de contrabando de Joel Miller por muito tempo . </span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>

      <label for="s5" id="slide5">
        <div className="card">
          <div className="image">
            <img src="https://i.pinimg.com/736x/44/d5/b8/44d5b8a25bfd24da50e18cafa1006516.jpg" alt="" />
            <div className="dots">
              <div className="dot1"></div>
              <div className="dot2"></div>
              <div className="dot3"></div>
            </div>
          </div>
          <div className="infos">
            <span className="name">Tommy Miller</span>
            <span className="lorem">Tommy é um personagem que aparece em The Last of Us e The Last of Us Part II. Ele é o irmão mais novo de Joel, tio paterno de Sarah</span>
          </div>
          <div className="socials">
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </label>
    </div>

  </div>
  );
};

export default Carousel2;
