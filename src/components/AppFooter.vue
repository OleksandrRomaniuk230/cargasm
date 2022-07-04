<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer-top">
          <nav class="footer__nav">
            <ul class="footer__list media">
              <li class="footer__item">
                <a href="#">О нас</a>
              </li>
              <li class="footer__item">
                <a href="#">Как мы работаем</a>
              </li>
              <li class="footer__item">
                <a href="#">наши преимущества</a>
              </li>
              <li class="footer__item">
                <a href="#">Оплата и доставка</a>
              </li>
              <li class="footer__item">
                <a href="#">Вопросы и ответы</a>
              </li>
            </ul>
          </nav>
          <div class="footer__info">
            <router-link to="/"
              ><img src="../static/logo.svg" class="footer-logo" alt=""
            /></router-link>
            <nav>
              <ul class="footer__list">
                <li class="footer__item">
                  <span>ООО </span> <span>«КАРГАЗМ»</span>
                </li>
                <li class="footer__item">
                  <span>ИНН: </span> <span>«7702433495</span>
                </li>
                <li class="footer__item">
                  <span>ОГРН: </span> <span>1187746587005</span>
                </li>
              </ul>
            </nav>
            <nav>
              <ul class="footer__list footer__list_bottom">
                <li class="footer__item">
                  <a href="#">Политика конфиденциальности</a>
                </li>
                <li class="footer__item">
                  <a href="#">Правила использования информации</a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul class="footer__social-list">
                <li class="footer__social-item">
                  <a href="#" class="footer__social-link"
                    ><img src="../static/vk.svg" alt=""
                  /></a>
                </li>
                <li class="footer__social-item">
                  <a href="#" class="footer__social-link"
                    ><img src="../static/inst.svg" alt=""
                  /></a>
                </li>
                <li class="footer__social-item">
                  <a href="#" class="footer__social-link"
                    ><img src="../static/tg.svg" alt=""
                  /></a>
                </li>
                <li class="footer__social-item">
                  <a href="#" class="footer__social-link"
                    ><img src="../static/wt.svg" alt=""
                  /></a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="footer-top__wrapper">
            <div class="footer__about">
              <div class="footer__about_top">
                <h4 class="footer__title">CARGASM</h4>
                <nav>
                  <ul class="footer__list">
                    <li class="footer__item">
                      <a href="#">События</a>
                    </li>
                    <li class="footer__item">
                      <a href="#">Новости</a>
                    </li>
                    <li class="footer__item">
                      <a href="#">Блог</a>
                    </li>
                    <li class="footer__item">
                      <a href="#">Видео</a>
                    </li>
                    <li class="footer__item">
                      <a href="#">Поиск СТО</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <nav>
                <ul class="footer__list">
                  <li class="footer__item">
                    <a href="#">О нас</a>
                  </li>
                  <li class="footer__item">
                    <a href="#">Партнерам</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="footer__shop">
              <div class="footer__shop_top">
                <h4 class="footer__title">МАГАЗИН</h4>
                <nav>
                  <ul class="footer__list">
                    <li class="footer__item">
                      <a href="#">Каталог</a>
                    </li>
                    <li class="footer__item">
                      <a href="#">Контроль качества</a>
                    </li>
                    <li class="footer__item">
                      <a href="#">Контакты</a>
                    </li>
                    <li class="footer__item">
                      <a href="#">Корзина</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <nav>
                <ul class="footer__list">
                  <li class="footer__item">
                    <a href="#">Как мы работаем</a>
                  </li>
                  <li class="footer__item">
                    <a href="#">Наши преимущества</a>
                  </li>
                  <li class="footer__item">
                    <a href="#">Оплата и доставка</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="footer__support">
              <h4 class="footer__title">ПОДДЕРЖКА</h4>
              <nav>
                <ul class="footer__list">
                  <li class="footer__item">
                    <a href="#">
                      <img src="../static/phone.svg" alt="" />Как мы работаем</a
                    >
                  </li>
                  <li class="footer__item">
                    <a href="#">
                      <img src="../static/mail.svg" alt="" />Наши
                      преимущества</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p class="footer__item">Cargasm © All Rights Reserved 2016−2020</p>
      </div>
    </div>
  </footer>
</template>